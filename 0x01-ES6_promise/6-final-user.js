#!/usr/bin/env node
import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .all([signUpUser(), uploadPhoto()])
    .then((data) => data);
}
