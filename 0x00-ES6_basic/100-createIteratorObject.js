export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const employeeList = [];

  for (const department in allEmployees) {
    if (allEmployees.hasOwnProperty(department)) {
      employeeList.push(...allEmployees[department]);
    }
  }

  return employeeList[Symbol.iterator]();
}
