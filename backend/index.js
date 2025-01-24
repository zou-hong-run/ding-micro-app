import express from 'express';
import cors from 'cors'
import { getLocalIP } from "./utils/redrun.js"
import dingdingRouter from './router/dingding.js'
import axios from 'axios';
// import famous_words from './datas/famous_words.json'
// import famous_words from './datas/famous_words.json' assert {type: "json"}
import famous_words from "./datas/famous_words.json" with { type: "json" };
import { initStream } from './stream/stream.js';
import { getToken } from './utils/getToken.js'
const port = 3000;
initStream()
const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static("./public"))
app.use("/dingding", dingdingRouter)
// app.use("/wechat",xxxx)
app.listen(port, () => {
  const words = famous_words[Math.floor(Math.random() * famous_words.length)];
  console.log(` running：http://${getLocalIP()}:${port} 🥬`)
  console.log(`🍵 ${words} 🥕`)
})

const test = async () => {
  try {
    const sessionWebhook = "https://oapi.dingtalk.com/robot/send?access_token=45fafdd4c8fadc8e010b1dddc91c80df1dcd81e67ec4d15aecec5da5ee6d51fb"
    const accessToken = await getToken();
    const userId = ["02396524522436637117"]
    const body = {
      at: {
        atUserIds: userId,
        isAtAll: false,
      },
      text: {
        content:
          "（🥕🥕🥕🥕🥕🥕）123456",
      },
      msgtype: "text",
    };

    const result = await axios({
      url: sessionWebhook,
      method: "POST",
      responseType: "json",
      data: body,
      headers: {
        "x-acs-dingtalk-access-token": accessToken,
      },
    });
    console.log(result.data, 'result.data')
  } catch (error) {
    console.log(error.response, 'error.data')
  }
}

// 获取到下一个整点的时间间隔（单位：毫秒）
function getTimeToNextHour() {
  const now = new Date();
  const nextHour = new Date(now);
  nextHour.setHours(now.getHours() + 1); // 设置为下一个小时
  nextHour.setMinutes(0); // 设置分钟为 0
  nextHour.setSeconds(0); // 设置秒为 0
  nextHour.setMilliseconds(0); // 设置毫秒为 0
  return nextHour - now; // 返回当前时间到下一个整点的毫秒数
}
// 封装定时触发功能
function scheduleHourlyTrigger() {
  // 计算当前时间距离下一个整点的间隔
  const timeToNextHour = getTimeToNextHour();

  // 设置一个 setTimeout，在下一个整点时触发
  setTimeout(() => {
    test(); // 触发一次

    // 设置 setInterval，每小时触发一次
    setInterval(test, 60 * 60 * 1000); // 每小时触发一次（60分钟 * 60秒 * 1000毫秒）
  }, timeToNextHour); // 等待到下一个整点时触发
}
// 启动定时任务
scheduleHourlyTrigger();