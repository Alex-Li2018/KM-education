module.exports = {
    //需要登录态的接口
    tokenApi:[
        '/user/create',
        '/user/delete',
        '/user/query',
        '/upload/img',
        // 查询时不需要校验
        // '/banner/query',
        // '/store-entry/create',
        '/banner/update',
        '/banner/insert',
        '/free-consultation/query',
        '/article/delete',
        '/article/create'
    ],
    uploadPath:'/static/',
    accessKeySecret: 'abc123'
};