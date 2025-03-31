#!/usr/bin/env node

const createIteratorObject = (report) => {
  const obj = {};

  // 'for...of' needs 'Symbol.iterator' to iterate over obj
  obj[Symbol.iterator] = () => {
    let i = 0;
    const employees = Object.values(report.allEmployees).flat(Infinity);

    return {
      // 'next' is called by 'for...of'
      next() {
        const value = employees[i];
        i += 1;
        return { value, done: i > employees.length };
      },
    };
  };

  return obj;
};

export default createIteratorObject;
