var http = require("http");

http.createServer(function (request, response) {
  response.writeHead(200,{'Content-Type':'text/html'});
  response.write('Hello World, my name is Jose Cuchilla!');
}).listen(8001);

console.log('Server is running on port 8001 fam!');
