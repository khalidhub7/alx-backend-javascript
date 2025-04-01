#!/usr/bin/env node

const getCurrentYear = (
) => new Date().getFullYear();

const getBudgetForCurrentYear = (income, gdp,
  capita) => {
  const y = getCurrentYear();
  const budget = {
    [`income-${y}`]: income,
    [`gdp-${y}`]: gdp,
    [`capita-${y}`]: capita,
  };
  return budget;
};
export default getBudgetForCurrentYear;
