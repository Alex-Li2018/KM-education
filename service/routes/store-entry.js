var express = require('express');
var router = express.Router();
//引入sql的操作
const { createStoreEntry,queryStoreEntry } = require('../controller/store-entry')
const { SuccessModel, ErrorModel } = require('../model/resModel')

router.post('/create', function(req, res, next) {
  
  createStoreEntry(req.body).then(data => {
    // affectedRows 影响的函数
    let { affectedRows } = data;

    if(affectedRows == 1) {
      res.json(
        new SuccessModel("店铺入驻数据插入成功")
      )
    } else {
        res.json(
          new ErrorModel("店铺入驻数据插入失败")
        )
    }
  })
});

router.get('/query', function(req, res, next) {
  
});

module.exports = router;
