import express from 'express';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import auth from './app/middlewares/auth';

const router = express.Router();

router
  .post('/users', UserController.store)
  .post('/session', SessionController.store)
  .use(auth) // rotas abaixo necessita da sessão logado
  .put('/users', UserController.update);

export default router;
