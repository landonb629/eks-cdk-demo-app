FROM node:latest as builder
WORKDIR /usr/src/app 
COPY package.json .
RUN npm install 
COPY . . 
RUN npm run build 

FROM nginx:latest as production
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /usr/src/app/dist .
ENTRYPOINT ["nginx", "-g", "daemon off;"]