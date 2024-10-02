const getResponseFromAPI = () => {
  const mypromise = new Promise((resolve, reject) => {
    resolve();
    reject();
  });
  mypromise.then(() => {
  }).catch(() => {
  }).finally(() => {
  });
  return mypromise;
};
export default getResponseFromAPI;
