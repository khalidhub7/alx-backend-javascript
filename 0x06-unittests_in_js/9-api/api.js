const express = require('express');

const app = express();

app
  .get('/', (req, res) => {
    res.status(200)
      .send('Welcome to the payment system');
  })
  .get('/cart/:id(\\d+)', (req, res) => {
    // regex makes express auto send 404 on invalid input
    const id = Number(req.params.id);
    res.status(200)
      .send(`Payment methods for cart ${id}`);
  })

  .listen(7865, 'localhost', () => console.log(
    'API available on localhost port 7865',
  ));
