const getFullResponseFromAPI = (success) => {
  const mypromise = new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'success',
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
  mypromise.finally(() => {
    /* console.log('done'); */
  });
  return mypromise;
};
export default getFullResponseFromAPI;
