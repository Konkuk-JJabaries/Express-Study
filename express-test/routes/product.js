var express = require('express');
var router = express.Router();
var api = require('../../11st/out/index');

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
    const result = await api.index(productName);
    return res.status(200).json({
        success: true,
        data: result,
    });
}

module.exports = router;
