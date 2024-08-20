const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n');

    if (lines.length === 0) throw new Error('No data found');

    const students = lines.filter((line) => line.trim() !== '').map((line) => line.split(','));
    const totalStudents = students.length;
    const fields = {};
    // console.log('Number of students:', totalStudents);
    for (const student of students) {
      const field = student[3];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(student[0]);
    }
    console.log(`Number of students:: ${totalStudents}`);
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(students, field)) {
        const names = students[field];
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
