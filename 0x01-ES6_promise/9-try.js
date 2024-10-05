#!/usr/bin/env node
export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const data = mathFunction();
    queue.push(data);
  } catch (i) {
    queue.push(`Error: ${i.message}`);
  }
  queue.push('Guardrail was processed');
  return queue;
}
