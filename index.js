var server = require('./server');
var port = 3000;

server.listen(port, function () {
  console.log('Example app listening at http://localhost:%s', port)
});
