FROM node:16.15.1
WORKDIR /artbindu
COPY . .
RUN npm install -g nodemon \
    && npm install
EXPOSE 12345
CMD ["npm", "run", "start"]