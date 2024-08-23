const alx = require('fs');

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let count = 0;
  try {
    const datax = alx.readFileSync(fileName, 'utf-8');
    const lines = datax.toString().split('\n');
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
    console.log(`Number of students: ${s}`);
    for (const [k, v] of Object.entries(fields)) {
      if (k !== 'field') {
        console.log(`Number of students in ${k}: ${v}. List: ${students[k].join(', ')}`);
      }
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;