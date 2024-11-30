const app = require('express')();

const host = 'localhost';
const port = 1245;

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.listen(port, host);

module.exports = app;
