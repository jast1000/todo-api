FROM node:8.11.1

WORKDIR /opt/todo-api

COPY package.json package-lock.json* ./

RUN npm cache clean --force && npm install

COPY . /opt/todo-api

EXPOSE 3000

CMD [ "npm", "run", "start" ]