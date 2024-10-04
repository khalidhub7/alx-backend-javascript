#!/usr/bin/env node
export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .all([signUpUser(), uploadPhoto()])
    .then((data) => data);
}
