// 校验手机号码
export function isPhone (phone){
    return /^1(3\d|4\d|5\d|6\d|7\d|8\d|9\d)\d{8}$/g.test(phone);
}