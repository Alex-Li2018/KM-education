var express = require('express');
var router = express.Router();
//引入sql的操作
const { queryFreeConsultation, createFreeConsultation } = require('../controller/free-consultation')
const { SuccessModel, ErrorModel } = require('../model/resModel')

router.post('/create', function(req, res, next) {
  
  /* 标注其中的 
    shopplatform: 
      0 ---- 淘宝
      1 ---- 天猫
      2 ---- 京东
      3 ---- 拼多多
      4 ---- 阿里巴巴
    wantservice:
      0 ---- 网点运营推广
      1 ---- 店铺装修设计
      2 ---- 直通车/砖展
      3 ---- 店铺诊断
      4 ---- 打造爆款
      5 ---- 其他
  */
  createFreeConsultation(req.body).then(data => {
    // affectedRows 影响的函数
    let { affectedRows } = data;

    if(affectedRows == 1) {
      res.json(
        new SuccessModel("咨询数据插入成功")
      )
    } else {
        res.json(
          new ErrorModel("咨询数据插入失败")
        )
    }
  })
});

router.get('/query', function(req, res, next) {
  
  queryFreeConsultation(req.query).then(data => {
    let total = data.length ? data[0]['(select count(*) from freeconsultation)'] : 0;
    let { pageSize, pageIndex } = req.query;
    let pargData = Object.assign({ total }, { pageSize: +pageSize, pageIndex: +pageIndex });
    data.length && data.forEach(_ => {
      delete _['(select count(*) from freeconsultation)']
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
