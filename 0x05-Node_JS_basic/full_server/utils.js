const read = require('fs')

const readDatabases = (datax) => new Promise((resolve, reject) => {
  if (!datax) {
    reject(new Error('Cannot load the database'));
  }
  if (datax) {
    read.readFile(datax, (err, dat) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (dat) {
        const lines = dat.toString('utf-8')
        .trim().split('\n');
      const students = {};
      const fNames = lines[0].split(',');
      const studentNames = fNames.slice(0, fNames.length - 1);
      for (const lx of lines.slice(1)) {
        const studRec = lx.split(',');
        const studNameVal = studRec.slice(0, studRec.length -1);
        const fild = studRec[studRec.length -1];
        if (!Object.keys(students).includes(fild)) {
          students[fild] = [];
        }
        const studEnt = studentNames.map((pNames, idx) => [pNames, studNamesVal[idx]]);
        students[fild].push(Object.fromEntries(studEnt));
        }
        resolve(students);
      }
    });
  }
});

export default readDatabase;
module.exports = readDatabases;
