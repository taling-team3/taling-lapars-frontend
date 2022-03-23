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
 RUN mkdir /usr/share/nginx/html/js
 RUN mkdir /usr/share/nginx/html/css

 RUN mv /usr/share/nginx/html/*.js /usr/share/nginx/html/js
 RUN mv /usr/share/nginx/html/*.js.map /usr/share/nginx/html/js
 RUN mv /usr/share/nginx/html/*.css /usr/share/nginx/html/css

