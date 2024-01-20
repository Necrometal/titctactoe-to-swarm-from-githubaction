FROM nginx:1.25.3-alpine-slim

WORKDIR /usr/share/nginx/html

COPY index.html .

COPY src/ ./src/

EXPOSE 80
