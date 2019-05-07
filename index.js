const fs = require('fs');
const http = require('http');
const url = require('url');

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');

// return obj from json
const laptopData = JSON.parse(json);

const server = http.createServer((req, res) => {

  const pathName = url.parse(req.url, true).pathname;
  const id = url.parse(req.url, true).query.id;

  console.log(pathName);
  console.log(id);
 if (pathName === '/products' || pathName === '/') {
   res.writeHead(200, {'Content-type': 'text/html'});
   res.end('This is PRODUCTS');
 } else if (pathName === '/laptop' && id < laptopData.length) {
   res.writeHead(200, {'Content-type': 'text/html'});
   res.end(`This is LAPTOP page for laptop ${id}`);
 } else {
   res.writeHead(404, {'Content-type': 'text/html'});
   res.end('URL was not found on the server');
 }


});

server.listen(3000, '127.0.0.1', () => {
  console.log('Listening for requests now');
});
