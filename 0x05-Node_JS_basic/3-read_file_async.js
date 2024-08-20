const fs = require('fs');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);

function countStudents(path) {
  return readFileAsync(path, 'utf8')
    .then(data => {
      const lines = data.split('\n');

      const fields = lines[0].split(',');
      const studentsPerField = {};

      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line === '') {
          continue;
        }
        const studentData = line.split(',');
        const firstName = studentData[0];
        const field = studentData[studentData.length - 1];

        if (!studentsPerField[field]) {
          studentsPerField[field] = [];
        }
        studentsPerField[field].push(firstName);
      }

      const numberOfStudents = Object.values(studentsPerField).reduce((acc, fieldStudents) => acc + fieldStudents.length, 0);

      console.log(`Number of students: ${numberOfStudents}`);

      for (const field in studentsPerField) {
        const fieldStudents = studentsPerField[field];
        console.log(`Number of students in ${field}: ${fieldStudents.length}. List: ${fieldStudents.join(', ')}`);
      }
    })
    .catch(err => {
      if (err.code === 'ENOENT') {
        throw new Error('Cannot load the database');
      } else {
        throw err;
      }
    });
}

module.exports = countStudents;
