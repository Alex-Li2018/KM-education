
module.exports = { 
    // cookie解析
    cookieToJson(cookie) {
        if (cookie) {
            let cookieArr = cookie.split(";");
            let obj = {} 
            cookieArr.forEach((i) => {
                let arr = i.split("=");
                obj[arr[0]] =arr[1];
            });
            return obj
        } else {
            return 'xx'
        }
        
    }
}


