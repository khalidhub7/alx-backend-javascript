const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.status(200)
    .send('Welcome to the payment system');
});

app.listen(7865, 'localhost', () => console.log(
  'API available on localhost port 7865',
));
