import { Router } from 'express';

import notificationRouter from './notification';

const v1Router = Router();

v1Router.use('/notification', notificationRouter);

export default v1Router;
