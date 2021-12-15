FROM python:3.8

WORKDIR /back

RUN apt-get update -y
RUN apt-get install -y git pipenv

RUN git clone https://github.com/JohnSteck9/soilsense-react.git

WORKDIR /back/soilsense-react/amplify/backend/function/soilapi/src
RUN pip3 install --upgrade pip -r requirements.txt
RUN pip3 install --user pipenv
RUN pip3 --no-cache-dir install --upgrade awscli
RUN pip3 install gunicorn

ENV STORAGE_SOILSENSEDB_NAME=soilsense-dev

EXPOSE 5000

CMD ["gunicorn", "-b", ":5000", "index:app"]
