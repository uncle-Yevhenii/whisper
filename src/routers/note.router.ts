import express from 'express';

import {
    noteCreateController,
    noteGetByIdController,
    noteDeleteController,
} from '../controllers/note.controllers';

const router = express.Router();

router.post('/note', noteCreateController);
router.get('/note/:id', noteGetByIdController);
router.delete('/note/:id', noteDeleteController);

export default router;
