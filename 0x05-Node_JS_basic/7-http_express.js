const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const databasePath = process.argv[2];
  let responseText = 'This is the list of our students\n';

  try {
    const data = await countStudents(databasePath);
    responseText += data;
    res.send(responseText);
  } catch (err) {
    res.send(`Error: ${err.message}`);
  }
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
