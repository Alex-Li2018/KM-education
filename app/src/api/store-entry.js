// 新增入驻店铺的数据
export function insertStoreEntryAPI(params) {
    let url = `store-entry/create`;
    let data = Object.assign({}, params);

    return $Http.post(url,data)
        .then(res => {
            return res.data;
        })
        .catch(res => {
            return res.data;
        })
}