#!/usr/bin/env node
/* eslint-disable-next-line no-unused-vars */
export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;
  if (trueOrFalse) {
    task = true;
    task2 = false;
  }
  return [task, task2];
}
