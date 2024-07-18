FROM node:19-bullseye

COPY . /app

WORKDIR /app

RUN yarn install

CMD ["yarn", "start"]

EXPOSE 8000