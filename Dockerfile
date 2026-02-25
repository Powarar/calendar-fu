FROM python:3.8-slim

WORKDIR /app

COPY . .

RUN pip install --no-cache-dir -r requirements.txt

CMD ["python", "-m", "calendar_fu", "-D", "--file", "--grabber-path=/app/calendar_fu/ruz_files"]
