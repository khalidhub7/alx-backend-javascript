#!/usr/bin/env node
export default function cleanSet(set, start) {
  const filtered = [];
  if (
    !(set instanceof Set)
      || typeof start !== 'string'
      || start.trim().length === 0
      || set.size === 0
  ) {
    return '';
  }
  for (const i of set) {
    if (typeof i === 'string' && i
         !== null && i.startsWith(start)) {
      const newstr = i.slice(start.length);
      filtered.push(newstr);
    }
  }
  return filtered.join('-');
}
