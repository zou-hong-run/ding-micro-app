import request from '@/utils/request'
const prefix = "http://192.168.43.7:3000/dingding"
/**
 * 获取钉钉用户信息
 * @param {String} code 授权code
 * @returns 
 */
export const fetchDingUserInfo = async (code) => {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    url: `${prefix}/getUserInfo`,
    data: { code }
  });
}

export const jsSdkAuthorized = async (url) => {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'get',
    url: `${prefix}/jsSdkAuthorized`,
    params: {
      url
    }
  })
}

/**
 * 创建审批模板
 * @param {*} data 
 * @returns 
 */
export const createProcessTemplate = async (data) => {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    url: `${prefix}/createProcessTemplate`,
    data
  });
}
/**
 * 查询审批模板
 * @param {*} data 
 * @returns 
 */
export const findProcessTemplate = async (name) => {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'get',
    url: `${prefix}/findProcessTemplate`,
    params: {
      name
    }
  });
}
/**
 * 创建审批实例
 * @param {*} data 
 * @returns 
 */
export const createProcessInstance = async (data) => {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    url: `${prefix}/createProcessInstance`,
    data
  });
}
/**
 * 更新审批实例状态
 * @returns 
 */
export const updateProcessInstance = async (data) => {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    url: `${prefix}/updateProcessInstance`,
    data
  });
}
/**
 * 创建代办任务
 * @returns 
 */
export const createProcessTasks = async (data) => {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    url: `${prefix}/createProcessTasks`,
    data
  });
}
/**
 * 更新代办任务
 * @returns 
 */
export const updateProcessTasks = async (data) => {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    url: `${prefix}/updateProcessTasks`,
    data
  });
}