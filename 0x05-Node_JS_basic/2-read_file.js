const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Ensure at least one line exists for headers
    if (lines.length < 2) {
      throw new Error('Cannot load the database');
    }

    const fieldCounts = {};

    // Skip the first line (header) and process the rest
    lines.slice(1).forEach((line) => {
      const student = line.split(',');
      const firstName = student[0];
      const field = student[3];

      if (!fieldCounts[field]) {
        fieldCounts[field] = { count: 0, names: [] };
      }
      fieldCounts[field].count += 1;
      fieldCounts[field].names.push(firstName);
    });

    const totalStudents = lines.length - 1; // Adjust total count for headers
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
      throw new Error('Cannot load the database');
    } else {
      console.error('Error reading database:', err);
    }
  }
}

module.exports = countStudents;
