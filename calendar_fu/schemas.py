from datetime import datetime

from marshmallow import Schema, fields, post_load, EXCLUDE, pre_load


class DefaultString(fields.String):
    def deserialize(self, value, attr: str = None, data=None, **kwargs):
        if not value:
            return self.default
        output = self._deserialize(value, attr, data, **kwargs)
        self._validate(output)
        return output


class AudienceField(DefaultString):
    def _deserialize(self, value, attr, data, **kwargs):
        # FIXME костыль
        return value.replace("_", "-").split("/")[-1]


class DateField(fields.Field):
    def _deserialize(self, value, attr, data, **kwargs):
        return datetime.strptime(value, "%Y-%m-%d").timestamp()



class Pair(Schema):
    @pre_load()
    def get_groups(self, data: dict, many, **kwargs):
        data["groups"] = ", ".join(
            (data.get("group", None) or data.get("stream", None) or "-")
            .replace(" ", "")
            .split(",")
        )
        return data

    discipline_id = fields.Integer(data_key="disciplineOid")
    stream_id = fields.Integer(data_key="streamOid")
    time_start = fields.String(data_key="beginLesson")
    time_end = fields.String(data_key="endLesson")
    name = DefaultString(data_key="discipline", default="Без названия")
    type = DefaultString(data_key="kindOfWork", default="")
    groups = fields.Raw()
    audience = AudienceField(data_key="auditorium", default="Без аудитории")
    location = DefaultString(data_key="building", default="")
    teachers_name = DefaultString(
        data_key="lecturer", default="Преподователь не определен"
    )
    date = DateField()
    note = fields.String(allow_none=True)
    url1 = DefaultString(default="")
    url1_description = DefaultString(default="")
    url2 = DefaultString(default="")
    url2_description = DefaultString(default="")

    @post_load()
    def get_description(self, data: dict, many, **kwargs):
        note = data["note"] if data["note"] else ""
        data.pop("note")

        description = f"{data['type']}\nПреподаватель: {data['teachers_name']}\nГруппы: {data['groups']}\n{note}"
        data.pop("type"), data.pop("teachers_name"), data.pop("groups")

        if data["url1"]:
            description += f"{data['url1_description']}: {data['url1']}\n"
        data.pop("url1"), data.pop("url1_description")
        if data["url2"]:
            description += f"{data['url2_description']}: {data['url2']}\n"
        data.pop("url2"), data.pop("url2_description")

        data["description"] = description
        return data

    class Meta:
        unknown = EXCLUDE


class GroupsSchema(Schema):
    id = fields.Int(data_key="groupOid")
    label = fields.String(data_key="number")

    # faculty = fields.String()

    @post_load()
    def post_load(self, data, **kwargs):
        data["label"] = data["label"].strip()
        return data

    class Meta:
        unknown = EXCLUDE


class GroupsListSchema(Schema):
    pairs = fields.List(fields.Nested(GroupsSchema()))

    @pre_load()
    def pre_load(self, data, **kwargs):
        return {"pairs": data}

    @post_load()
    def post_load(self, data, **kwargs):
        return [i for i in data["pairs"] if i["label"][0] != "*"]


class LecturersSchema(Schema):
    id = fields.Int(data_key="lecturerOid")
    label = fields.String(data_key="fio")

    # faculty = fields.String(data_key='chair')

    @post_load()
    def post_load(self, data, **kwargs):
        data["label"] = data["label"].strip()
        return data

    class Meta:
        unknown = EXCLUDE


class LecturersListSchema(Schema):
    lecturers = fields.List(fields.Nested(LecturersSchema()))

    @pre_load()
    def pre_load(self, data, **kwargs):
        return {"lecturers": data}

    @post_load()
    def post_load(self, data, **kwargs):
        return [i for i in data["lecturers"] if i["label"][0] != "!"]
