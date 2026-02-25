# Сервис интернет календарей для расписания университетских занятий
## Павел Сафонов ТРПО25-5 2026  год

### Описание

Сервис интернет календарей представляет из себя веб‑сервер, работающий по протоколам HTTP/HTTPS или WebDAV. Формат ответа сервера – файлы расширения `.ical`, соответствующие спецификации iCalendar (RFC 5545). За информацией о расписании сервис использует публичное REST API «Галактика: Расписание учебных занятий», который используется в Финансовом Университете как единственный источник расписания.

### Используемые технологии

**Python 3.8**

- **asyncio** – библиотека для написания асинхронного (конкурентного) кода
- **aiohttp** – библиотека для асинхронного HTTP‑сервера/клиента
- **aiomisc** – библиотека для удобного управления асинхронными сервисами
- **aioredis** – библиотека для асинхронного подключения к NoSQL базе данных Redis
- **icalendar** – библиотека для формирования файла календаря, придерживающегося спецификации iCalendar
- **marshmallow** – библиотека для сериализации/десериализации данных
- **ujson** – библиотека для работы с JSON форматом

**Redis** – NoSQL база данных

**Docker** – система контейнеризации

- **docker-compose** – инструмент для оркестрации Docker‑контейнеров

**GitHub Actions** – система автоматизации рабочих процессов

---

## Локальный запуск

### 1. Установка зависимостей

В корне проекта:

```bash
pip install -r requirements.txt
```
### 2. Запуск сервиса
```bash
python -m calendar_fu -D --file
```
Опции запуска:

-D – запуск в режиме отладки (debug)

--file – использование локального файла расписания (формата .ics) вместо внешнего API (если предусмотрено конфигурацией).

После запуска сервис будет доступен по адресу (по умолчанию, если не переопределено в конфиге):

```text
http://localhost:4040/
```
## Развертывание на удалённом сервере (Docker)
Ниже приведён пример типового развёртывания на любом Linux‑сервере с установленными Docker и docker‑compose. Все необходимые файлы (Dockerfile, docker-compose.yml, конфигурация nginx, статические файлы фронтенда и структура для файлов расписания) находятся в репозитории.

### 1. Подготовка сервера
Установка Docker и docker-compose (Ubuntu/Debian)
bash
sudo apt update
sudo apt install -y docker.io

sudo curl -L "https://github.com/docker/compose/releases/download/v2.27.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

sudo usermod -aG docker $USER
# перелогиниться или заново зайти по SSH
2. Клонирование репозитория
bash
git clone https://github.com/Powarar/calendar-fu.git
cd <repo-name>
Структура проекта (упрощённо):

```text
.
├── calendar_fu/          # исходный код сервиса
├── frontend/             # статические файлы фронтенда
├── ruz_files/            # файлы расписаний (.ics)
├── docker-compose.yml    # конфигурация Docker Compose
├── Dockerfile            # сборка backend
├── nginx.conf            # конфиг nginx для frontend + прокси на backend
└── ...
```
3. Файлы расписаний
Положите .ics‑файлы с расписанием в папку ruz_files в корне проекта.

Пример:

text
ruz_files/
└── group.ics
Если сервис поддерживает несколько групп/преподавателей, можно добавить несколько файлов с понятными именами (например, group_155702.ics).

4. Переменные окружения (опционально)
Если в проекте используется конфигурация через .env или аналогичный файл, создайте .env на основе примера:

bash
cp .env.example .env
nano .env
В .env обычно указываются:

путь к каталогу с файлами расписаний (например, RUZ_FILES_PATH=./ruz_files);

параметры подключения к Redis;

порт backend‑сервера и прочие опции.

5. Пример docker-compose.yml
Ниже приведён пример минимальной конфигурации (можно адаптировать под ваш репозиторий):

text
version: "3.8"

services:
  backend:
    build: .
    container_name: calendar-backend
    command: python -m calendar_fu.app
    environment:
      - RUZ_FILES_PATH=/app/ruz_files
      - REDIS_HOST=redis
      - REDIS_PORT=6379
    volumes:
      - ./ruz_files:/app/ruz_files:ro
    depends_on:
      - redis

  frontend:
    image: nginx:alpine
    container_name: calendar-frontend
    ports:
      - "80:80"
    volumes:
      - ./frontend:/usr/share/nginx/html:ro
      - ./nginx.conf:/etc/nginx/conf.d/default.conf:ro
    depends_on:
      - backend

  redis:
    image: redis:alpine
    container_name: calendar-redis
    ports:
      - "6379:6379"
6. Запуск на сервере
В корне проекта выполните:

bash
docker-compose up -d --build
Команда:

собирает образ backend из Dockerfile;

поднимает контейнеры backend, frontend (nginx) и redis согласно настройкам из docker-compose.yml.

Проверка статуса:

bash
docker-compose ps
7. Доступ к приложению
После успешного запуска фронтенд будет доступен по адресу:

text
http://<IP_сервера>/
Типичные маршруты:

API: http://<IP_сервера>/api/...

Календари (iCalendar): http://<IP_сервера>/calendar/....

Конкретные пути зависят от реализации роутинга в calendar_fu и конфигурации nginx.

8. Обновление версии на сервере
При обновлении кода (например, после git pull):

bash
cd <repo-name>
git pull
docker-compose down
docker-compose up -d --build
Это остановит текущие контейнеры, пересоберёт образы (если есть изменения) и запустит обновлённую версию сервиса.

9. Логи и отладка
Посмотреть логи backend:

bash
docker-compose logs -f backend
Посмотреть логи frontend (nginx):

bash
docker-compose logs -f frontend
Остановить все сервисы:

bash
docker-compose down