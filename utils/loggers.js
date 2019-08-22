import log4js from 'log4js';
import * as Sentry from '@sentry/node';

import loggersConfig from '../configs/loggers.config.json';

const log4jsLog = errorMessage => {
  log4js.configure({
    appenders: {
      watcher: { type: 'dateFile', filename: `./logs/${loggersConfig.log4js.filename}.log` }
    },
    categories: { default: { appenders: ['watcher'], level: 'info' } }
  });

  const logger = log4js.getLogger();

  return logger.error(errorMessage);
};

const sentryLog = errorMessage => {
  Sentry.init({
    dsn: loggersConfig.sentry.dsn
  });

  return Sentry.captureException(errorMessage);
};

const create = client => {
  if (!client) {
    return 'No logger init.';
  }

  return {
    log: error => {
      return client === 'log4js' ? log4jsLog(error) : sentryLog(error);
    }
  };
};

export default {
  create
};
