#!/usr/bin/env node
import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();
  return Promise.all([photo, user])
    .then((results) => {
      console.log(`${results[photo].body} ${results[user].firstName} ${results[user].lastName}`);
    })
    .catch(() => { console.log('Signup system offline'); });
}
