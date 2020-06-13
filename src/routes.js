import express from 'express';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import auth from './app/middlewares/auth';

const router = express.Router();

router
  .post('/users', UserController.store)
  .post('/session', SessionController.store)
  .use(auth) // rotas abaixo necessita da sessão logado
  .get('/logout', SessionController.destroy)
  .get('/profile/:idUser', UserController.index)
  .put('/users', UserController.update)
  .delete('/users/:idUser', UserController.delete);

export default router;
