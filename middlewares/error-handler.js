import sentryConfig from '../configs/sentry.config.json';

const Sentry = require('@sentry/node');

// Sentry.init({
//   dsn: 'https://0df3e9b0df6840d6b691d1608dcccb1d@sentry.io/1535715'
// });
if (sentryConfig.enable) {
  Sentry.init({
    dsn: sentryConfig.dsn
  });
}

export default (err, _, res, next) => {
  if (!err) {
    return next();
  }

  if (sentryConfig.enable) {
    Sentry.captureException(err);
  }

  return res.status(400).json({
    status: err.name,
    message: err.message
  });
};
