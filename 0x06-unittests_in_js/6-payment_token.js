const getPaymentTokenFromAPI = async (success) => {
  if (success === true) {
    return {
      data: 'Successful response from the API',
    };
  } return undefined;
};
module.exports = getPaymentTokenFromAPI;
