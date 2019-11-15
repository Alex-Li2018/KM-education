const { exec, escape } = require('../db/mysql.js')

const createArticle = (article) => {
    let { articleurl, title, imgurl, content, type } = article;
    let createdtime = new Date().getTime();
    
    const sql = "insert into article(`articleurl`, `title`, `imgurl`, `content`, `createdtime`, `type`)" +
                `values ('${articleurl}', '${title}', '${imgurl}', '${content}', '${createdtime}', '${type}')`

    return exec(sql).then(rows => {console.log(rows)
            return rows || {};
        })
        .catch(res => {
            return res;
        })
}

const queryArticle = (pageArg) => {
    // 实现分页查询
    let { pageSize, pageIndex, type } = pageArg;

    const sql = type !== 'all' ? `select *,(select count(*) from article) from article where type = '${type}' limit ${ (pageIndex - 1) *  pageSize}, ${pageIndex * pageSize}` : `select *,(select count(*) from article) from article limit ${ (pageIndex - 1) *  pageSize}, ${pageIndex * pageSize}`

    return exec(sql).then(rows => {
            return rows || {};
        })
        .catch(res => {
            return res;
        })
}

const deleteArticle = (params) => {
    // 删除
    let { id } = params;

    const sql = `DELETE FROM article WHERE id = '${id}' `

    return exec(sql).then(rows => {
            return rows || {};
        })
        .catch(res => {
            return res;
        })
}

module.exports = {
    createArticle,
    queryArticle,
    deleteArticle
}