format:
	black calendar_fu

build:
	python setup.py sdist bdist_wheel

run:
	python -m calendar_fu -D --file
	python3 -m calendar_fu --file --grabber-path /var/www/html/api/api --api-port 4020

install:
	pip install -r requirements*

	/usr/bin/python3 -m /home/develop01/fu-calendar/calendar_fu --file --grabber-path /var/www/html/api/api

venv:
	.venv/Scripts/activate
