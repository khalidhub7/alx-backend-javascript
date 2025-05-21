import express from 'express';
import routes from './routes/index';

const app = express()
  .use(routes)
  .listen(1245, 'localhost', () => (
    console.log('server started on port 1245')
  ));

export default app;
