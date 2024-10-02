export default function appendToEachArrayValue(array, appendString) {
  const result = [];
  let i = 0;
  for (const idx of array) {
    result[i] = appendString + idx;
    i += 1;
  }
  return result;
}
