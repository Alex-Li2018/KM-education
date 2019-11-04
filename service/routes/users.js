const express = require('express');
const router = express.Router();
//引入sql的操作
const { login, createUser, queryUser, deleteUser } = require('../controller/users')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const token = require('../untils/token')

/* GET users listing. */
router.post('/create', function(req, res, next) {
  let { username, nickname, password } = req.body;
  let flag = false;
  // 参数校验
  const mapRules = new Map([
    [username, { vaild: '用户名不能为空' }],
    [nickname, { vaild: '昵称不能为空' }],
    [password, { vaild: '密码不能为空' }]
  ])
  for (let [key, value] of mapRules.entries()) {
    if(!key) {
      let { vaild } = value
      flag = true
      new ErrorModel(vaild)
      break
    }
  }
  if(flag) return;
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

// 登录
router.post('/login', function(req, res, next) {
  let { username, password } = req.body;
  let flag = false;
  // 参数校验
  const mapRules = new Map([
    [username, { vaild: '用户名不能为空' }],
    [password, { vaild: '密码不能为空' }]
  ])
  for (let [key, value] of mapRules.entries()) {
    if(!key) {
      let { vaild } = value
      flag = true
      res.json(
        new ErrorModel(vaild)
      )
      break;
    }
  }
  if(flag) return;
  login(req.body).then(data => {
    // username查询到的用户名
    let { username } = data;

    if(username) {
      // 设置token
      //设置token
      token.setToken({user: username,res});
      res.json(
        new SuccessModel(data)
      )
    } else {
      res.json(
        new ErrorModel("登陆失败")
      )
    }
  })
});

//删除
router.post('/delete', function(req, res, next) {
  
  deleteUser(req.body).then(data => {
    // affectedRows 影响的函数
    let { affectedRows } = data;

    if(affectedRows == 1) {
      res.json(
        new SuccessModel("删除用户成功!")
      )
    } else {
        res.json(
          new ErrorModel("删除用户失败!")
        )
    }
  })
});

// 查询
router.get('/query', function(req, res, next) {
  
  queryUser().then(data => {
    res.json(
      new SuccessModel(data)
    )
  })
});

module.exports = router;
