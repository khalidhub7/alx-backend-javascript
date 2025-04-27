const updateUniqueItems = (map) => (
  map instanceof Map
    ? Array.from(map.keys()).forEach((key) => (
      map.get(key) === 1
        ? map.set(key, 100) : undefined
    )) : (() => {
      throw new Error(
        'Cannot process',
      );
    })()
);
export default updateUniqueItems;
