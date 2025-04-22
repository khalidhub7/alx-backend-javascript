const getListStudentIds = (arr) => (
  Array.isArray(arr)
    ? arr.map((i) => i.id)
    : []
);
export default getListStudentIds;
