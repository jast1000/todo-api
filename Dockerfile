FROM node:10

WORKDIR /opt/todo-api

COPY package*.json ./

RUN npm install --only=production

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
