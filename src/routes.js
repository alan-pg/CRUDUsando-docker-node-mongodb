import express from 'express';
const router = express.Router();

import AccountController from './controllers/AccountController';

router.get('/', AccountController.list);
router.get('/create', AccountController.create);

export default router;