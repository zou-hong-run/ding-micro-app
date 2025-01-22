import { DWClient, EventAck, TOPIC_CARD } from 'dingtalk-stream-sdk-nodejs'
import config from '../datas/ding.config.json' with {type: 'json'}
import https from 'https'
import { getToken } from '../utils/getToken.js'
import axios from 'axios'
const convertJSONValuesToString = (obj) => {
  const newObj = {};
  for (const key in obj) {
    const value = obj[key];
    if (obj.hasOwnProperty(key) && value != null) {
      if (typeof value === "string") {
        newObj[key] = value;
      } else {
        newObj[key] = JSON.stringify(value);
      }
    }
  }
  return newObj;
};
export const initStream = () => {
  console.log("初始化stream");
  const client = new DWClient({
    clientId: config.AppKey,
    clientSecret: config.AppSecret
  });
  /**
   * @type {import('dingtalk-stream-sdk-nodejs').DWClientDownStream}
   */
  const onEventReceived = async (event) => {
    // console.log(event);
    /**
     * {
        specVersion: '1.0',
        type: 'EVENT',
        headers: {
          appId: '2fa441f2-7db9-4218-ae16-1085c429276c',
          connectionId: 'c80f6eab-a720-11ef-b667-2eec6d765375',
          contentType: 'application/json',
          eventBornTime: '1732094488746',事件生成时间。
          eventCorpId: 'ding7682c2b6f0d018edee0f45d8e4f7c288',事件所属的corpId。
          eventId: '2902c41c72644c3b8d44c1c1a3747e96',事件的唯一Id。
          eventType: 'chat_update_title',事件类型。
          eventUnifiedAppId: '2fa441f2-7db9-4218-ae16-1085c429276c',统一应用身份Id
          messageId: '213db029_bbf_1929919228d_3c4cb99',
          time: '1732094488844',
          topic: '*'
        },
        data: '{
          "timeStamp":1732094488742,
          "eventId":"2902c41c72644c3b8d44c1c1a3747e96",
          "chatId":"chatdce7caafccaa941d870e82ee9c97b2eb",会话的ID。
          "operatorUnionId":"YMXWtt2IraiPot3q8IdDSbQiEiE",操作人员的UnionId。操作人员的UnionId。
          "title":"red润改变世界1",已经更新的新的群标题。
          "openConversationId":"cid9fmNLu/etdr0T7FmkCT+iA==",群ID。
          "operator":"02396524522436637117"	操作人员的userid。
        }'
      } 
     * 
     */
    const now = new Date();
    console.log(`received event, delay=${now.getTime() - parseInt(event.headers?.eventBornTime || '0')}ms`)
    if (event.headers?.eventType == 'chat_update_title') {
      // ignore events not equals `chat_update_title`; 忽略`chat_update_title`之外的其他事件；
      // 该示例仅演示 chat_update_title 类型的事件订阅；
      //  stream模式下，服务端推送消息到client后，会监听client响应，如果消息长时间未响应会在一定时间内(60s)重试推消息，可以通过此方法返回消息响应，避免多次接收服务端消息。
      // 机器人topic，可以通过socketCallBackResponse方法返回消息响应

      let openConversationId = "cid9fmNLu/etdr0T7FmkCT+iA=="
      let robotCode = "dingi91dw0hmpvygakr8"
      let token = await getToken();

      let res = await axios({
        headers: {
          'Content-Type': 'application/json',
          "x-acs-dingtalk-access-token": token
        },
        method: 'post',
        url: `https://api.dingtalk.com/v1.0/robot/groupMessages/send`,
        data: {
          msgParam: JSON.stringify({ content: "你好呀" }),
          msgKey: "sampleText",
          openConversationId,
          robotCode,
        }
      });
      client.send(res.headers?.messageId, { status: EventAck.SUCCESS })
      return { status: EventAck.SUCCESS };
    }
    if (event)

      return { status: EventAck.SUCCESS, message: 'OK' }; // message 属性可以是任意字符串；

  }
  client.registerCallbackListener('/v1.0/im/bot/messages/get', async (res) => {
    // 注册机器人回调事件
    // console.log("收到消息", res);
    const { messageId } = res.headers;
    const { text, senderStaffId, conversationId, robotCode, sessionWebhook } = JSON.parse(res.data);
    // 回复消息
    // {

    //   const data = JSON.stringify({
    //     'msgtype': 'text',
    //     'text': {
    //       'content': '我是一段文字+123456789',
    //     },
    //     'at': {
    //       'atUserIds': [senderStaffId]
    //     }
    //   })
    //   const options = {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     }
    //   }
    //   const req = https.request(sessionWebhook, options, (res) => {
    //     console.log(`状态码: ${res.statusCode}`)
    //     res.on('data', (d) => {
    //       console.log('data:', d)
    //     })
    //   });
    //   req.on('error', (error) => {
    //     console.error(error);
    //   })
    //   req.write(data);
    //   req.end();
    //   return { status: EventAck.SUCCESS, message: 'OK' }; // message 属性可以是任意字符串；
    // }
    console.log(text, "收到消息");
    if (text.content.trim() == 'send') {
      // 发送卡片
      const cardTemplateId = "88a9c551-c879-4389-8d75-d206aa1720fc.schema";
      const outTrackId = Math.random().toString(16).slice(2, 14);
      const callbackType = "STREAM";
      const openSpaceId = `dtv1.card//IM_GROUP.${conversationId};`
      const supportForward = true;
      const accessToken = await getToken();
      const data = {
        cardTemplateId,
        outTrackId,
        callbackType,
        openSpaceId,
        imGroupOpenDeliverModel: {
          robotCode,
        },
        imGroupOpenSpaceModel: {
          supportForward,
        },
        imRobotOpenSpaceModel: {
          supportForward,
        },
        cardData: {
          cardParamMap: convertJSONValuesToString({
            createTime: new Date(),
            title: "朱小志提交的财务报销",
            type: "差旅费",
            amount: "1000元",
            reason: "出差费用",
            lastMessage: "审批",
            status: "审批中",
          })
        },
        privateData: convertJSONValuesToString({
          "02396524522436637117": {
            "cardParamMap": {
              title: "red润"
            }
          }

        })
      };
      try {
        let result = await axios({
          headers: {
            'Content-Type': 'application/json',
            "x-acs-dingtalk-access-token": accessToken
          },
          method: 'post',
          url: `https://api.dingtalk.com/v1.0/card/instances/createAndDeliver`,
          data
        });
        if (result?.data) {
          console.log(result.data.result, 'result.data')
        }
      } catch (error) {
        console.log(error.response.data, 'error.response.data')
      }
      client.send(messageId, { status: EventAck.SUCCESS })
    }
  })
  client.registerAllEventListener(onEventReceived)
  client.registerCallbackListener(TOPIC_CARD, async (event) => {
    const { messageId } = event.headers;
    // e5481d6d0c3b
    const message = JSON.parse(event.data);
    console.log("card callback message: ", message);
    const cardPrivateData = JSON.parse(message.content).cardPrivateData;
    const params = cardPrivateData.params;
    const action = params.action;
    const outTrackId = message.outTrackId;
    const accessToken = await getToken();
    const data = {
      outTrackId,
      cardData: {
        cardParamMap: convertJSONValuesToString({
          createTime: new Date(),
          title: "邹红润提交的财务报销",
          type: "差旅费",
          amount: "10000元",
          reason: "出差费用",
          lastMessage: "审批",
          status: action
        })
      },
      privateData: convertJSONValuesToString({
        "02396524522436637117": {
          "cardParamMap": {
            title: "red润123456789"
          }
        }

      }),
      cardUpdateOptions: convertJSONValuesToString({
        updateCardDataByKey: false,
        updatePrivateDataByKey: false
      }),
    };
    try {
      let result = await axios({
        headers: {
          'Content-Type': 'application/json',
          "x-acs-dingtalk-access-token": accessToken
        },
        method: 'put',//!!!!!!!!!!
        url: `https://api.dingtalk.com/v1.0/card/instances`,
        data
      });
      if (result?.data) {
        console.log(result.data.result, 'result.data')
      }
    } catch (error) {
      console.log(error.response.data, 'error.response.data')
    }
    client.send(messageId, EventAck.SUCCESS);
  })
    .connect();
}