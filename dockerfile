FROM node:20

WORKDIR /app

COPY prisma ./

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD [ "npm", "start" ]