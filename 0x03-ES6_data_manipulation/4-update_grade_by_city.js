export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };
  if (!(studentList instanceof Array)) {
    return [];
  }
  return studentList.filter((item) => item.location === city)
    .map((item) => ({
      id: item.id,
      firstName: item.firstName,
      location: item.location,
      grade: (newGrades.filter((newGrade) => newGrade.studentId === item.id)
        .pop() || defaultGrade).grade,
    }));
}
