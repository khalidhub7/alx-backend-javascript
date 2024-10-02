const handleResponseFromAPI = (promise) => {
  const mypromise = new Promise((resolve, reject) => {
  });

  mypromise.then(() => {
    resolve({
      status: 200,
      body: 'success',
    });
  }).catch(() => {
    reject(new Error(''));
  });
  console.log('Got a response from the API');
  return mypromise;
};
export default handleResponseFromAPI;
