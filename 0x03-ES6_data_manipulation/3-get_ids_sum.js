const getStudentIdsSum = (arr) => (
  Array.isArray(arr)
    ? arr.reduce((current, i) => current + i.id, 0)
    : 0
);
export default getStudentIdsSum;
