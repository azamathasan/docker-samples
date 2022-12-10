1. docker-compose run -d
2. docker ps
3. Copy your container id
4. docker exec -ti your_container_id sh
5. npx create-vuepress-site
6. If you get error "sh: 1: create-vuepress-site: Permission denied", type:
        chown -R root /usr/src
7. cd docs
9. npm install
10. npm run dev
11. If you get ERR_OSSL_EVP_UNSUPPORTED error, open package.json file and replace
    "dev": "vuepress dev src",
    "build": "vuepress build src"
  to
    "dev": "NODE_OPTIONS=--openssl-legacy-provider vuepress dev src",
    "build": "NODE_OPTIONS=--openssl-legacy-provider vuepress build src"
