#!/usr/bin/env node
export default function cleanSet(set, start) {
  const filtred = [];
  for (const i of set) {
    if (i.startsWith(start) && start[0] != "") {
      const newstr = i.slice(start.length);
      filtred.push(newstr);
    }
  }
  return filtred.join('-');
}
