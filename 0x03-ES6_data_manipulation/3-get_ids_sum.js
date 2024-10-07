#!/usr/bin/env node
export default function getStudentIdsSum(arr) {
  const ids = arr.map((x) => x.id);
  return ids.reduce((sum, i) => sum + i, 0);
}
