// let createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//引入token的操作,token的白名单
const tokenUtil = require("./untils/token")
const config = require('./conf/tokenApi');
const until = require('./untils/untils');

//引入路由操作文件
const freeConsultationRouter = require('./routes/free-consultation');
const usersRouter = require('./routes/users');
const uploadRouter = require("./routes/upload");
const staticRouter = require('./routes/static');
const bannerRouter = require('./routes/banner');

//实例一个express的app
let app = express();

// 跨域配置 本地调试使用
app.use(function(req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    // res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, wec-access-token, Set-Cookie");
    res.header("Access-Control-Allow-Credentials", "true");
  
    next();
});

//app.use是Express拦截器的方法
app.use(function(req, res, next) {
  
    // 拿取token 数据 按照自己传递方式写
    let cookie = req.headers['cookie'];
    let token = until.cookieToJson(cookie);
    // 检查token是否有效（过期和非法）
    let user = tokenUtil.checkToken(token);
    if (user) {
        //将当前用户的信息挂在req对象上，方便后面的路由方法使用
        req.user = user;
        
        // 续期
        tokenUtil.setToken({user,res});
  
        next(); //继续下一步路由
    } else {
        //不需要登录态域名白名单
        if (config.tokenApi.join(',').indexOf(req.path) == -1) {
            next();
            return;
        }
        res.json({ code: 401, message: '无效的token.' });
    }
});

//中间件
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//路由处理
app.use('/free-consultation', freeConsultationRouter);
app.use('/user', usersRouter);
app.use('/upload', uploadRouter);
app.use('/static', staticRouter);
app.use('/banner', bannerRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
