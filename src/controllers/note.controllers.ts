import { Request, Response } from 'express';

import { noteCreateService, noteGetByIdService } from '../services/note.services';

export async function noteCreateController(req: Request, res: Response): Promise<void> {
    const { content } = req.body;

    if (!content) res.status(400).json({ msg: 'Content is required' });
    if (typeof content !== 'string') res.status(400).json({ msg: 'Content must be a string' });
    if (content.length < 1)
        res.status(400).json({ msg: 'Content must be at least 1 character long' });
    if (content.length > 1000)
        res.status(400).json({ msg: 'Content must be at most 1000 characters long' });
    if (content.trim().length < 1)
        res.status(400).json({ msg: 'Content must be at least 1 character long' });

    const note = await noteCreateService(content);

    res.status(201).json({ id: note });
}

export async function noteGetByIdController(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    if (!id) res.status(400).json({ msg: 'Id is required' });
    if (typeof id !== 'string') res.status(400).json({ msg: 'Id must be a string' });
    if (id.length < 1) res.status(400).json({ msg: 'Id must be at least 1 character long' });
    if (id.length > 1000) res.status(400).json({ msg: 'Id must be at most 1000 characters long' });
    if (id.trim().length < 1) res.status(400).json({ msg: 'Id must be at least 1 character long' });
    if (id.length !== 36) res.status(400).json({ msg: 'Id must be a valid UUID' });

    const note = await noteGetByIdService(id);
    if (!note) res.status(404).json('Note not found');

    res.status(200).json({ id: note });
}
