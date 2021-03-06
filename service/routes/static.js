const express = require('express');
const router = express.Router();
const path = require('path');

//引入sql的操作
const { SuccessModel, ErrorModel } = require('../model/resModel')
const token = require('../untils/token')

// 静态文件展示
router.get('/img/*', function(req, res, next) {
    // let { filename } = req.params;
    // res.writeHead(200,{'Content-Type':'image/jpeg'});
    res.sendFile(path.resolve(__dirname, `../static/${req.url}`));
});
// 静态文件展示
router.get('/show-img/*', function(req, res, next) {
    // let { filename } = req.params;
    // res.writeHead(200,{'Content-Type':'image/jpeg'});
    res.sendFile(path.resolve(__dirname, `../static/${req.url}`));
});

module.exports = router;
