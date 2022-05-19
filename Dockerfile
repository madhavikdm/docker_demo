FROM node:14.18.3-alpine
ARG BUILD_DATE
LABEL org.label-schema.build-date=$BUILD_DATE
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY ./dockerentrypoint.sh /

RUN chmod +x /docker-entrypoint.sh


COPY . .

EXPOSE 3000


CMD [ "npm", "start" ]
 
