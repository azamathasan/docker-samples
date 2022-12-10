1. docker-compose run -d
2. docker ps
3. Copy your container id
4. docker exec -ti your_container_id sh
5. npx create-vuepress-site
6. cd docs
7. npm install
8. npm run dev
9. If you get ERR_OSSL_EVP_UNSUPPORTED error, open package.json file and replace
    "dev": "vuepress dev src",
    "build": "vuepress build src"
  to
    "dev": "NODE_OPTIONS=--openssl-legacy-provider vuepress dev src",
    "build": "NODE_OPTIONS=--openssl-legacy-provider vuepress build src"
