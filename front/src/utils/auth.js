// 默认情况下，未设置过期时间的 Cookie 只在会话中有效（浏览器关闭后失效）。
// 通过设置 expires 属性，可以控制 Cookie 的有效期。
import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const DingUserInfoKey = 'DingUserInfo'

/**
 * 获取token
 * @returns {String} token
 */
export const getToken = () => {
  return Cookies.get(TokenKey)
}
/**
 * 设置token,一般会在前端设置过期时间,后端也会设置过期时间
 * @param {*} token 
 * @returns 
 */
export const setToken = (token) => {
  return Cookies.set(TokenKey, token)
}

// 这样设置后，用户在 7 天内不需要重新登录，直到 Cookie 过期。
// export function setToken(token) {
//   return Cookies.set(TokenKey, token, { expires: 7 }) // 设置 7 天后过期
// }
export const removeToken = () => {
  return Cookies.remove(TokenKey)
}
/**
 * 设置dingding用户信息
 * @param {Object} info 
 */
export const setDingUserInfo = (info) => {
  localStorage.setItem(DingUserInfoKey, JSON.stringify(info))
}
/**
 * 获取dingding用户信息
 * @returns Object
 */
export const getDingUserInfo = () => {
  return JSON.parse(localStorage.getItem(DingUserInfoKey))
}
