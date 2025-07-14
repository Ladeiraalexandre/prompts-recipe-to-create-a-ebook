const http = require('http');

const port = process.env.PORT || 3000;
const serverName = process.env.SERVER_NAME || 'Servidor';

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(`Olá do ${serverName} na porta ${port}\n`);
});

server.listen(port, () => {
  console.log(`${serverName} rodando na porta ${port}`);
});
