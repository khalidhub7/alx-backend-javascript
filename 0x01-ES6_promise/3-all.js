#!/usr/bin/env node

import { uploadPhoto, createUser } from './utils';

const handleProfileSignup = async (
) => console.log(await (async () => {
  try {
    const results = await Promise.all(
      [uploadPhoto(), createUser()],
    );
    return `${results[0].body} ${Object
      .values(results[1]).join(' ')}`;
  } catch (err) {
    return 'Signup system offline';
  }
})());
export default handleProfileSignup;
