export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.city === city);
  }
  return [];
}
