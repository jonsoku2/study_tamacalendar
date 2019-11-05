# client

## 1. create-react-app 생성

```bash
$ npx create-react-app client
$ cd client
```

## 2. client/nginx폴더 생성

```bash
$ mkdir nginx
$ touch nginx/default.conf
```

2. 로컬에서 접속할 포트 지정 (테스트는 9999로 지정)

```
server {
  listen 9999;

  location / {
    root /usr/share/nginx/html;
    index index.html index.htm;
  }
}
```

> 나중에 9999포트는 docker-compose.yml의 nginx 기본 80포트랑 맞춰줘야함.
