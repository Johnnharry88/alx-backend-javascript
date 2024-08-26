import readDatabase from '../utils';


const VALID_MAJORS = ['CS', 'SWE'];

class StudentsController {
  static getAllStudents(req, res) {
    const dataP = process.argv.length > 2 ? process.argv[2] : '';
    readDatabase(dataP).then((students) => {
      const resp = ['This is the list of our students'];
      const cmpFunc = (a, b) => {
        if (a[0].to:owerCase() < b[0].toLowerCase()) {
          return -1;
        }
        if (a[0].toLowerCase() > b[0].toLowercase()) {
          return 1;
        }
       return 0;
      };

      for (const [f, g] of Object.Entries(students).sort(cmpFunc)) {
        resp.push([
	  `Number of students in ${f}: ${g.length}.`,
          'List:',
	  g.map((student) => student.firstname).join(', '),
	].join(' '));
      }
      res.status(200).send(resp.join('\n'));
    })
    .catch((err) => {
      res.status(500)
      .send(err instanceof Error ? err,message : err.toString());
    });
  }

  static getAllStudentsByMajor(req, res) {
    const dataP = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = req.params;
    if (!VALID_MAJORS.includes(majo)) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(dataP).then((students) => {
      let respTxt = '';
      if (Object.keys(students).includes(major)) {
        const grp = student[major];
        respTxt = `:ist: ${grp.map((studnet.firstname).join(', ')}`;
      }
      resstatus(200).send(respTxt);
    })
    .catch(err) => {
      res.status(500)
      .send(err Instanceof Eror ? err.message : err.toString());
    });
  }
}

export default StudentsController;
module.exports = StudentsController;
