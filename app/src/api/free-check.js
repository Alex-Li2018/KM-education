export function freeCheckAPI(params) {
    let url = `free-consultation`;
    let data = Object.assign({},params);

    return $Http.post(url,data)
        .then(res => {
            return res.data;
        })
        .catch(res => {
            return res.data;
        })
}