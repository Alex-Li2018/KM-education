const { exec, escape } = require('../db/mysql.js')

const createBurryCode = (burryCodeData) => {
    let { city, time, page, plate, burryId, burryCode } = burryCodeData;

    const sql = "insert into burrycode(`city`, `time`, `page`, `plate`, `burry-id`, `burry-code`)" +
                `values ('${city}', '${time}', '${page}', '${plate}', '${burryId}', '${burryCode}')`
    console.log(sql);
    return exec(sql).then(rows => {
            return rows || {};
        })
        .catch(res => {
            return res;
        })
}

const queryBurryCode = (pageArg) => {
    // 实现分页查询
    let { pageSize, pageIndex } = pageArg;
    const sql = `select *,(select count(*) from burrycode) from burrycode limit ${ (pageIndex - 1) *  pageSize}, ${pageIndex * pageSize}`
    
    return exec(sql).then(rows => {
            return rows || {};
        })
        .catch(res => {
            return res;
        })
}

module.exports = {
    createBurryCode,
    queryBurryCode
}