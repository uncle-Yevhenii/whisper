import express from 'express';

import { noteCreateController, noteGetByIdController } from '../controllers/note.controllers';

const router = express.Router();

router.post('/note', noteCreateController);
router.get('/note/:id', noteGetByIdController);

export default router;
