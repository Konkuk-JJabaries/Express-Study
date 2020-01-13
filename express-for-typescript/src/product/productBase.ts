import { NextFunction, Request, Response, Router } from 'express';
import * as path from 'path';
import { callApp } from './callApp.service';
import { ProductResponse } from './Interface/productResponse.interface';
import { getData, updateData, dataObj } from '../database/connect.service';

const productBase = Router();

productBase.get('/', (req: Request, res: Response, next: NextFunction) => {
    if (!req.query.title) {
        return res
            .status(200)
            .sendFile(path.join(__dirname, '../../views/product/productBase.html'));
    }
    console.log(req.query);
});

productBase.get('/search', async (req: Request, res: Response, next: NextFunction) => {
    if (!req.query.title) {
        return res.send('Error!! There is no Query String');
    }
    const db_result = await getData(req.query.title);
    if(Object(db_result).length < 20) {
        const result = await callApp(req.query);
        for (var i = 0; i < result[1].length; i++) {
            updateData(result[1][i]);
        }
        return res.status(200).json(result[1]);
    }
    return res.status(200).json(db_result);
});

export default productBase;
