export default function getListStudentIds(array) {
  const ids = [];
  if (typeof array !== 'object') {
    return [];
  }

  for (const idx of array) {
    ids.push(idx.id);
  }
  return ids;
}
