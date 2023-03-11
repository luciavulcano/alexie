FROM node:18.15.0

WORKDIR /app

ADD . .

RUN npm install

RUN npm run build

CMD ["npm", "run", "host"]
