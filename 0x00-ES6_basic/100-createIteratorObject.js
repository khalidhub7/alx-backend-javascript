#!/usr/bin/env node

const createIteratorObject = (
  report,
) => {
  const objs = [];
  for (const department in report.allEmployees) {
    if (Object.prototype.hasOwnProperty.call(
      report.allEmployees, department,
    )) {
      objs.push(...report.allEmployees[department]);
    }
  }
  return objs;
};

export default createIteratorObject;
