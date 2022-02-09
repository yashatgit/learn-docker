FROM node:16-alpine
# FROM centos/nodejs-12-centos7

WORKDIR /home/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8080
CMD [ "npm", "run", "start" ]