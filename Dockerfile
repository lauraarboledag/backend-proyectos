# imagen base a usar
FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4005

CMD ["node", "server.js"]



