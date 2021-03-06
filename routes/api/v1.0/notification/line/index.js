import * as line from '@line/bot-sdk';
import Joi from '@hapi/joi';
import { Router } from 'express';

import config from '../../../../../configs/line.config.json';
import service from '../../../../../services';

const { bot } = service;
const lineRouter = Router();

lineRouter.post('/', async (req, res, next) => {
  try {
    const schema = Joi.object().keys({
      channel: Joi.string().required(),
      userIds: Joi.array().required(),
      messages: Joi.array().required()
    });

    Joi.validate(req.body, schema, error => {
      if (error) {
        throw error;
      }
    });

    const { channel, userIds, messages } = req.body;

    const botClient = bot.create({
      service: line,
      channel,
      config
    });

    const result = await bot.multicast(botClient, {
      userIds,
      messages
    });

    return res.status(200).json({
      status: 'success',
      result
    });
  } catch (e) {
    return next(e);
  }
});

export default lineRouter;
