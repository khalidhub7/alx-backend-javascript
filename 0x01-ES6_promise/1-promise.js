#!/usr/bin/env node

const getFullResponseFromAPI = async (
  success) => (success
  ? { status: 200, body: 'Success' }
  : new Error('The fake API is not working currently'));
export default getFullResponseFromAPI;
