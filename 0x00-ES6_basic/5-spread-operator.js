#!/usr/bin/env node
export default function concatArrays(array1, array2, string) {
  const khalidlist = [];
  khalidlist.push(...array1);
  khalidlist.push(...array2);
  khalidlist.push(...string);
  return khalidlist;
}
