export default function cleanSet(set, startString) {
  const partition = [];

  if (!set || !startString || typeof startString !== 'string') {
    return '';
  }

  for (const val of set.values()) {
    if (typeof val === 'string' && val.startsWith(startString)) {
      const subString = val.substring(startString.length);
      if (subString && subString !== val) {
        partition.push(subString);
      }
    }
  }
  return partition.join('-');
}
