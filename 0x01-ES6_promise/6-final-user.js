import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((args) => [
    args.forEach((element) => ({
      status: element.status,
      value: element.status === 'fulfilled' ? element.value : element.reason,
    })),
  ]);
}
/* export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([
      signUpUser(firstName, lastName),
      uploadPhoto(fileName),
    ])
    .then((data) => {
      const khalid = [];
      let i = 0;
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
} */
