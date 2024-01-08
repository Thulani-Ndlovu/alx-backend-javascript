export default function getListStudentIds(array) {
  const ids = [];
  if (!(array instanceof Array)) {
    return [];
  }

  for (const idx of array) {
    ids.push(idx.id);
  }
  return ids;
}
