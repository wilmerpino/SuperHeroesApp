FROM node:stretch-slim AS compile-image
RUN mkdir -p /app
WORKDIR  /app
COPY . /app
RUN npm cache clean --force
RUN npm install
RUN npm run build

FROM nginx:alpine
#COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=compile-image /app/dist/SuperHeroesApp /usr/share/nginx/html