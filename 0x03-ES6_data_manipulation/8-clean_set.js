#!/usr/bin/env node
export default function cleanSet(set, start) {
  const filtred = [];
  if (
    !(set instanceof Set)
    || start.length === 0
    || typeof start !== 'string'
    || set.size === 0
  ) {
    return '';
  }
  for (const i of set) {
    if (typeof (i) === 'string' && typeof(i) !== "undefined") {
      if (i.startsWith(start)) {
        const newstr = i.slice(start.length);
        if (newstr.length > 0) {
          filtred.push(newstr);
        }
      }
    }
  }
  return filtred.join('-');
}
