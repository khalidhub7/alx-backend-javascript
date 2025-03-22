#!/usr/bin/env node

const createReportObject = (
  employeesList,
) => {
  const obj = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments: (
    ) => Object.keys(this.allEmployees).length,
  };
  return obj;
};
export default createReportObject;
