from pathlib import Path

from ujson import loads

from calendar_fu.calendar_creator import create_calendar


async def test_not_ok(api_client):
    async with api_client.get("calendar/group/rwersdf") as response:
        assert response.status == 404

    async with api_client.get("calendar/grop/9331") as response:
        assert response.status == 404


async def test_create_calendar(path_test: Path):
    with (path_test / "test_pairs_data.json").open() as file:
        test_data = loads(file.read())
    calendar = create_calendar(
        test_data,
        "https://bot.fa.ru/test"
    )
    with (path_test / "test_pairs_data.ical").open("rb") as file:
        expected_data = file.read()
    assert calendar.replace(b"\r", b"") == expected_data.replace(b"\r", b"")


async def test_all_ok(api_client):
    async with api_client.get("calendar/group/9331") as response:
        assert response.status == 200
