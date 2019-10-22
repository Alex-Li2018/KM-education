const { exec, escape } = require('../db/mysql.js')

const createFreeConsultation = (freeConsultation) => {
    let { concatlink, username, shopname, shopplatform, wantservice } = freeConsultation;

    const sql = "insert into freeconsultation(`concatlink`, `username`, `shopname`, `shopplatform`, `wantservice`)" +
                `values ('${concatlink}', '${username}', '${shopname}', '${shopplatform}', '${wantservice}')`

    return exec(sql).then(rows => {
            return rows || {};
        })
        .catch(res => {
            console.log(res)
            return res;
        })
}

module.exports = {
    createFreeConsultation
}