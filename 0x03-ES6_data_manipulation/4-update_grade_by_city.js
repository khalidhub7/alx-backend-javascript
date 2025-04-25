const updateStudentGradeByCity = (getListStudents,
  city, newGrades) => (

  getListStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const newgrade = newGrades
        .filter((i) => i.studentId === student.id);

      return {
        ...student,
        grade: newgrade.length > 0
          ? newgrade.pop().grade : 'N/A',
      };
    })
);
export default updateStudentGradeByCity;
