import express, { Router } from 'express';

import {adduser} from '../controller/user-controller.js';

const router=express.Router();

router.post('/register', adduser);

export default router;