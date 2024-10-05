#!/usr/bin/env node
import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser() {
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    return { photo, user };
  } catch {
    return { photo: null, user: null };
  }
}
