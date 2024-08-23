const fs = require('fs');

function countstudentsData(fileName) {
  const studentsData = {};
  const dataFields = {};
  let length = 0;
  try {
    const fileContents = fs.readFileSync(fileName, 'utf-8');
    const lines = fileContents.toString().split('\n');
    for (let i = 0; i < lines.length; i += 1) {
      if (lines[i]) {
        length += 1;
        const field = lines[i].toString().split(',');
        if (Object.prototype.hasOwnProperty.call(studentsData, field[3])) {
          studentsData[field[3]].push(field[0]);
        } else {
          studentsData[field[3]] = [field[0]];
        }
        if (Object.prototype.hasOwnProperty.call(dataFields, field[3])) {
          dataFields[field[3]] += 1;
        } else {
          dataFields[field[3]] = 1;
        }
      }
    }
    const l = length - 1;
    console.log(`Number of studentsData: ${l}`);
    for (const [key, value] of Object.entries(dataFields)) {
      if (key !== 'field') {
        console.log(`Number of studentsData in ${key}: ${value}. List: ${studentsData[key].join(', ')}`);
      }
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countstudentsData;
