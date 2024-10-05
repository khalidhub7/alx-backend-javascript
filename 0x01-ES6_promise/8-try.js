#!/usr/bin/env node
export default function divideFunction(numerator, denominator) {
  try {
    if (denominator === 0) {
      throw new Error('cannot divide by 0');
    }
    return numerator / denominator;
  } catch (i) {
    throw (i);
  }
}
