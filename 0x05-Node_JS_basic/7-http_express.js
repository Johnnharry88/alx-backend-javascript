const exp = require('express');

const { readFile } = require('fs');

const app = exp();
const port = 1245;

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let count = 0;
  return new Promise((resolve, reject) => {
    readFile(fileName, (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        let datax = '';
        const lines = data.toString().split('\n');
        for (let x = 0; x < lines.length; x += 1) {
          if (lines[x]) {
            count += 1;
            const field = lines[x].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        }
        const s = count - 1;
        datax += `Number of students: ${s}\n`;
        for (const [k, v] of Object.entries(fields)) {
          if (k !== 'field') {
            datax += `Number of students in ${k}: ${v}. `;
            datax += `List: ${students[k].join(', ')}\n`;
          }
        }
        resolve(datax);
      }
    });
  });
}

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});
app.get('/students', (request, response) => {
  countStudents(process.argv[2].toString()).then((datax) => {
    response.send(['This is the list of our students', datax].join('\n'));
  }).catch(() => {
    response.send('This is the list of our students\nCannot load the database');
  });
});

app.listen(port, () => {});

module.exports = app;
