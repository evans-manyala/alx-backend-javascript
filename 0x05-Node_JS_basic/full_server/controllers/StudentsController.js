const { readDatabase } = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase('database.csv')
      .then((students) => {
        const fields = Object.keys(students).sort();
        const response = `This is the list of our students\n`;

        fields.forEach((field) => {
          const firstnames = students[field].sort();
          response += `Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}\n`;
        });

        res.status(200).send(response);
      })
      .catch((err) => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const major = req.params.major;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase('database.csv')
      .then((students) => {
        const firstnames = students[major] || [];
        res.status(200).send(`List: ${firstnames.join(', ')}`);
      })
      .catch((err) => {
        res.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
