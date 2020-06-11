import express from 'express';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

const router = express.Router();

router.post('/users', UserController.store);
router.post('/session', SessionController.store);

export default router;
