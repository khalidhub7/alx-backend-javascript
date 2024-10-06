#!/usr/bin/env node
export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return `As of ${year}, it was the seventh-highest i\
ncome county in the United States, with a per capita pe\
rsonal income of ${budget.income}. As of 2015, San Franci\
sco proper had a GDP of ${budget.gdp}, and a GDP per capit\
a of ${budget.capita}.`;
}
