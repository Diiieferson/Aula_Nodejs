const http = require('http');
const url  = require('url');
const queryString = require('query-string');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const params = queryString.parse(url.parse(req.url, true).search);
    // console.log(params);

    let resposta;
    if (params.pergunta == 'melhor-filme'){
        resposta = 'Star Wars';
    }
    else if (params.pergunta == 'melhor-tecnologia-backend'){
        resposta = 'nodejs';
    }else{
        resposta = 'não sei desculpe';
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(params.resposta);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});