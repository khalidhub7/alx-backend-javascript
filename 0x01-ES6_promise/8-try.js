#!/usr/bin/env node

const divideFunction = (numerator,
  denominator) => {
  let result;
  try {
    if (denominator === 0) {
      throw new Error(
        'cannot divide by 0',
      );
    }
    result = numerator / denominator;
  } catch (err) {
    throw err.message;
  }
  return result;
};
export default divideFunction;
