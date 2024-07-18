FROM node:16

COPY . /app

WORKDIR /app

RUN yarn install

CMD ["yarn", "start"]

EXPOSE 8000