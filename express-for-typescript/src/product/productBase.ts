import { NextFunction, Request, Response, Router } from 'express';
import * as path from 'path';
import { callApp } from './callApp.service';
import * as mysql from 'mysql';
import { ProductResponse } from './Interface/productResponse.interface';
import { getData, updateData } from '../database/connect.service';

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
    //const result = await callApp(req.query);
    const db_result = getData(req.query.title);
    console.log(db_result);
    return res.status(200).json(db_result);

    /*for (var i = 0; i < result[1].length; i++) {
        updateData(result[1][i]);
    }*/
    //return res.status(200).json(result);
});

export default productBase;
// const connect = mysql.createConnection(mysql_account);
// connect.connect();
// connect.query('SELECT * FROM `test`.`productSave`', (err, data) => {
//     if (err) {
//         throw err;
//     }
//     return sendResponse(res, data);
// });
// } else {
// api_11st.index(productName).then(data => sendResponse(res, data));
// }
