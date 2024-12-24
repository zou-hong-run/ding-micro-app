import config from "../datas/ding.config.json" with {type: 'json'}
import { sign } from "../utils/sign.js";
import { getRandomStr } from "../utils/sign.js";
import { getDingUserInfo } from '../api/index.js'
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
}

export default dingService;