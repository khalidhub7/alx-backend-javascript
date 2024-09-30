export default function concatArrays(array1, array2, string) {
  const mylist = [...array1, ...array2, ...string];
  return mylist;
}
