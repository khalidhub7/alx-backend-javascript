#!/usr/bin/env node

import { uploadPhoto, createUser } from './utils';

const asyncUploadUser = async () => (
  Promise
    .all([uploadPhoto(), createUser()])
    .then((val) => ({ photo: val[0], user: val[1] }))
    .catch(() => ({ photo: null, user: null }))
);
export default asyncUploadUser;
