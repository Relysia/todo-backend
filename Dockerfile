FROM node:10-alpine

ADD . /appDir

WORKDIR /appDir

CMD ["npm", "start"]

EXPOSE 5000