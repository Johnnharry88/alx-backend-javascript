const web = require('http');

const host = '127.0.0.1';
const port = 1245;

const app = web.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(port, host, () => {});

module.exports = app;
