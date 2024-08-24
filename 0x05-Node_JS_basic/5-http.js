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
      const studentInfo = await countStudents(databasePath);
      res.write(studentInfo);
      res.end();
    } catch (err) {
      res.write(`Error: ${err.message}`);
      res.end();
    }
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
