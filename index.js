const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello, world!</h1>');
    res.end();
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    fs.readFile('404.html', function(err, data) {
      if (err) {
        console.log(err);
        res.write('404 Not Found');
      } else {
        res.write(data);
      }
      res.end();
    });
  }
});

server.listen(3000);
console.log("Listening on port 3000.");
