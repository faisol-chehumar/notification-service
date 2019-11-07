import express from 'express';

import errorHandler from './middlewares/error-handler';
import apiRoutes from './routes/api';
import webhookRoutes from './routes/webhook';

const app = express();

// Webhook Route.
// If another body parser already parsed a request's body,
// the webhook middleware cannot access to the raw body of the request.
// The raw body should be retrieved for signature validation.
app.use(webhookRoutes);

// Parse Body.
app.use(express.json());

// Routes.
app.use(apiRoutes);

// All error event will process here.
app.use(errorHandler);

app.listen(3000, () => {
  console.log('Running at localhost:3000');
});
