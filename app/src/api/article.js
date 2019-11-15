export function ArticleAPI(params) {
    let url = `article/create`;
    let data = Object.assign({},params);

    return $Http.post(url,data)
        .then(res => {
            return res.data;
        })
        .catch(res => {
            return res.data;
        })
}

export function queryArticleAPI(params) {
    let url = `article/query`;
    let data = Object.assign({},params);

    return $Http.post(url,data)
        .then(res => {
            return res.data;
        })
        .catch(res => {
            return res.data;
        })
}

export function deleteArticleAPI(params) {
    let url = `article/delete`;
    let data = Object.assign({},params);

    return $Http.get(url,data)
        .then(res => {
            return res.data;
        })
        .catch(res => {
            return res.data;
        })
}