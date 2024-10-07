#!/usr/bin/env node
const getBudgetObject = require('./7-getBudgetObject');

function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: function(income) {
      return `$${income}`;
    },
    getIncomeInEuros: function(income) {
      return `${income} euros`;
    },
  };
  return fullBudget;
}

module.exports = getFullBudgetObject;
