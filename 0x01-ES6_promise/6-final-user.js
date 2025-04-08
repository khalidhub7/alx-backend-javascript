#!/usr/bin/env node

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

const handleProfileSignup = (
  firstName, lastName, fileName,
) => Promise.allSettled(
  [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ],
).then((results) => {
  for (const result of results) {
    if ('reason' in result) {
      result.value = result.reason;
      delete result.reason;
    }
  }
  return results;
});
export default handleProfileSignup;
