const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const databasePath = process.argv[2];
      await countStudents(databasePath);
      res.end();
    } catch (err) {
      res.end(`Error: ${err.message}`);
    }
  } else {
    res.end('Not found');
  }
});

app.listen(1245);

module.exports = app;
