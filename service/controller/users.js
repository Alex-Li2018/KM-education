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

// 查询用户
const queryUser = () => {
    const sql = `select * from users`
    return exec(sql).then(rows => {
        return rows || {};
    })
    .catch(res => {
        return res;
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

// 删除用户
const deleteUser = (userInfo) => {
    let { nickname, username } = userInfo;

    const sql = `DELETE FROM users WHERE nickname = '${nickname}' and username = '${username}' and state = 0`

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
    createUser,
    queryUser,
    deleteUser
}