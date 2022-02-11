FROM node:16-alpine
# FROM centos/nodejs-12-centos7
# FROM sitespeedio/node:ubuntu-20.04-nodejs-12.14.1

WORKDIR /home/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD [ "npm", "run", "start" ]