const fs = require('fs');

function countStudents(path) {
  try {
    if (!fs.existsSync(path) || !fs.statSync(path).isFile()) {
      throw new Error('Cannot load the database');
    }

    const data = fs.readFileSync(path, 'utf8').trim();
    const lines = data.split('\n');

    if (lines.length <= 1) {
      throw new Error('Cannot load the database'); // Handle empty or invalid data
    }

    const studentsInEachField = {};

    for (let x = 1; x < lines.length; x += 1) {
      const line = lines[x].trim();
      if (line !== '') {
        const studentNames = line.split(',');
        const firstName = studentNames[0];
        const field = studentNames[studentNames.length - 1];

        if (!studentsInEachField[field]) {
          studentsInEachField[field] = [];
        }
        studentsInEachField[field].push(firstName);
      }
    }

    const numOfStudents = Object.values(studentsInEachField)
      .reduce((acc, fieldStudents) => acc + fieldStudents.length, 0);

    console.log(`Number of students: ${numOfStudents}`);

    for (const field in studentsInEachField) {
      if (Object.prototype.hasOwnProperty.call(studentsInEachField, field)) {
        const fieldStudents = studentsInEachField[field];
        console.log(
          `Number of students in ${field}: ${fieldStudents.length}. List: ${fieldStudents.join(', ')}`,
        );
      }
    }
  } catch (err) {
    console.error(err.message); // Ensures the error message is printed correctly
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
