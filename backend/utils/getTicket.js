import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
// 只读，不修改
import { jsapiTicket } from '../api/index.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// console.log(__filename, __dirname, '__filename,__dirname')

/**
 * 
 * @param {String} token 钉钉aceessToken 
 * @returns 
 */
export const getTicket = async (token) => {
  // 判断当前ticket是否存在，如果存在就获取当前的ticket，如果存在，但是过期了，就重新生成ticket，如果没有ticket，那也重新生成ticket
  // 获取当前的时间
  let currentTime = Date.now();
  // 获取本地的存放的accessticket
  let accessTicket = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../datas/ticket.json")));
  // 如果失效，重新请求
  if (accessTicket.jsapiTicket == '' || accessTicket.expireIn < currentTime) {
    console.log("ticket失效");
    // 获取新的ticket
    console.log("get remote: ticket");
    // try {
    let data = await jsapiTicket(token);
    accessTicket.jsapiTicket = data.jsapiTicket;
    // expires_in单位秒 5分钟 
    accessTicket.expireIn = Date.now() + (data.expireIn - 300) * 1000;
    fs.writeFileSync(path.resolve(__dirname, "../datas/ticket.json"), JSON.stringify(accessTicket));
    return accessTicket.jsapiTicket
    // } catch (error) {
    //   console.log(error.response.data,'getTicketToken error')
    // }
  } else {// 从本地获取
    console.log("get local: ticket");
    return accessTicket.jsapiTicket;
  }
}