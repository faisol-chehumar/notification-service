import { Router } from 'express';
import { middleware } from '@line/bot-sdk';

import config from '../../configs/line.config.json';

const webhookRouter = Router();

webhookRouter.post('/webhook', middleware(config.TS_SUPPORT), async (req, res) => {
  console.log('webhook');
  console.log(req.body.events); // webhook event objects
  // console.log(req.body.destination); // user ID of the bot (optional)
  res.status(200).send(req.body.events);
});

// webhookRouter.get('/webhook', middleware(config.TS_SUPPORT), async (req, res) => {

//   // console.log(req.body.events); // webhook event objects
//   // console.log(req.body.destination); // user ID of the bot (optional)
//   res.status(200).send(config.TS_SUPPORT);
// });

export default webhookRouter;
