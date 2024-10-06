#!/usr/bin/env node
// eslint-disable-next-line import/extensions
import signUpUser from './4-user-promise';
// eslint-disable-next-line import/extensions
import uploadPhoto from './5-photo-reject';
// eslint-disable-next-line no-unused-vars
export default async (firstName, lastName, fileName) => {
  const results = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);

  return results.map(({ status, value, reason }) => ({
    status,
    value: status === 'fulfilled' ? value : String(reason),
  }));
};

/* 
// eslint-disable-next-line import/extensions
export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([
      signUpUser(firstName, lastName),
      uploadPhoto(fileName),
    ])
    .then((data) => {
      const khalid = [];
      let i = 0;
      // eslint-disable-next-line no-plusplus
      while (i < data.length) {
        if (data[i].status === 'fulfilled') {
          khalid.push({
            status: data[i].status,
            value: data[i].value,
          });
        } else if (data[i].status === 'rejected') {
          khalid.push({
            status: data[i].status,
            reason: data[i].reason,
          });
        }
        i++;
      }
      return khalid;
    });
} 
*/
