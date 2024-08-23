const fs = require('fs');

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }

      const studentData = data.split('\n');
      let students = studentData.filter((item) => item);
      students = students.map((item) => item.split(','));
      const numOfStudents = students.length ? students.length - 1 : 0;
      let response = `Number of students: ${numOfStudents}`;
      const fields = {};
      for (const i in students) {
        if (i !== 0) {
          if (!fields[students[i][3]]) fields[students[i][3]] = [];

          fields[students[i][3]].push(students[i][0]);
        }
      }
      delete fields.field;
      for (const key of Object.keys(fields)) {
        response += `\nNumber of students in ${key}: ${
          fields[key].length
        }. List: ${fields[key].join(', ')}`;
      }
      resolve(response);
    });
  });
}
module.exports = countStudents;
