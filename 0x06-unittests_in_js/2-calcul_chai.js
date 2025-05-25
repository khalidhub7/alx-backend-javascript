const calculateNumber = (type, a, b) => {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  } if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  } if (type === 'DIVIDE') {
    const roundedB = Math.round(b);
    return roundedB === 0 ? 'Error'
      : Math.round(a) / roundedB;
  }
  return undefined;
};
module.exports = calculateNumber;
