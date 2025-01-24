
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

/**
 * 创建审批流模板
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */
export const createProcessTemplate = async (token, data) => {
  return request({
    headers: {
      'Content-Type': 'application/json',
      'x-acs-dingtalk-access-token': token
    },
    method: 'post',
    url: `${prefix1}/v1.0/workflow/processCentres/schemas`,
    data
  });
}
/**
 * 查询审批流模板
 * @param {*} token 
 * @param {*} name 
 * @returns 
 */
export const findProcessTemplate = async (token, name) => {
  return request({
    headers: {
      'Content-Type': 'application/json',
      'x-acs-dingtalk-access-token': token
    },
    method: 'get',
    url: `${prefix1}/v1.0/workflow/processCentres/schemaNames/processCodes`,
    params: {
      name
    }
  });
}
/**
 * 创建审批实例
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */
export const createProcessInstance = async (token, data) => {
  return request({
    headers: {
      'Content-Type': 'application/json',
      'x-acs-dingtalk-access-token': token
    },
    method: 'post',
    url: `${prefix1}/v1.0/workflow/processCentres/instances`,
    data
  });
}
/**
 * 更新审批实例状态
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */
export const updateProcessInstance = async (token, data) => {
  return request({
    headers: {
      'Content-Type': 'application/json',
      'x-acs-dingtalk-access-token': token
    },
    method: 'put',
    url: `${prefix1}/v1.0/workflow/processCentres/instances`,
    data
  });
}
/**
 * 创建待办任务
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */
export const createProcessTasks = async (token, data) => {
  return request({
    headers: {
      'Content-Type': 'application/json',
      'x-acs-dingtalk-access-token': token
    },
    method: 'post',
    url: `${prefix1}/v1.0/workflow/processCentres/tasks`,
    data
  });
}
/**
 * 更新待办任务
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */
export const updateProcessTasks = async (token, data) => {
  return request({
    headers: {
      'Content-Type': 'application/json',
      'x-acs-dingtalk-access-token': token
    },
    method: 'put',
    url: `${prefix1}/v1.0/workflow/processCentres/tasks`,
    data
  });
}
