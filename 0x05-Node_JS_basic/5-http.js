const http = require('http');
const fs = require('fs');

// Create the HTTP server
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    // Read the CSV file asynchronously
    fs.readFile('students.csv', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading students.csv:', err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error reading students.csv');
      } else {
        // Parse the CSV data
        const students = data.split('\n').filter((line) => line.trim() !== '');

        // Display the list of students
        res.end(`This is the list of our students:\n${students.join('\n')}`);
      }
    });
  } else {
    // Handle not found
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

// Start listening on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
