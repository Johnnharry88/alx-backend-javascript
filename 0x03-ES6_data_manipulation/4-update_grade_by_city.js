export default function updateStudentGradeByCity(
  students, city, newGrades) {
  const selectStudents = students.filter(
    (stud) => stud.location === city);

  const studentsGrade = selectStudents.map(
    (x) => {
      for (const y of newGrades) {
        if (x.id === y.studentId) {
          x.grade = y.grade;
        }
      }
      if (x.grade === undefined) {
        x.grade = 'N/A';
      }
      return x;
    },
  );

  return studentsGrade;
}

