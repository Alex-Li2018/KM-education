const express = require('express');
const router = express.Router();
//引入sql的操作
const { login, createUser } = require('../controller/users')
const { SuccessModel, ErrorModel } = require('../model/resModel')

/* GET users listing. */
router.post('/create', function(req, res, next) {
  let { username, nickname, password } = req.body;
 
  createUser(req.body).then(data => {
    // affectedRows 影响的函数
    let { affectedRows } = data;

    if(affectedRows == 1) {
      res.json(
        new SuccessModel("新增用户成功")
      )
    } else {
      if(data.code == 'ER_DUP_ENTRY') {
        res.json(
          new ErrorModel("用户名重复")
        )
      } else {
        res.json(
          new ErrorModel("新增用户失败")
        )
      }
    }
  })
});

module.exports = router;
