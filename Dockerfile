FROM public.ecr.aws/docker/library/node:18-alpine

# RUN mkdir -p /usr/src/app && chown -R node:node /usr/src/app

# WORKDIR /usr/src/app

# COPY --chown=node:node package*.json ./

# USER node

# RUN npm ci

# COPY --chown=node:node . .

# CMD [ "npm", "run", "start" ]

# FROM node:alpine

RUN mkdir -p /usr/src/node-app && chown -R node:node /usr/src/node-app

WORKDIR /usr/src/node-app

COPY package*.json ./

USER node

RUN npm ci

COPY --chown=node:node . .

CMD [ "npm", "run", "start" ]