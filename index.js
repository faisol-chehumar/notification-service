import express from 'express';

import errorHandler from './middlewares/error-handler';
import apiRoutes from './routes/api';

const app = express();

app.use(express.json());

// Routes;
app.use(apiRoutes);

// All error event will process here.
app.use(errorHandler);

app.listen(3000, () => {
  console.log('Running at localhost:3000');
});
