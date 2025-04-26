const createInt8TypedArray = (length, position,
  value) => {
  if (position < 0 || length <= position
  ) { throw new Error('Position outside range'); }

  const typedarray = new Int8Array(length);
  typedarray[position] = value;

  // console.log(`*** ${typedarray} ***`)
  return new DataView(typedarray.buffer);
};
export default createInt8TypedArray;
