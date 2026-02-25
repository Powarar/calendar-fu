import logging
from datetime import datetime, timedelta

from aiohttp.web import View, HTTPNotFound, HTTPServiceUnavailable
from aiohttp.web_response import Response
from multidict import MultiDict
from ujson import loads, dumps

from calendar_fu.cache import Cache
from calendar_fu.calendar_creator import (
    download_calendar_json,
    EmptySchedule,
    ServiceUnavailable,
    create_calendar,
)

log = logging.getLogger(__name__)


class BaseView(View):
    @property
    def cache(self) -> Cache:
        return self.request.app["cache"]


def params_handler(query: MultiDict) -> dict:
    try:
        params = {k: v.replace(";", ",").split(",") for k, v in query.items()}
    except Exception:
        params = {}
    exclude = set(params["ex"]) if "ex" in params else set()
    try:
        subgroups_include = dict(i.split("~") for i in params.get("sub", {}))
    except ValueError:
        subgroups_include = {}
    return {"exclude": exclude, "subgroups_include": subgroups_include}


class CalendarView(BaseView):
    async def get(self):
        type = self.request.match_info["type"]
        id = self.request.match_info["id"]
        params = params_handler(self.request.rel_url.query)
        filename = f"{type}_{id}"
        last_update = await self.cache.last_update(filename)
        if not last_update or last_update + timedelta(hours=4) < datetime.now():
            try:
                calendar = dumps(await download_calendar_json(id, type))
            except EmptySchedule:
                raise HTTPNotFound()
            except ServiceUnavailable:
                log.warning("Server was unavailable for %s %s", type, id)
                if not last_update:
                    raise HTTPServiceUnavailable()
                calendar = self.cache.get(filename)
            await self.cache.save(filename, calendar)
        else:
            calendar = await self.cache.get(filename)
        return Response(
            body=create_calendar(
                loads(calendar),
                f"https://schedule.fa.ru/calendar/{type}/{id}",
                **params,
            ),
            content_type="text/calendar",
            charset="utf-8",
        )
