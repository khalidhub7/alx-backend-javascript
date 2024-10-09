#!/usr/bin/env node

export default function groceriesList() {
  const keys = ['Apples', 'Tomatoes',
    'Pasta', 'Rice', 'Banana'];
  const values = [10, 10, 1, 1, 5];
  const map = new Map();
  keys.forEach((key, i) => {
    map.set(key, values[i]);
  });
  return map;
}
