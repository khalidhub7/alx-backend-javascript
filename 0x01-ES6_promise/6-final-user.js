#!/usr/bin/env node

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

const handleProfileSignup = (firstName, lastName, fileName) => Promise.allSettled([
  signUpUser(firstName, lastName),
  uploadPhoto(fileName),
]).then((results) => results.map((result) => {
  if (result.status === 'rejected') {
    return { status: result.status, value: `Error: ${result.reason.message}` };
  }
  return { status: result.status, value: result.value };
}));

export default handleProfileSignup;
