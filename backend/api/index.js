
import request from '../utils/request.js'

const prefix1 = "https://api.dingtalk.com";
const prefix2 = "https://oapi.dingtalk.com"
/**
 * 获取accessToken的方法
 * @param {String} appKey 
 * @param {String} appSecret 
 * @returns 
 */
export const getAccessToken = async (appKey, appSecret) => {
  return request({
    method: 'post',
    url: `${prefix1}/v1.0/oauth2/accessToken`,
    data: {
      appKey,
      appSecret
    }
  })
}
/**
 * 获取jsapiTicket
 * @param {*} token
 * @returns
 */
export const jsapiTicket = async (token) => {
  return request({
    headers: {
      'Content-Type': 'application/json',
      'x-acs-dingtalk-access-token': token
    },
    method: 'post',
    url: `${prefix1}/v1.0/oauth2/jsapiTickets`,
    data: {}
  });
}
/**
 * 企业内部access_token
 * @param {*} access_token
 * 企业内部面免登授权码
 * @param {*} code
 * @returns
 */
export const getDingUserInfo = async (access_token, code) => {
  return request({
    method: 'post',
    url: `${prefix2}/topapi/v2/user/getuserinfo`,
    params: {
      access_token
    },
    data: {
      code,
    }
  });
}
