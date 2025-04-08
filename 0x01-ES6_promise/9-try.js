#!/usr/bin/env node

const guardrail = (mathFunction) => {
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (err) {
    queue.push(`Error: ${err}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
};
export default guardrail;
