import { Router } from 'express';

import notificationLine from './notification/line';

const apiRouter = Router();

apiRouter.use('/NotificationLine', notificationLine);

export default apiRouter;
