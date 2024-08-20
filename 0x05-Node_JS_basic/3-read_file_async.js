const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');

      const studentsPerField = {};

      for (let i = 1; i < lines.length; i += 1) {
        const studentData = lines[i].split(',');
        const firstName = studentData[0];
        const field = studentData[studentData.length - 1];

        if (!studentsPerField[field]) {
          studentsPerField[field] = [];
        }
        studentsPerField[field].push(firstName);
      }

      const numberOfStudents = Object.values(studentsPerField)
        .reduce((acc, fieldStudents) => acc + fieldStudents.length, 0);

      console.log(`Number of students: ${numberOfStudents}`);

      for (const field in studentsPerField) {
        if (Object.prototype.hasOwnProperty.call(studentsPerField, field)) {
          const fieldStudents = studentsPerField[field];
          console.log(`Number of students in ${field}: ${fieldStudents.length}. List: ${fieldStudents.join(', ')}`);
        }
      }

      resolve();
    });
  });
}

module.exports = countStudents;
