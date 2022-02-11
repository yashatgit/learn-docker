FROM node:16-alpine

# setup directory
WORKDIR /home/app

# copy only package.json first since it changes rarely compared to the actual code
COPY package.json ./

# install deps.
# on multiple image builds, if package.json is not changed, the npm install commang will also not run
# rather it will pick contents from cached layer
RUN npm install

# copy the rest of the files
COPY . .

# expose port to the outside environment
EXPOSE 3000

# run this when starting the container
CMD [ "node", "server.js" ]