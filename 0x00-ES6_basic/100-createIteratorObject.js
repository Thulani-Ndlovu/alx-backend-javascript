export default function createIteratorObject(report) {
  let allEmployees = [];
  for (const idx of Object.values(report.allEmployees)) {
    allEmployees = [
      ...allEmployees,
      ...idx,
    ];
  }
  return allEmployees;
}
