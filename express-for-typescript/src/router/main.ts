import { Router, Request, Response, NextFunction } from 'express';
import * as path from 'path';

const main = Router();

// Welcome Site will be go inside
main.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(path.join(__dirname, '../../views/router/index.html'));
});

// Documentation will be go inside
main.get('/about', (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(path.join(__dirname, '../../views/router/about.html'));
});

export default main;
