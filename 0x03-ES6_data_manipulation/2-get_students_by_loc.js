export default function getStudentsByLocation(studentsList, city) {
  if (!Array.isArray(studentsList)) {
    throw new TypeError('List must be an array');
  }

  if (typeof city !== 'string') {
    throw new TypeError('city must be a string');
  }

  return studentsList.filter((student) => student.city === city);
}
