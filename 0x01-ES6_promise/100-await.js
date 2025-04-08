#!/usr/bin/env node

import { uploadPhoto, createUser } from './utils';

const asyncUploadUser = async () => {
  try {
    const results = await Promise.all(
      [uploadPhoto(), createUser()],
    );
    return {
      photo: results[0],
      user: results[1],
    };
  } catch (err) {
    return { photo: null, user: null };
  }
};
export default asyncUploadUser;
