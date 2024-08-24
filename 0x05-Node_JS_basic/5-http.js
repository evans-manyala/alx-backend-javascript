const http = require('http');
const { readFile } = require('fs');

const hostname = 'localhost';
const port = 1245;

function countstudentData(fileName) {
  const studentData = {};
  const fieldName = {};
  let length = 0;
  return new Promise((resolve, reject) => {
    readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        let response = '';
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            length += 1;
            const field = lines[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(studentData, field[3])) {
              studentData[field[3]].push(field[0]);
            } else {
              studentData[field[3]] = [field[0]];
            }
            if (Object.prototype.hasOwnProperty.call(fieldName, field[3])) {
              fieldName[field[3]] += 1;
            } else {
              fieldName[field[3]] = 1;
            }
          }
        }
        const l = length - 1;
        response += `Number of studentData: ${l}\n`;
        for (const [key, value] of Object.entries(fieldName)) {
          if (key !== 'field') {
            response += `Number of studentData in ${key}: ${value}. `;
            response += `List: ${studentData[key].join(', ')}\n`;
          }
        }
        resolve(response);
      }
    });
  });
}

const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  if (request.url === '/') {
    response.write('Hello Holberton School!');
    response.end();
  }
  if (request.url === '/studentData') {
    response.write('This is the list of our studentData\n');
    countstudentData(process.argv[2].toString()).then((response) => {
      const outString = response.slice(0, -1);
      response.end(outString);
    }).catch(() => {
      response.statusCode = 404;
      response.end('Cannot load the database');
    });
  }
});

app.listen(port, hostname, () => {
});

module.exports = app;
