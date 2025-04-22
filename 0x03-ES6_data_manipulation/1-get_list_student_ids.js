const getListStudentIds = (arr) => {
  try {
    return arr.map((i) => i.id);
  } catch (err) { return []; }
};
export default getListStudentIds;
