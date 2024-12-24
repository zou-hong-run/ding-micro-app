
import fs from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'

import config from '../datas/ding.config.json' with {type: "json"};
import { getAccessToken } from '../api/index.js';


const appKey = config.AppKey;
const appSecret = config.AppSecret;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * 获取钉钉accessToken
 */
export const getToken = async () => {
  let currentTime = Date.now();
  let accessTokenJSON = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../datas/token.json")));
  if (accessTokenJSON.accessToken == '' || accessTokenJSON.expireIn < currentTime) {
    // 过期了 需要获取新的accessToken
    console.log("过期了 需要获取新的accessToken");
    let data = await getAccessToken(appKey, appSecret);
    // console.log(data);
    accessTokenJSON.accessToken = data.accessToken;//1:55
    // accessTokenJSON.expireIn = Date.now() +(7200 - 300)*1000;// 单位是毫秒
    accessTokenJSON.expireIn = Date.now() + (data.expireIn - 300) * 1000;// 单位是毫秒
    // console.log(accessTokenJSON);
    fs.writeFileSync(path.resolve(__dirname, "../datas/token.json"), JSON.stringify(accessTokenJSON));
    return accessTokenJSON.accessToken;
  } else {
    console.log("没有过期，从本地获取accessToken");
    return accessTokenJSON.accessToken;
  }
}