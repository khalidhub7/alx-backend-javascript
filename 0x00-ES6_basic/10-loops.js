#!/usr/bin/env node

const appendToEachArrayValue = (array,
  appendString) => {
  const newarr = [];
  for (const i of array) {
    newarr.push(appendString + i);
  }
  return newarr;
};
export default appendToEachArrayValue;
