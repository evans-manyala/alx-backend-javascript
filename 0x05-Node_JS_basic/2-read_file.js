const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.trim().split('\n');

    if (lines.length <= 1) throw new Error('No data found');

    const students = lines.slice(1).filter((line) => line.trim() !== '').map((line) => line.split(','));
    const totalStudents = students.length;

    const fields = {};

    for (const student of students) {
      const field = student[3];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(student[0]);
    }

    console.log(`Number of students: ${totalStudents}`);
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        const studentsInField = fields[field].length;
        const studentList = fields[field].join(', ');
        console.log(`Number of students in ${field}: ${studentsInField}. List: ${studentList}`);
      }
    }
  } catch (error) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
