FROM node:12-alpine AS build

RUN apk update && apk add git

RUN mkdir -p /app

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

# -----------------

FROM node:12-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install --production

COPY --from=build ./app/dist/bmw-ng-test ./dist
COPY ./server.js .
COPY ./api/DBSeeder.js .
COPY ./auth_config.json .

ENV NODE_ENV=production
ENV SERVER_PORT=5000
ENV API_SERVER_PORT=3001

EXPOSE 5000
EXPOSE 3001

CMD ["npm", "run", "prod"]
