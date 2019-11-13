const { exec, escape } = require('../db/mysql.js')

const createFreeConsultation = (freeConsultation) => {
    let { concatlink, username, shopname, shopplatform, wantservice } = freeConsultation;
    let createdtime = new Date().getTime();

    const sql = "insert into freeconsultation(`concatlink`, `username`, `shopname`, `shopplatform`, `wantservice`, createdtime)" +
                `values ('${concatlink}', '${username}', '${shopname}', '${shopplatform}', '${wantservice}', '${createdtime}')`

    return exec(sql).then(rows => {
            return rows || {};
        })
        .catch(res => {
            return res;
        })
}

const queryFreeConsultation = (pageArg) => {
    // 实现分页查询
    let { pageSize, pageIndex } = pageArg;
    const sql = `select *,(select count(*) from freeconsultation) from freeconsultation limit ${ (pageIndex - 1) *  pageSize}, ${pageIndex * pageSize}`
    
    return exec(sql).then(rows => {
            return rows || {};
        })
        .catch(res => {
            return res;
        })
}

module.exports = {
    queryFreeConsultation,
    createFreeConsultation
}