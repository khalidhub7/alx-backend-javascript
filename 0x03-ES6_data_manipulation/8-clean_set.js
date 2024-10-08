#!/usr/bin/env node
export default function cleanSet(set, start) {
  const filtred = [];
  for (const i of set) {
    if (start === '') {
      return '';
    }

    if (i.startsWith(start)) {
      const newstr = i.slice(start.length);
      filtred.push(newstr);
    }
  }
  return filtred.join('-');
}
