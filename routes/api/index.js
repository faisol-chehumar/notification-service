import { Router } from 'express';

import v1Router from './v1.0';

const apiRouter = Router();

apiRouter.use('/v1.0', v1Router);

export default apiRouter;
