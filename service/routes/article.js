var express = require('express');
var router = express.Router();
//引入sql的操作
const { createArticle, queryArticle, deleteArticle } = require('../controller/article')
const { SuccessModel, ErrorModel } = require('../model/resModel')

router.post('/create', function(req, res, next) {
  
    createArticle(req.body).then(data => {
    // affectedRows 影响的函数
    let { affectedRows } = data;

    if(affectedRows == 1) {
      res.json(
        new SuccessModel("文章数据插入成功")
      )
    } else {
        res.json(
          new ErrorModel("文章数据数据插入失败")
        )
    }
  })
});

router.post('/query', function(req, res, next) {
    queryArticle(req.body).then(data => {
    let total = data.length ? data[0]['(select count(*) from article)'] : 0;
    let { pageSize, pageIndex } = req.body;
    let pargData = Object.assign({ total }, { pageSize: +pageSize, pageIndex: +pageIndex });
    data.length && data.forEach(_ => {
      delete _['(select count(*) from article)']
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

router.get('/delete', function(req, res, next) {
  
  deleteArticle(req.query).then(data => {
    // affectedRows 影响的函数
    let { affectedRows } = data;

    if(affectedRows == 1) {
      res.json(
        new SuccessModel("文章数据删除成功")
      )
    } else {
      res.json(
        new ErrorModel("文章数据数据删除失败")
      )
    }
  })
});

module.exports = router;
