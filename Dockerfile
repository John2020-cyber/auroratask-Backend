FROM node:slim

COPY backend.js /opt/backend.js
WORKDIR /opt
RUN npm init --yes
RUN npm i express
ENTRYPOINT node /opt/backend.js
