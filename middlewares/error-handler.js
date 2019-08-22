import appConfig from '../configs/app.config.json';
import loggers from '../utils/loggers';

const logger = loggers.create(appConfig.logger.service);

export default (err, _, res, next) => {
  if (!err) {
    return next();
  }

  if (appConfig.logger.enable) {
    logger.log(err.message);
  }

  return res.status(400).json({
    status: err.name,
    message: err.message
  });
};
