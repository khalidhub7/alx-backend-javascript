#!/usr/bin/env node

const createEmployeesObject = (departmentName,
  employees) => ({ [departmentName]: employees });
export default createEmployeesObject;
