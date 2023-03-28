import http from 'node:http';

const server = http.createServer((req, res) => {
  res.write('Hello !');
  res.end();
});

server.listen(process.env.PORT || 3000);
