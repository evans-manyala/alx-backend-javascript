export default function updateStudentGradeByCity(students, city, newGrade) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const updatedGrades = student.grades.map((grade) => {
        if (grade.course === newGrade[0].course) {
          return { ...grade, grade: newGrade[0].grade };
        }
        return grade;
      });
      return { ...student, grades: updatedGrades };
    });
}
