#!/usr/bin/env node

function concatArrays(
  array1, array2, string,
) {
  return [...array1, ...array2, ...string];
}
export default concatArrays;
