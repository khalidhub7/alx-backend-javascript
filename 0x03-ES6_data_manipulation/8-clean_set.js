#!/usr/bin/env node
export default function cleanSet(set, start) {
  const filtred = [];
  if (start === '') {
    return '';
  }
  for (const i of set) {
    if (i.startsWith(start)) {
      const newstr = i.slice(start.length);
      filtred.push(newstr);
    }
  }
  return filtred.join('-');
}
