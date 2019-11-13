//图片上传的接口
const express = require('express');
const router = express.Router();
const Path = require('path')
const sizeOf = require('image-size');
const multer = require('multer')
//uuid工具可以生成唯一标示 需要安装
const UUID = require('uuid')
const config = require('../conf/tokenApi')

//引入sql的操作
const { login, createUser } = require('../controller/users')
const { SuccessModel, ErrorModel } = require('../model/resModel')

//设置保存规则
const storage = multer.diskStorage({
    //destination：字段设置上传路径，可以为函数
    destination: Path.resolve(__dirname, '../static/img'),

    //filename：设置文件保存的文件名
    filename: function(req, file, cb) {
        let extName = file.originalname.slice(file.originalname.lastIndexOf('.'))
        let fileName = UUID.v1()
        cb(null, fileName + extName)
    }
})

//设置过滤规则（可选）
const imageFilter = function(req, file, cb){
    const acceptableMime = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif']
    //微信公众号只接收上述四种类型的图片
    if(acceptableMime.indexOf(file.mimetype) !== -1){
        cb(null, true)
    }else{
        cb(null, false)
    }
}

//设置限制（可选）
const imageLimit = {
    fieldSize: '2MB'
}

//创建 multer 实例
//定义表单字段、数量限制 多文件上传
const imageUploader = multer({ 
    storage: storage,
    fileFilter: imageFilter,
    limits: imageLimit
}).array('files', 12)

//单文件上传
const imageUploaderSingle = multer({ 
    storage: storage,
    fileFilter: imageFilter,
    limits: imageLimit
}).single('file')

//登录接口
router.post('/img', imageUploaderSingle, function(req, res, next) {console.log(req.file)
    //从请求中得到文件数据
    let file = req.file;
    
    //得到图片尺寸
    let dimensions = sizeOf(file.path);
    // console.log('文件类型：%s', file.mimetype);
    // console.log('原始文件名：%s', file.originalname);
    // console.log('文件大小：%s', file.size);
    // console.log('文件保存路径：%s', file.path);

    res.json({
        code: 200,
        data: {
            url: config.uploadPath+ 'img/' +file.filename,//本地的图片url地址
            size: dimensions
        }
    });
});

module.exports = router;