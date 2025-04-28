import { Request, Response } from 'express';

import { pingService } from '../services/ping.services';

export function pingController(_req: Request, res: Response): void {
    const { message } = pingService();

    res.status(200).json({ message });
}
