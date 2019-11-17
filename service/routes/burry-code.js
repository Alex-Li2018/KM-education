var express = require('express');
var router = express.Router();
//引入sql的操作
const { createBurryCode, queryBurryCode } = require('../controller/burry-code')
const { SuccessModel, ErrorModel } = require('../model/resModel')

router.post('/create', function(req, res, next) {
  
    createBurryCode(req.body).then(data => {
    // affectedRows 影响的函数
    let { affectedRows } = data;

    if(affectedRows == 1) {
      res.json(
        new SuccessModel("埋点数据插入成功")
      )
    } else {
        res.json(
          new ErrorModel("埋点数据数据插入失败")
        )
    }
  })
});

router.post('/query', function(req, res, next) {
    queryBurryCode(req.body).then(data => {
    let total = data.length ? data[0]['(select count(*) from burry-code)'] : 0;
    let { pageSize, pageIndex } = req.body;
    let pargData = Object.assign({ total }, { pageSize: +pageSize, pageIndex: +pageIndex });
    data.length && data.forEach(_ => {
      delete _['(select count(*) from burry-code)']
    })

    let list = {
      list: data,
      pargData
    }
    res.json(
      new SuccessModel(list)
    )
  })
});

module.exports = router;
