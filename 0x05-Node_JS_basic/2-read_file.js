const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');

    const studentsPerField = {};

    for (let i = 1; i < lines.length; i += 1) {
      const line = lines[i].trim();
      if (line !== '') {
        const studentData = line.split(',');
        const firstName = studentData[0];
        const field = studentData[studentData.length - 1];

        if (!studentsPerField[field]) {
          studentsPerField[field] = [];
        }
        studentsPerField[field].push(firstName);
      }
    }

    const numberOfStudents = Object.values(studentsPerField)
      .reduce((acc, fieldStudents) => acc + fieldStudents.length, 0);

    console.log(`Number of students: ${numberOfStudents}`);

    for (const field in studentsPerField) {
      if (Object.prototype.hasOwnProperty.call(studentsPerField, field)) {
        const fieldStudents = studentsPerField[field];
        console.log(
          `Number of students in ${field}: ${fieldStudents.length}. List: ${fieldStudents.join(', ')}`,
        );
      }
    }
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error('Cannot load the database');
    } else {
      throw err;
    }
  }
}

module.exports = countStudents;
