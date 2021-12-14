FROM python:3.8

WORKDIR /publish

RUN apt-get update -y
RUN apt-get install -y git

RUN git clone https://github.com/JohnSteck9/soilsense-react.git

WORKDIR /publish/soilsense-react/1

RUN pip3 install requests

CMD ["python3", "post.py"]
