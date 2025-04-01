#!/usr/bin/env node

const createIteratorObject = (report) => ({
  [Symbol.iterator]() {
    const employees = Object.values(
      report.allEmployees,
    ).flat(Infinity);
    let i = 0;
    return {
      next() {
        const value = employees[i];
        i += 1;
        return { value, done: i > employees.length };
      },
    };
  },
});
export default createIteratorObject;
