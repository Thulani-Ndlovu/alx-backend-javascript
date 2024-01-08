export default function getListStudentIds(array) {
  const ids = [];
  if (!Array.isArray(array)) {
    return [];
  }

  for (const idx of array) {
    if (idx && idx.id !== undefined) {
      ids.push(idx.id);
    }
  }
  return ids;
}
