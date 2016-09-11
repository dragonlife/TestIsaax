
car http=require('http');
var server=ttp.createServer();　
server.on('request', function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});　
  res.write('Hello World');
  res.end();
})
server.listen(8080, '0.0.0.0')

