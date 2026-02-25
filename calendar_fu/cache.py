from datetime import datetime, timedelta
from os import path, stat

from aiomisc.io import async_open
from aioredis import Redis


class Cache:
    async def last_update(self, filename: str) -> datetime or None:
        """
        returns datetime of last update or None if file not exists
        """
        raise NotImplementedError

    async def get(self, filename: str) -> str:
        raise NotImplementedError

    async def save(self, filename: str, file: str):
        raise NotImplementedError


class NoCache(Cache):
    async def last_update(self, filename: str) -> datetime or None:
        return None

    async def save(self, filename: str, file: str):
        pass


class RedisCache(Cache):
    def __init__(self, redis: Redis):
        self.redis = redis
        self.ttl = 60 * 60 * 48

    async def last_update(self, filename: str) -> datetime or None:
        if not await self.redis.exists(filename):
            return None
        seconds_lived = self.ttl - await self.redis.ttl(filename)
        return datetime.now() - timedelta(seconds=seconds_lived)

    async def get(self, filename: str) -> str:
        return await self.redis.get(filename)

    async def save(self, filename: str, file: str):
        await self.redis.set(filename, file, expire=self.ttl)


class FileCache(Cache):
    def __init__(self, files_path: str):
        self.path = files_path

    def _join_path(self, filename: str) -> str:
        return path.join(self.path, filename)

    async def last_update(self, filename: str) -> datetime or None:
        file_path = self._join_path(filename)
        if not path.exists(file_path):
            return None
        return datetime.fromtimestamp(stat(file_path).st_atime)

    async def get(self, filename: str) -> str:
        async with async_open(self._join_path(filename), "r") as file_desc:
            content = await file_desc.read()
        return content

    async def save(self, filename: str, file: str):
        async with async_open(self._join_path(filename), "w") as file_desc:
            await file_desc.write(file)
