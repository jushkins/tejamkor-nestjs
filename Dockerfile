
FROM node:18-alpine

WORKDIR /src/main

COPY package*.json ./

RUN npm install

COPY ./src ./src

COPY tsconfig.json .

EXPOSE 4000

RUN yarn run build

CMD [ "yarn", "run", "start" ]
