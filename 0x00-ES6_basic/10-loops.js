#!/usr/bin/env node
/* eslint-disable no-param-reassign */
export default function appendToEachArrayValue(array, appendString) {
  const result = [];
  let i = 0;
  for (const idx of array) {
    result[i] = appendString + idx;
    i += 1;
  }
  array = result;
  return array;
}
