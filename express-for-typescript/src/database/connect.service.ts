import * as mysql from 'mysql';
import { mysql_account } from '../mysql_account';

const connect = mysql.createConnection(mysql_account);
connect.connect();

export interface dataObj {
    site: string;
    name: string;
    price: Int16Array;
    images: Array<string>;
    detail: string;
    origin_url: string;
    etc: string;
};

export const getData = (keyWord: string) => {
    connect.query("select * from joongnatest where name like ?", ['%' + keyWord + '%'], (err, data) => {
        if (err) {
            throw err;
        }
        //console.log(data);    -- 정상적으로 data 출력됨.
        
        return data;
    });
};

export const updateData = (keyword: dataObj) => {
    connect.query('insert ignore into joongnatest values(?, ?, ?, ?, ?, ?, ?)', [keyword.site, keyword.name, keyword.price, keyword.images[0], keyword.detail, keyword.origin_url, keyword.etc], (err, data) => {
        if (err) {
            data = 'Fail';
            throw err;
        }
        data = 'Success';
        return data;
    });
};

export const removeData = () => {};
