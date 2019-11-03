export function freeCheckAPI(params) {
    let url = `free-consultation/create`;
    let data = Object.assign({},params);

    return $Http.post(url,data)
        .then(res => {
            return res.data;
        })
        .catch(res => {
            return res.data;
        })
}

export function queryfreeCheckAPI(params) {
    let url = `free-consultation/query`;
    let data = Object.assign({},params);

    return $Http.get(url,data)
        .then(res => {
            return res.data;
        })
        .catch(res => {
            return res.data;
        })
}