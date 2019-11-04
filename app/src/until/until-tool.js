// 校验手机号码
export function isPhone (phone){
    return /^1(3|4|5|6|7|8|9)\d{9}$/.test(phone);
}