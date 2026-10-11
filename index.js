const http = require('http');

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Devops Labs</title>
      </head>
      <body style="font-family: Arial; text-align: center; margin-top: 80px;">
        <h1>Devops-labs Deployment Successful!</h1>
        <p>Application deployed using AWS CodePipeline and Elastic Beanstalk.</p>
        <p>Node.js application is running successfully.</p>
      </body>
    </html>
  `);
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
