// 登录部分
export function loginAPI(params) {
    let url = `user/login`;
    let data = Object.assign({}, params);

    return $Http.post(url,data)
        .then(res => {
            return res.data;
        })
        .catch(res => {
            return res.data;
        })
}

// 删除用户
export function deleteUserAPI(params) {
    let url = `user/delete`;
    let data = Object.assign({}, params);

    return $Http.post(url,data)
        .then(res => {
            return res.data;
        })
        .catch(res => {
            return res.data;
        })
}

// 查询用户信息
export function queryUserAPI(params) {
    let url = `user/query`;
    let data = Object.assign({}, params);

    return $Http.get(url,data)
        .then(res => {
            return res.data;
        })
        .catch(res => {
            return res.data;
        })
}

//创建用户
export function createUserAPI(params) {
    let url = `user/create`;
    let data = Object.assign({}, params);

    return $Http.post(url,data)
        .then(res => {
            return res.data;
        })
        .catch(res => {
            return res.data;
        })
}