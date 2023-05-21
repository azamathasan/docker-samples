FROM httpd:2.4
# COPY ./public-html/ /usr/local/apache2/htdocs/ # you can copy all html and other files for sharing; then you should make "docker-compose build" for adding this files to image
COPY ./httpd.conf /usr/local/apache2/conf/httpd.conf # file with 'ServerName 127.0.0.1'-line; you should make "docker-compose build" for adding this file to image; also you can add this file in volumes (docker-compose.yml)
