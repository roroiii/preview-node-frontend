const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, 'dist', req.url === '/' ? 'index.html' : req.url);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      filePath = path.join(__dirname, 'dist', 'index.html');
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(404);
          res.end('cannot read file');
          return;
        }
        // in HTML file, inject settings
        const modifiedData = data
          .toString()
          .replace('</head>', `<script>window.ENV = { VITE_WS_URL: 'ws://localhost:9000' };</script></head>`);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(modifiedData);
      });
      return;
    }

    const ext = path.extname(filePath);
    const contentType =
      {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.gif': 'image/gif',
      }[ext] || 'text/plain';

    // if it's an HTML file, inject settings
    if (contentType === 'text/html') {
      const modifiedData = data
        .toString()
        .replace('</head>', `<script>window.ENV = { VITE_WS_URL: 'ws://localhost:9000' };</script></head>`);
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(modifiedData);
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

server.listen(8080, () => {
  console.log('Preview server is running!');
  console.log('Please open your browser and visit: http://localhost:8080');
  console.log('To stop the server, close this window.');
});
