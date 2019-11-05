# nginx

## 1. defaulf.conf

```config
upstream client {
    server client:3000;
}

upstream server {
    server server:3050;
}

server {
    listen 80;

    location / {
        proxy_pass http://client;
    }

    location /sockjs-node {
        proxy_pass http://client;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
    }

    location /api {
        rewrite /api/(.*) /$1 break;
        proxy_pass http://server;
    }
}
```

### 분해 1

```
upstream client {
    server client:3000;
}
```

> server client:3000 은 create-react-app의 기본 포트인 3000을 입력한다.

### 분해 2

```
upstream server {
    server server:3050;
}
```

> server server:3050; 은 docker-compose.yml에서 지정한 PORT=3050을 입력한다.

### 분해 3

```
server {
    listen 80;

    location / {
        proxy_pass http://client;
    }

    location /sockjs-node {
        proxy_pass http://client;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
    }

    location /api {
        rewrite /api/(.*) /$1 break;
        proxy_pass http://server;
    }
}
```

3-1. nginx 기본 설정값인 80포트를 사용.

```
listen 80;
```

3-2. client의 도메인은 proxy_pass한다.

```
location / {
    proxy_pass http://client;
}
```

3-3. 정규식.. /api/(.\*)로 들어오는 모든 것은 백앤드에서 /\$1로 받는다.

> 쉽게말해 프론트에서 /api/test로 요청되었으면 백앤드에선 /test로 작업하는것.

```
location /api {
    rewrite /api/(.*) /$1 break;
    proxy_pass http://server;
}
```
