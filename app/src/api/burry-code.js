export function createBurryCodeAPI(params) {
    let url = `burry-code/create`;
    let data = Object.assign({},params);

    return $Http.post(url,data)
        .then(res => {
            return res.data;
        })
        .catch(res => {
            return res.data;
        })
}

export function queryBurryCodeAPI(params) {
    let url = `burry-code/query`;
    let data = Object.assign({},params);

    return $Http.post(url,data)
        .then(res => {
            return res.data;
        })
        .catch(res => {
            return res.data;
        })
}
