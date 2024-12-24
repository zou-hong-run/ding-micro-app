import { getToken } from '../utils/getToken.js'
import { getTicket } from '../utils/getTicket.js'
import ConstCode from '../utils/ConstCode.js';

/**
 * 中间件：钉钉access token注入
 * @param {import('express').Request} req - 请求对象
 * @param {import('express').Response} res - 响应对象
 * @param {import('express').NextFunction} next - 下一步中间件函数
 */
export const dingToken = async (req, res, next) => {
  try {
    // 获取 access_token
    let token = await getToken();
    // 将 token 注入到请求对象中
    req[ConstCode.DING_ACCESS_TOKEN] = token;
    // 继续执行下一个中间件
    next();
  } catch (error) {
    // 错误处理
    console.error('Error getting DingTalk access token:', error);
    res.status(500).send('Failed to get DingTalk access token');
  }
};
/**
 * 
 * @param {import('express').Request} req 请求头对象
 * @param {import('express').Response} res 响应头对象
 * @param {import("express").NextFunction} next 放行函数
 */
export const dingJsApiTicket = async (req, res, next) => {
  try {
    let token = await getToken();
    if (!token) {
      return res.status(400).send("请先获取accessToken")
    }
    let ticket = await getTicket(token);
    req[ConstCode.DING_ACCESS_TICKET] = ticket;
    next()
  } catch (error) {

  }
}