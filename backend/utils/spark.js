import config from '../datas/spark.json' with {type: "json"};
import CryptoJs from 'crypto-js'
import { Buffer } from 'buffer'
import WebSocket from 'ws'
/**
 * 使用算法签名
 * @param {*} origin 
 * @param {*} secret 
 * @returns 
 */
const signatureToHmacSHA256ToBase64 = (origin, secret) => {
  let signatureSha = CryptoJs.HmacSHA256(origin, secret);
  let signature = CryptoJs.enc.Base64.stringify(signatureSha);
  return signature
}
// 鉴权url地址
const getWebsocketUrl = () => {
  const hostUrl = config.spark_hosturl;
  const host = new URL(hostUrl).host;
  const pathname = new URL(hostUrl).pathname;
  const apiKey = config.spark_apikey;
  const apiSecret = config.spark_apisecret;
  let apiKeyName = "api_key";
  let date = new Date().toGMTString();
  let algorithm = "hmac-sha256"
  let headers = "host date request-line";
  // let signatureOrigin = `host: ${host}\ndate: ${date}\nGET /v1.1/chat HTTP/1.1`;
  let signatureOrigin = `host: ${host}\ndate: ${date}\nGET ${pathname} HTTP/1.1`;
  let signature = signatureToHmacSHA256ToBase64(signatureOrigin, apiSecret)
  let authorizationOrigin = `${apiKeyName}="${apiKey}", algorithm="${algorithm}", headers="${headers}", signature="${signature}"`;
  let authorization = Buffer.from(authorizationOrigin, 'utf-8').toString("base64");
  // 将空格编码
  let url = `${hostUrl}?authorization=${authorization}&date=${encodeURI(date)}&host=${host}`;
  return url
}
/**
 *  获取参数
 * @param {Array} textList [
       { "role": "user", "content": "你是谁" }, //# 用户的历史问题
       { "role": "assistant", "content": "我是AI助手" },  //# AI的历史回答结果
       // ....... 省略的历史对话
       { "role": "user", "content": inputVal },  //# 最新的一条问题，如无需上下文，可只传最新一条问题
   ]
 * @param {*} userId 
 * @returns 
 */
export const getParams = (textList, userId) => {
  let params = {
    "header": {
      "app_id": config.spark_appid,
      "uid": userId
    },
    "parameter": {
      "chat": {
        "domain": config.spark_domain,
        "temperature": 0.5,
        "max_tokens": 2048,
      }
    },
    "payload": {
      "message": {
        // 如果想获取结合上下文的回答，需要开发者每次将历史问答信息一起传给服务端，如下示例
        // 注意：text里面的所有content内容加一起的tokens需要控制在8192以内，开发者如有较长对话需求，需要适当裁剪历史信息
        "text": textList,
        //   [
        //     { "role": "user", "content": "你是谁" }, //# 用户的历史问题
        //     { "role": "assistant", "content": "我是AI助手" },  //# AI的历史回答结果
        //     // ....... 省略的历史对话
        //     { "role": "user", "content": inputVal },  //# 最新的一条问题，如无需上下文，可只传最新一条问题
        // ]
      }
    }
  }
  return params;
}
// 每次聊天都要重新建立连接
export const getConnect = async () => {
  const url = getWebsocketUrl();
  const ws = new WebSocket(url);
  await new Promise((resolve, reject) => {
    ws.on('open', resolve);
    ws.on('error', reject);
  });
  return ws;
}