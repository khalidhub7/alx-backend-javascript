const weakMap = new WeakMap();

const queryAPI = (endpoint) => {
  if (typeof (endpoint) === 'object') {
    if (weakMap.has(endpoint)) {
      const value = weakMap.get(endpoint) + 1;

      if (value >= 5
      ) throw new Error('Endpoint load is high');
      weakMap.set(endpoint, value);
    } else { weakMap.set(endpoint, 1); }
  }
};
export { queryAPI, weakMap };
