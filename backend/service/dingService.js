import config from "../datas/ding.config.json" with {type: 'json'}
import { sign } from "../utils/sign.js";
import { getRandomStr } from "../utils/sign.js";
import { getDingUserInfo, createProcessTemplate, findProcessTemplate, createProcessInstance, updateProcessInstance, createProcessTasks, updateProcessTasks } from '../api/index.js';

const dingService = {
  sign(ticket, url) {
    let nonceStr = getRandomStr(16);
    let agentId = config.AgentId;
    let corpId = config.CorpId;
    let timeStamp = Date.now();
    let signature = sign(ticket, nonceStr, timeStamp, url);
    return {
      agentId,
      corpId,
      timeStamp,
      nonceStr,
      signature
    }
  },
  async getDingUserInfo(token, code) {
    let userInfo = await getDingUserInfo(token, code);
    return userInfo;
  },

  async createProcessTemplate(token, data) {
    let res = await createProcessTemplate(token, data);
    return res;
  },
  async findProcessTemplate(token, name) {
    let res = await findProcessTemplate(token, name);
    return res;
  },
  async createProcessInstance(token, data) {
    let res = await createProcessInstance(token, data);
    return res;
  },
  async updateProcessInstance(token, data) {
    let res = await updateProcessInstance(token, data);
    return res;
  },
  async createProcessTasks(token, data) {
    let res = await createProcessTasks(token, data);
    return res;
  },
  async updateProcessTasks(token, data) {
    let res = await updateProcessTasks(token, data);
    return res;
  },
}

export default dingService;