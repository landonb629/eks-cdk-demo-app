FROM node:latest

WORKDIR /usr/src/app

COPY package.json package-lock.json /usr/src/app

RUN npm install 

COPY . /usr/src/app

ENTRYPOINT ["npm", "run", "dev"]