const fs = require('fs');

const countStudents = (path_) => new Promise((resolve, reject) => {
  fs.readFile(path_, 'utf-8', (error, data) => {
    if (error) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const rows = data
        .toString('utf-8')
        .trim()
        .split('\n');
      const studentGroups = {};
      const fieldNames = rows[0].split(',');
      const studentNames = fieldNames
        .slice(0, fieldNames.length - 1);

      for (const row of rows.slice(1)) {
        const studentInfo = row.split(',');
        const studentValues = studentInfo
          .slice(0, studentInfo.length - 1);
        const field = studentInfo[studentInfo.length - 1];
        if (!Object.keys(studentGroups).includes(field)) {
          studentGroups[field] = [];
        }
        const students = studentNames
          .map((name, i) => [name, studentValues[i]]);
        studentGroups[field].push(Object.fromEntries(students));
      }
      const studentTally = Object
        .values(studentGroups)
        .reduce((prev, curr) => (prev || []).length + curr.length);
      console.log(`Number of students: ${studentTally}`);
      for (const [field, group] of Object.entries(studentGroups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }
      resolve(true);
    }
  });
});

module.exports = countStudents;
