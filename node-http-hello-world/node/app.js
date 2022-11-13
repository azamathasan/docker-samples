const http = require('http');

const hostname = '0.0.0.0'; // don't use localhost or 127.0.0.1 (for my Ubuntu-host)
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
