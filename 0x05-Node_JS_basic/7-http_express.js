const express = require('express');
const fs = require('fs');
const path = require('path');
const csvParse = require('csv-parse');

const app = express();
const port = 1245;

// Helper function to read and parse CSV file
const readCSVFile = (filePath, callback) => {
  fs.readFile(filePath, (err, data) => {
    if (err) return callback(err);
    csvParse(data, { columns: true, trim: true }, (err, records) => {
      if (err) return callback(err);
      // Filter out empty lines
      const validRecords = records.filter((record) => Object.values(record).some((value) => value.trim() !== ''));
      callback(null, validRecords);
    });
  });
};

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const { dbName } = req.query;
  if (!dbName) {
    return res.status(400).send('Database name is required');
  }

  const filePath = path.join(__dirname, dbName);

  readCSVFile(filePath, (err, records) => {
    if (err) return res.status(500).send('Error reading CSV file');

    if (records.length === 0) {
      return res.send('This is the list of our students\nNo students found');
    }

    const studentList = records.map((record) => record.name).join('\n');
    res.send(`This is the list of our students\n${studentList}`);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
