FROM node:16-onbuild

# set maintainer
COPY package*.json ./
RUN npm start
CMD ["echo","builing image successfully"]
