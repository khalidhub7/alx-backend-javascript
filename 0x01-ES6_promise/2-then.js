const handleResponseFromAPI = (promise) => {
  promise
    .then(() => ({
      status: 200,
      body: 'success',
    }))
    .catch(() => new Error('fetching error'))
    .finally(() => {
      console.log('Got a response from the API');
    });
};
