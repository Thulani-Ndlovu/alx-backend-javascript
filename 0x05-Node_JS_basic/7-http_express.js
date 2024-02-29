const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = (path_) => new Promise((resolve, reject) => {
  if (!path_) {
    reject(new Error('Cannot load the database'));
  }
  if (path_) {
    fs.readFile(path_, (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const reportParts = [];
        const rows = data.toString('utf-8').trim().split('\n');
        const studentGroups = {};
        const fieldNames = rows[0].split(',');
        const studentNames = fieldNames.slice(
          0,
          fieldNames.length - 1,
        );

        for (const row of rows.slice(1)) {
          const studentInfo = row.split(',');
          const studentValues = studentInfo.slice(
            0,
            studentInfo.length - 1,
          );
          const field = studentInfo[studentInfo.length - 1];
          if (!Object.keys(studentGroups).includes(field)) {
            studentGroups[field] = [];
          }
          const students = studentNames.map((name, i) => [
            name,
            studentValues[i],
          ]);
          studentGroups[field].push(Object.fromEntries(students));
        }
        const studentTally = Object.values(studentGroups).reduce(
          (prev, curr) => (prev || []).length + curr.length,
        );
        reportParts.push(`Number of students: ${studentTally}`);
        for (const [field, group] of Object.entries(studentGroups)) {
          reportParts.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', '),
          ].join(' '));
        }
        resolve(reportParts.join('\n'));
      }
    });
  }
});
app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  const responseParts = ['This is the list of our students'];
  countStudents(DB_FILE)
    .then((report) => {
      responseParts.push(report);
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    })
    .catch((error) => {
      responseParts.push(error instanceof Error ? error.message : error.toString());
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
