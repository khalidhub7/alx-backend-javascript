#!/usr/bin/env node
export default function updateStudentGradeByCity(arr, city, newGrades) {
  const filtered = arr.filter((x) => x.location === city);
  const mapping = filtered.map((x) => ({
    id: x.id,
    firstName: x.firstName,
    location: x.location,
    grade: newGrades.find((i) => i.studentId === x.id) ? (newGrades.find((i) => i.studentId === x.id)).grade : 'N/A',
  }));
  return mapping;
}
