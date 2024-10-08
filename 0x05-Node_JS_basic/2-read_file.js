const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Create an object to hold field data from the csv file
    const fieldCounts = {};
    const totalStudents = lines.length;

    // Processing each student line
    lines.forEach((line) => {
      const student = line.split(',');
      const firstName = student[0];
      const field = student[3];

      if (!fieldCounts[field]) {
        fieldCounts[field] = { count: 0, names: [] };
      }
      fieldCounts[field].count += 1;
      fieldCounts[field].names.push(firstName);
    });

    console.log(`Number of students: ${totalStudents}`);

    for (const field in fieldCounts) {
      if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
        const { count, names } = fieldCounts[field];
        console.log(
          `Number of students in ${field}: ${count}. List: ${names.join(', ')}`,
        );
      }
    }
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error('Cannot load the database');
    } else {
      console.error('Error reading database:', err);
    }
  }
}

module.exports = countStudents;
