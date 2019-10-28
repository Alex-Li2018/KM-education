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