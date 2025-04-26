/* eslint-disable no-nested-ternary */
const cleanSet = (set, startString) => (
  typeof (startString) === 'string'
    ? Array.from(set)
      .map((i) => (i ? (i.startsWith(startString)
        ? i.slice(startString.length)
        : undefined
      ) : undefined))
      .filter((i) => i !== undefined)
      .join('-') : ''
);
export default cleanSet;
