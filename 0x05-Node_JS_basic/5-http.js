const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    fs.readFile('students.csv', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading students.csv:', err);
        res.end('Error reading students.csv');
      } else {
        const students = data.split('\n').filter((line) => line.trim() !== '');
        res.end(`This is the list of our students\n${students.join('\n')}`);
      }
    });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

module.exports = app;
