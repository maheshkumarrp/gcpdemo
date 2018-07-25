var http = require('http');
var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end("Hello World! to Edureka GCP Partipicates again");
}
var www = http.createServer(handleRequest);
www.listen(8080);
