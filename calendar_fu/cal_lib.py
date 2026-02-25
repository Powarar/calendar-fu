from hashlib import md5
from datetime import datetime
from typing import List

import pytz
from icalendar import Event, Calendar, Timezone, TimezoneStandard
from pytz import BaseTzInfo

UTC = pytz.timezone("UTC")


class IEvent:
    def __init__(
        self,
        summary: str,
        start: datetime,
        end: datetime,
        description: str = None,
        location: str = None,
    ):
        self.summary = summary
        self.start = start
        self.end = end
        self.description = description
        self.location = location
        self.uid = md5(
            (
                summary
                + start.astimezone(UTC).isoformat()
                + end.astimezone(UTC).isoformat()
                + (location if location else "")
                + (description if description else "")
            ).encode()
        ).hexdigest()

    def to_component(self, timezone: BaseTzInfo = None) -> Event:
        event = Event()
        event.add("summary", self.summary)
        if timezone and not self.start.tzname():
            event.add("dtstart", self.start.astimezone(timezone))
        else:
            event.add("dtstart", self.start)
        if timezone and not self.end.tzname():
            event.add("dtend", self.end.astimezone(timezone))
        else:
            event.add("dtend", self.end)
        event.add("dtstamp", self.start.astimezone(UTC))
        event.add("location", self.location)
        event.add("description", self.description)
        event.add("uid", self.uid)

        return event


class ICalendar:
    def __init__(
        self,
        name: str = None,
        description: str = None,
        version: str = "2.0",
        prodid: str = "-//PyCalendar//EN",
        period: str = None,
        color: str = None,  # css color name
        url: str = None,
        method: str = "PUBLISH",
        refresh_time: str = None,
        timezone: BaseTzInfo = None,
    ):
        self.name = name
        self.description = description
        self.version = version
        self.period = period
        self.color = color
        self.url = url
        self.timezone = timezone
        self.method = method
        self.prodid = prodid
        self.refresh_time = refresh_time
        self.events: List[IEvent] = []

    def add_event(self, event: IEvent):
        self.events.append(event)

    def ical(self) -> bytes:
        calendar = Calendar()
        calendar["version"] = self.version
        calendar["prodid"] = self.prodid
        calendar["method"] = self.method
        if self.color:
            calendar["color"] = self.color
        if self.url:
            calendar["url"] = self.url
        if self.name:
            calendar["X-WR-CALNAME"] = self.name
        if self.description:
            calendar["DESCRIPTION"] = self.description
            calendar["X-WR-CALDESC"] = self.description
        if self.refresh_time:
            calendar["X-PUBLISHED-TTL"] = self.refresh_time
            calendar.add("REFRESH-INTERVAL;VALUE=DURATION", self.refresh_time)

        if self.timezone:
            calendar["x-wr-timezone"] = self.timezone.zone
            calendar["TIMEZONE-ID"] = self.timezone.zone
            tz = Timezone()
            tz["TZID"] = self.timezone.zone

            tzs = TimezoneStandard()
            tzs["DTSTART"] = "16010101T000000"
            tzs["TZOFFSETFROM"] = datetime.now(self.timezone).strftime("%z")
            tzs["TZOFFSETTO"] = datetime.now(self.timezone).strftime("%z")
            tz.add_component(tzs)
            calendar.add_component(tz)

        for event in self.events:
            calendar.add_component(event.to_component(self.timezone))

        return calendar.to_ical()
