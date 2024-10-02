import getBudgetObject from './9-getFullBudget.js';

function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: (income) => `$${income}`,
    getIncomeInEuros: (income) => `${income} euros`,
  };
  return fullBudget;
}
export default getFullBudgetObject;
