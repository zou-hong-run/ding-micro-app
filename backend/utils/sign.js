
// import CryptoJS from 'crypto-js'
// import crypto from 'crypto'
import sha1 from 'sha1'
/**
 * 计算dd.config的签名参数
 *
 * @param {string} jsticket 通过微应用appKey获取的jsticket
 * @param {string} nonceStr 自定义固定字符串
 * @param {number} timeStamp 当前时间戳
 * @param {string} currentUrl 调用dd.config的当前页面URL
 * @returns {string}
 */
export const sign = (ticket, nonce, timeStamp, url) => {
  let plainTex = `jsapi_ticket=${ticket}&noncestr=${nonce}&timestamp=${timeStamp}&url=${decodeURIComponent(url)}`;
  let signature = sha1(plainTex);
  return signature;
}
/**
 * 生成随机字符串
 *
 * @param {number} count 随机字符串长度
 * @returns {string}
 */
export const getRandomStr = (count) => {
  const base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * base.length);
    result += base[randomIndex];
  }
  return result;
}
/**
 * 返回随机字符串
 * @returns 
 */
export const getNonceStr = () => {
  return Math.random().toString(16).substring(2, 15)
}