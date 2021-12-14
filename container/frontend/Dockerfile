FROM node:16-alpine AS build-step

WORKDIR /app

RUN apk --no-cache add git

RUN git clone https://github.com/JohnSteck9/soilsense-react.git
WORKDIR /app/soilsense-react

RUN npm install
RUN npm run build

FROM nginx:stable-alpine

COPY --from=build-step /app/soilsense-react/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
