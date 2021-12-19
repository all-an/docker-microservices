FROM node:14
WORKDIR .
COPY package*.json ./
RUN yarn
COPY . . 
EXPOSE 8083
CMD ["node", "app.js"]