var express = require('express');
var router = express.Router();
//引入sql的操作
const { insertBanner, queryBanner, updateBanner } = require('../controller/banner')
const { SuccessModel, ErrorModel } = require('../model/resModel')

router.get('/query', function(req, res, next) {

  queryBanner().then(data => {
    console.log(data);
    data.forEach(_ => {
      _.banner_url_list = _.banner_url.split(",")
    })
    if(data) {
      res.json(
        new SuccessModel(data)
      )
    } else {
        res.json(
          new ErrorModel("banner数据查询失败")
        )
    }
  })
});

router.post('/insert', function(req, res, next) {

  insertBanner(req.body).then(data => {
    // affectedRows 影响的函数
    let { affectedRows } = data;

    if(affectedRows == 1) {
      res.json(
        new SuccessModel("banner数据插入成功")
      )
    } else {
        res.json(
          new ErrorModel("banner数据插入失败")
        )
    }
  })
});

router.post('/update', function(req, res, next) {

  updateBanner(req.body).then(data => {
    // affectedRows 影响的函数
    let { affectedRows } = data;

    if(affectedRows == 1) {
      res.json(
        new SuccessModel("banner数据修改成功")
      )
    } else {
        res.json(
          new ErrorModel("banner数据修改失败")
        )
    }
  })
});

module.exports = router;
