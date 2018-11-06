FROM python:3

WORKDIR /backend
COPY . /backend

RUN pip install --trusted-host pypi.python.org -r requirements.txt
EXPOSE 5000
CMD ["python", "server.py"]
