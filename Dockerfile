# FROM node:12.18.4
# ENV NODE_ENV=production

# WORKDIR /app

# COPY package.json /app

# RUN npm install --production
# RUN npm install nodemon --save

# COPY . /app

# CMD ["npm", "start"]

# EXPOSE 3001

FROM node:12.18.4
ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install nodemon --save

COPY . .

EXPOSE 3001

CMD npm start && npm run seed



