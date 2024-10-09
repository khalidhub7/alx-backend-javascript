#!/usr/bin/env node
export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const sum = weakMap.get(endpoint);
    if (sum >= 4) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, sum + 1);
  } else {
    weakMap.set(endpoint, 1);
  }
}
