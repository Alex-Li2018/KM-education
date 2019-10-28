const { exec, escape } = require('../db/mysql.js')

//登录
const login = (loginInfo) => {
    let { username, password } = loginInfo;
    const sql = `
    select username from users where username = '${username}' and password = '${password}';
    `

    return exec(sql).then(rows => {
        return rows[0] || {}
    })
}

//创建用户
const createUser = (userInfo) => {
    let { nickname, username, password } = userInfo;
    let createtime = new Date().getTime();

    const sql = "insert into users(nickname,username,`password`,state, createtime)" +
                `values ('${nickname}', '${username}', '${password}', 0, '${createtime}')`

    return exec(sql).then(rows => { 
            return rows || {};
        })
        .catch(res => {
            console.log(res)
            return res;
        })
}

module.exports = {
    login,
    createUser
}