// 新增banner信息
export function insertBannerAPI(params) {
    let url = `banner/insert`;
    let data = Object.assign({}, params);

    return $Http.post(url,data)
        .then(res => {
            return res.data;
        })
        .catch(res => {
            return res.data;
        })
}

export function upadteBannerAPI(params) {
    let url = `banner/update`;
    let data = Object.assign({}, params);

    return $Http.post(url,data)
        .then(res => {
            return res.data;
        })
        .catch(res => {
            return res.data;
        })
}

export function queryBannerAPI(params) {
    let url = `banner/query`;
    let data = Object.assign({}, params);

    return $Http.get(url,data)
        .then(res => {
            return res.data;
        })
        .catch(res => {
            return res.data;
        })
}