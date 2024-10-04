#!/usr/bin/env node
import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  return Promise.all(([uploadPhoto(), createUser()]))
    .then((results) => {
      const image = results[0].body;
      const firstname = results[1].firstName;
      const lastname = results[1].lastName;
      console.log(`${image} ${firstname} ${lastname}`);
    }).catch(() => {
      console.log('Signup system offline');
    });
}
