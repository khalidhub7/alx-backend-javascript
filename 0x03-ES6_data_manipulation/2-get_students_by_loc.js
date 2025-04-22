const getStudentsByLocation = (arr, city) => (
  Array.isArray(arr)
    ? arr.filter((i) => i.location === city)
    : []
);
export default getStudentsByLocation;
