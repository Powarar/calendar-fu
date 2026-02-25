import socket
from pathlib import Path

import pytest
from aiohttp import web
from aiohttp.test_utils import TestServer, TestClient
from yarl import URL

from calendar_fu.services import CalendarService


@pytest.fixture
def rest_port(aiomisc_unused_port_factory):
    return aiomisc_unused_port_factory()


@pytest.fixture(scope="session")
def localhost():
    params = (
        (socket.AF_INET, "127.0.0.1"),
        (socket.AF_INET6, "::1"),
    )
    for family, addr in params:
        with socket.socket(family, socket.SOCK_STREAM) as sock:
            try:
                sock.bind((addr, 0))
            except Exception:
                pass
            else:
                return addr
    raise RuntimeError("localhost unavailable")


@pytest.fixture
def rest_url(localhost, rest_port):
    return URL(f"http://{localhost}:{rest_port}")


@pytest.fixture
async def rest_service(localhost, rest_port):
    return CalendarService(address=localhost, port=rest_port, cache_type="no", )


@pytest.fixture
def services(rest_service):
    return [rest_service]


@pytest.fixture()
async def api_client(localhost, rest_port):
    server = TestServer(web.Application())
    server._root = URL.build(scheme="http", host=localhost, port=rest_port)

    client = TestClient(server)
    try:
        yield client
    finally:
        await client.close()


@pytest.fixture()
def path_test() -> Path:
    return Path(__file__).parent
