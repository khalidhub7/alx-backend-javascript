#!/usr/bin/env node

const iterateThroughObject = (
  reportWithIterator,
) => [...reportWithIterator].join(' | ');
export default iterateThroughObject;
