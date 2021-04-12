FROM node:12 as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN npm install 

COPY . /app

EXPOSE 80

CMD ["npm", "start"]