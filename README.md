<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Running App  

### API Getawey

```bash

cd api-gateway

npm install 

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Microservice

```bash

cd microservice-name

npm install 

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Running with Docker

```bash
# development
docker-compose -f docker-compose.dev.yml

# deploy from Docker hub
docker-compose -f docker-compose.prod.yml
```

## Config Environment

```bash
cp .env.example .env
```