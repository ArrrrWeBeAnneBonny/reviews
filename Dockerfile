# FROM node:12.18.4
# ENV NODE_ENV=production

# WORKDIR /app

# COPY package*.json ./

# RUN npm install
# RUN npm install nodemon --save

# COPY . .

# EXPOSE 3001

# CMD ["npm", "start"]


FROM node:12.18.4
ENV NODE_ENV=production

RUN mkdir /app
ADD . /app
WORKDIR /app
RUN npm install
RUN npm install nodemon --save

COPY . .

EXPOSE 3001
CMD ["npm", "run", "start"]
