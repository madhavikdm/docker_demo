FROM node:16-onbuild

# set maintainer

RUN npm start
CMD ["echo","builing image successfully"]
