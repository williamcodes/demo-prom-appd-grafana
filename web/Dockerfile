FROM node:11.11.0

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

WORKDIR /app

RUN npm ci

COPY . /app

ENTRYPOINT [ "node" ]

CMD [ "app.js" ]
