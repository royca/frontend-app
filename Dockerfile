FROM nginx:alpine
LABEL author="Azure Habituer"
COPY ./dist/frontend-app /usr/share/nginx/html
EXPOSE 80 443
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
