const { exec, escape } = require('../db/mysql.js')

// 查询banner
const queryBanner = () => {
    // 查询没被删除(软删除)的图片
    // where state = 1
    const sql = `select * from banner`
    return exec(sql).then(rows => {
        return rows || {};
    })
    .catch(res => {
        return res;
    })
}

//创建banner
const insertBanner = (bannerInfo) => {
    let { bannerUrl, type, name } = bannerInfo;
    let createtime = new Date().getTime();
    const sql = "insert into banner(banner_url,type,name,state, create_time)" +
                `values ('${bannerUrl}', '${type}', '${name}', 1, '${createtime}')`

    return exec(sql).then(rows => { 
            return rows || {};
        })
        .catch(res => {
            console.log(res)
            return res;
        })
}

// 更新banner
const updateBanner = (bannerInfo) => {
    let { flag, bannerId } = bannerInfo;
    let upadteTime = new Date().getTime();

    const sql = `update banner set state = ${flag}, update_time = '${upadteTime}' where id = '${bannerId}'`

    return exec(sql).then(rows => { 
            return rows || {};
        })
        .catch(res => {
            console.log(res)
            return res;
        })
}

module.exports = {
    insertBanner,
    queryBanner,
    updateBanner
}