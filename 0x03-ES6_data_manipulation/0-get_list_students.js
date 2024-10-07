#!/usr/bin/env node
export default function getListStudents() {
  const per = ['Guillaume', 'James', 'Serena'];
  const ids = [1, 2, 5];
  const loca = ['San Francisco', 'Columbia', 'San Francisco'];

  return per.map((a, i) => ({ id: ids[i], firstName: a, location: loca[i] }));
}
