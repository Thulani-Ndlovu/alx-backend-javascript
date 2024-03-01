import readFile from 'fs/promises';

async function readDatabase(path_) {
  const data = await readFile(path_, 'utf-8');
  const jsonData = JSON.parse(data);
  const res = {};

  for (const field in jsonData) {
    if (Array.isArray(jsonData[field])) {
      res[field] = jsonData[field].map((student) => student.firstname);
    }
  }
  return res;
}

module.exports = readDatabase;
