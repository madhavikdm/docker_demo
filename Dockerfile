FROM node:14.18.3-alpine

# set maintainer
COPY package*.json ./
RUN npm start
CMD ["echo","builing image successfully"]
