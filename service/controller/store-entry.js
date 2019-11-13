const { exec, escape } = require('../db/mysql.js')

const createStoreEntry = (storeEntry) => {
    let { production, phoneNum, link } = storeEntry;
    let createdtime = new Date().getTime();

    const sql = "insert into storeentry(`production`, `phoneNum`, `link`, `createdtime`)" +
                `values ('${production}', '${phoneNum}', '${link}', '${createdtime}')`

    return exec(sql).then(rows => {
            return rows || {};
        })
        .catch(res => {
            return res;
        })
}

const queryStoreEntry = (pageArg) => {
    // 实现分页查询
    let { pageSize, pageIndex } = pageArg;
    const sql = `select *,(select count(*) from storeentry) from storeentry limit ${ (pageIndex - 1) *  pageSize}, ${pageIndex * pageSize}`
    
    return exec(sql).then(rows => {
            return rows || {};
        })
        .catch(res => {
            return res;
        })
}

module.exports = {
    createStoreEntry,
    queryStoreEntry
}