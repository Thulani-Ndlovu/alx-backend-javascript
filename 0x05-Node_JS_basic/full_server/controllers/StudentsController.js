import readDatabase from '../utils';

const MAJORS = ['CS', 'SWE'];

class StudentsController {
  static getAllStudents(request, response) {
    const path_ = process.argv.length > 2 ? process.argv[2] : '';

    readDatabase(path_)
      .then((studentGroups) => {
        const responseParts = ['This is the list of our students'];

        const compF = (a, b) => {
          if (a[0].toLowerCase() < b[0].toLowerCase()) {
            return -1;
          }
          if (a[0].toLowerCase() > b[0].toLowerCase()) {
            return 1;
          }
          return 0;
        };

        for (const [field, group] of Object.entries(studentGroups).sort(compF)) {
          responseParts.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', '),
          ].join(' '));
        }
        response.status(200).send(responseParts.join('\n'));
      })
      .catch((error) => {
        response
          .status(500)
          .send(error instanceof Error ? error.message : error.toString());
      });
  }

  static getAllStudentsByMajor(request, response) {
    const path_ = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = request.params;

    if (!MAJORS.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(path_)
      .then((studentGroups) => {
        let responseText = '';

        if (Object.keys(studentGroups).includes(major)) {
          const group = studentGroups[major];
          responseText = `List: ${group.map((student) => student.firstname).join(', ')}`;
        }
        response.status(200).send(responseText);
      })
      .catch((error) => {
        response
          .status(500)
          .send(error instanceof Error ? error.message : error.toString());
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
