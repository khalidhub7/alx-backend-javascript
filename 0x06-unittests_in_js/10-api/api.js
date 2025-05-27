const express = require('express');

const app = express();
app.use(express.json());

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
  .get('/available_payments', (req, res) => {
    res.status(200).send(
      { payment_methods: { credit_cards: true, paypal: false } },
    );
  })
  .post('/login', (req, res) => {
    const name = req.body.userName;
    res.status(200).send(`Welcome ${name}`);
  })
  .listen(7865, 'localhost', () => console.log(
    'API available on localhost port 7865',
  ));
