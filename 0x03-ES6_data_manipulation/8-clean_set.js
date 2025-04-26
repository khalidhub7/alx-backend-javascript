const cleanSet = (set, startString) => (
  startString ? Array.from(set)
    .map((i) => (i.startsWith(startString)
      ? i.slice(startString.length)
      : undefined
    ))
    .filter((i) => i !== undefined)
    .join('-') : ''
);
export default cleanSet;
