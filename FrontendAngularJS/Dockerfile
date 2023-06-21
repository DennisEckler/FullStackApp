FROM node:18-alpine

WORKDIR /app

COPY package*.json  ./

RUN npm install -g @angular/cli@16.1.0

COPY . .

CMD ["ng", "serve", "--host", "0.0.0.0"]