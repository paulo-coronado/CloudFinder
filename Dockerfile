FROM nginx
RUN apk update
COPY . /usr/share/nginx/html
