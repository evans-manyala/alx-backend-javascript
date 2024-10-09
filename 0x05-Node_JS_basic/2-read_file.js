const fs = require('fs');

const countStudents = (dataPath) => {
  if (!fs.existsSync(dataPath) || !fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }

  const fileData = fs.readFileSync(dataPath, 'utf-8').trim().split('\n');
  const dataFieldNames = fileData.shift().split(',');
  const studentNames = dataFieldNames.slice(0, -1);

  const studentGroups = fileData.reduce((groups, line) => {
    const studentRecord = line.split(',');
    const studentPropValues = studentRecord.slice(0, -1);
    const field = studentRecord[studentRecord.length - 1];
    groups[field] = groups[field] || [];
    groups[field].push(Object.fromEntries(studentNames.map(
      (proposedNames, idx) => [proposedNames, studentPropValues[idx]],
    )));
    return groups;
  }, {});

  const totalNoOfStudents = Object.values(studentGroups).reduce((pre, cur) => pre + cur.length, 0);
  console.log(`Number of students: ${totalNoOfStudents}`);
  for (const [field, group] of Object.entries(studentGroups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;
