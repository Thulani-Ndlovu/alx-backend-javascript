export default function getStudentsByLocation(studentList, city) {
  return studentList.filter((item) => item.location === city);
}
