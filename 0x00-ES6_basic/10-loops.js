#!/usr/bin/env node

const appendToEachArrayValue = (array,
  appendString) => {
  const newarr = [];
  for (const i of array) {
    newarr.push(i + appendString);
  }
  return newarr;
};
export default appendToEachArrayValue;
