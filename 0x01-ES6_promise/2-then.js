const handleResponseFromAPI = (promise) => {
  const mypromise = new Promise((resolve, reject) => {
    if (promise) {
      resolve({
        status: 200,
        body: 'success',
      });
    } else {
      reject(new Error('fetching error'));
    }
  });
  console.log('Got a response from the API');
  return mypromise;
};
export default handleResponseFromAPI;
