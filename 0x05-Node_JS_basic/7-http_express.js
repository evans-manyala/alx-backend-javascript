const express = require('express');
const fs = require('fs');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const databasePath = process.argv[2];

  if (!fs.existsSync(databasePath)) {
    res.status(500).send('This is the list of our students\nError: Cannot load the database');
    return;
  }

  try {
    const studentData = await countStudents(databasePath);
    res.status(200).send(`This is the list of our students\n${studentData}`);
  } catch (err) {
    res.status(500).send(`This is the list of our students\nError: ${err.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
