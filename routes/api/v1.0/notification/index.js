import { Router } from 'express';

import lineRouter from './line';

const notificationRouter = Router();

notificationRouter.use('/line', lineRouter);

export default notificationRouter;
