#!/usr/bin/env node

const getFullResponseFromAPI = (
  success,
) => (success
  ? Promise.resolve({ status: 200, body: 'Success' })
  : Promise.reject(new Error(
    'The fake API is not working currently',
  )));
export default getFullResponseFromAPI;
