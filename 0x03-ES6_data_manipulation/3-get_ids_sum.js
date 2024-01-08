export default function getStudentIdsSum(studentList) {
  return studentList.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}
