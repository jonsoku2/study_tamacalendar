# docker-compose.yml

## 1. 작성

```docker
version: "3"
services:
  client:
    build:
      dockerfile: Dockerfile.dev
      context: ./client
    volumes:
      - ./client/:/app
      - /app/node_modules
    networks:
      - backend
  server:
    build:
      dockerfile: Dockerfile.dev
      context: ./server
    volumes:
      - ./server/:/app
      - /app/node_modules
    environment:
      - NODE_PATH=src
      # (컨테이너 내부) 순수 백앤드 포트
      - PORT=3050
      - DB_HOST=mongo
      - DB=test
      - REDIS_HOST=redis
      - REDIS_PORT=6379
    networks:
      - backend
    depends_on:
      - mongo
      - redis
    ports:
      # (컨테이너 내부) 순수 백앤드 포트 3050을
      # (로컬) 5000로 변환
      - "5000:3050"
  redis:
    container_name: redis
    image: redis
    environment:
      - ALLOW_EMPTY_PASSWORD=yes
    networks:
      - backend
    volumes:
      - data:/data/redis
    ports:
      - "6379:6379"
    restart: always
  mongo:
    container_name: mongo
    image: mongo
    volumes:
      - data:/data/db
    ports:
      - "27017:27017"
    networks:
      - backend

  nginx:
    restart: always
    build:
      dockerfile: Dockerfile.dev
      context: ./nginx
    ports:
      # 3000 은 client 포트
      # nginx는 client의 nginx 와 일치해야한다
      # (예시 - ./client/nginx/default.conf)
      # server {
      #   listen 9999;

      #   location / {
      #     root /usr/share/nginx/html;
      #     index index.html index.htm;
      #   }
      # }

      - "9999:80"
    networks:
      - backend

networks:
  backend:
    driver: bridge

volumes:
  data:
    driver: local
# 1. 백쪽 포트는 가려진다.
# 2. 프론트쪽 포트는 docker-compose.yml 의 nginx에서 로컬로보내는 포트와
#    프론트(client)의 nginx sever-listen과 일치하면 된다.

```
