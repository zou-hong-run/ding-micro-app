import dingService from '../service/dingService.js';
import ConstCode from '../utils/ConstCode.js';
import { signToken } from '../utils/auth.js'
const dingController = {
  /**
 * 
 * @param {import('express').Request} req 请求头对象
 * @param {import('express').Response} res 响应头对象
 */
  async jsSdkAuthroized(req, res) {
    let ticket = req[ConstCode.DING_ACCESS_TICKET];
    let url = req.query.url;
    let signatureObj = dingService.sign(ticket, url);
    res.send({
      code: 200,
      signatureObj
    })
  },
  // 获取用户信息
  async getUserInfo(req, res) {
    let { code } = req.body;
    let token = req[ConstCode.DING_ACCESS_TOKEN];
    try {
      let dingUserInfo = await dingService.getDingUserInfo(token, code);
      console.log(dingUserInfo);
      res.send({
        code: 200,
        data: {
          dingUserInfo,
          // 自己的token签名
          auth_token: signToken()
        }
      })
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
  // 创建修改审批模板 createProcessTemplate
  async createProcessTemplate(req, res) {
    let data = req.body;
    let token = req[ConstCode.DING_ACCESS_TOKEN];
    let resProcessCode = await dingService.createProcessTemplate(token, data);
    res.send({
      code: 200,
      data: resProcessCode
    })
  },
  // 查询审批模板 createProcessTemplate
  async findProcessTemplate(req, res) {
    let name = req.query.name;
    let token = req[ConstCode.DING_ACCESS_TOKEN];
    let resProcessCode = await dingService.findProcessTemplate(token, name);
    res.send({
      code: 200,
      data: resProcessCode
    })
  },
  // 创建审批实例 createProcessInstance
  async createProcessInstance(req, res) {
    let data = req.body;
    let token = req[ConstCode.DING_ACCESS_TOKEN];
    let resProcessInstanceId = await dingService.createProcessInstance(token, data);
    res.send({
      code: 200,
      data: resProcessInstanceId
    })
  },
  // 更新审批实例 updateProcessInstance
  async updateProcessInstance(req, res) {
    let data = req.body;
    let token = req[ConstCode.DING_ACCESS_TOKEN];
    let status = await dingService.updateProcessInstance(token, data);
    res.send({
      code: 200,
      data: status
    })
  },
  // 创建待办任务 createProcessTasks
  async createProcessTasks(req, res) {
    let data = req.body;
    let token = req[ConstCode.DING_ACCESS_TOKEN];
    let status = await dingService.createProcessTasks(token, data);
    res.send({
      code: 200,
      data: status
    })
  },
  // 更新待办任务 updateProcessTasks
  async updateProcessTasks(req, res) {
    let data = req.body;
    let token = req[ConstCode.DING_ACCESS_TOKEN];
    let status = await dingService.updateProcessTasks(token, data);
    res.send({
      code: 200,
      data: status
    })
  },
}

export default dingController;