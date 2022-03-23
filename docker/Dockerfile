 # Frontend
 FROM node:16.13.2 as frontend
 
 RUN mkdir -p /app
 
 COPY . /app
 
 WORKDIR /app
 
 RUN yarn && yarn build
 
 # Application
 FROM nginx:stable-alpine
 RUN rm -rf /usr/share/nginx/html/*
 
 COPY --from=frontend /app/dist/* /usr/share/nginx/html/

