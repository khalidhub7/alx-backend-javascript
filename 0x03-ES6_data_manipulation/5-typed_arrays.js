#!/usr/bin/env node
export default function createInt8TypedArray(length, position, value) {
  const buff = new ArrayBuffer(length);
  if (position >= length || length <= 0) {
    throw new Error('Position outside range');
  }
  const buffview = new DataView(buff);
  buffview.setInt8(position, value);
  return buffview;
}
