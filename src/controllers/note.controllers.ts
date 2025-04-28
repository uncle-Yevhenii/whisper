import { Request, Response } from 'express';

export function noteCreateController(req: Request, res: Response): void {
    res.status(201);
}

export function noteGetByIdController(req: Request, res: Response): void {
    res.status(200);
}
