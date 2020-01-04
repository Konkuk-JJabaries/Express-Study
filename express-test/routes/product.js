var express = require('express');
var router = express.Router();
var api_11st = require('../../11st/dist/src/index');
var mysql = require('mysql');
var mysql_account = require('../mysql_account');

/* GET users listing. */
router.get('/', async function(req, res, next) {
    if (req.query.name) {
        return callProduct(req.query.name, res);
    }
    return res.status(200).json({
        success: true,
        data: 'product name 이 없습니다.',
    });
});

async function callProduct(productName, res) {
    if (productName === '모니터') {
        const connect = mysql.createConnection(mysql_account);
        connect.connect();
        connect.query('SELECT * FROM `test`.`productSave`', (err, data) => {
            if (err) {
                throw err;
            }
            return sendResponse(res, data);
        });
    } else {
        api_11st.index(productName).then(data => sendResponse(res, data));
    }
}

function sendResponse(res, data) {
    return res.status(200).json({
        success: true,
        data,
    });
}

module.exports = router;
