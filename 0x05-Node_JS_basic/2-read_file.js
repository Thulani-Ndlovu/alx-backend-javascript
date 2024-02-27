const fs = require('fs');

const countStudents = (path_) => {
  if (!fs.existsSync(path_)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(path_).isFile()) {
    throw new Error('Cannot load the database');
  }
  const rows = fs
    .readFileSync(path_, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');
  const studentGroups = {};
  const fieldnames = rows[0].split(',');
  const studentNames = fieldnames.slice(0, fieldnames.length - 1);

  for (const row of rows.slice(1)) {
    const studentInfo = row.split(',');
    const studentValues = studentInfo.slice(0, studentInfo.length - 1);
    const field = studentInfo[studentInfo.length - 1];
    if (!Object.keys(studentGroups).includes(field)) {
      studentGroups[field] = [];
    }
    const students = studentNames
      .map((name, i) => [name, studentValues[i]]);
    studentGroups[field].push(Object.fromEntries(students));
  }

  const studentTally = Object
    .values(studentGroups).reduce((prev, curr) => (prev || []).length + curr.length);
  console.log(`Number of students: ${studentTally}`);
  for (const [field, group] of Object.entries(studentGroups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;
