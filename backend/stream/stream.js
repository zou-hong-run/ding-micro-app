import { DWClient } from 'dingtalk-stream-sdk-nodejs'
import config from '../datas/ding.config.json' with {type: 'json'}


export const initStream = () => {
  console.log("初始化stream");
  const client = new DWClient({
    clientId: config.AppKey,
    clientSecret: config.AppSecret
  });
  /**
   * @type {import('dingtalk-stream-sdk-nodejs').DWClientDownStream}
   */
  const onEventReceived = (event) => {
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
    if (event.headers?.eventType !== 'chat_update_title') {
      // ignore events not equals `chat_update_title`; 忽略`chat_update_title`之外的其他事件；
      // 该示例仅演示 chat_update_title 类型的事件订阅；
      //  stream模式下，服务端推送消息到client后，会监听client响应，如果消息长时间未响应会在一定时间内(60s)重试推消息，可以通过此方法返回消息响应，避免多次接收服务端消息。
      // 机器人topic，可以通过socketCallBackResponse方法返回消息响应
      client.send(res.headers.messageId, { status: EventAck.SUCCESS })
      return { status: EventAck.SUCCESS };
    }
    //

    return { status: EventAck.SUCCESS, message: 'OK' }; // message 属性可以是任意字符串；

  }
  client.registerCallbackListener('/v1.0/im/bot/messages/get', async (res) => {
    // 注册机器人回调事件
    console.log("收到消息");
    const { messageId } = res.headers;
    const { text, senderStaffId, sessionWebhook } = JSON.parse(res.data);
  })
  client.registerAllEventListener(onEventReceived)

    .connect();
}