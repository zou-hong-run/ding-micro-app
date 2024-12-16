import * as dingtalk from 'dingtalk-jsapi'; // 此方式为整体加载，也可按需进行加载
import router from "./index";
import { useUserStore } from '@/stores/user';
import { getToken } from '@/utils/auth';
import { jsSdkAuthorized } from '@/api/index'
import { closeToast } from 'vant';
// ding dev web --targetH5Url http://192.168.78.17:5173 

let whiteList = ["/warning", "/404", "/405"];
// console.log(import.meta.env, 'import.meta.env')
router.beforeEach(async (to, from) => {
  const userStore = useUserStore();
  showLoadingToast({
    message: '加载中...',
    duration: 0, // 设置 duration 为 0 以保持显示，直到手动关闭
    forbidClick: true // 禁止点击
  });
  /* 路由发生变化修改页面title */
  document.title = to.meta.title || import.meta.env.VITE_APP_TITLE;
  // heyui.$Loading("数据加载中，请耐心等待！");
  // console.log(`当前钉钉环境:${dingtalk.env.platform}`);
  if (whiteList.includes(to.path)) {
    closeToast()
    return;
  }
  if (dingtalk.env.platform == "notInDingTalk") {
    // 不是钉钉环境 跳转到404
    closeToast()
    return { name: '404' };
  } else {
    // 配置js鉴权，让用户能够调用对应的钉钉原生api功能
    // dd.config 下的参数值，必须从服务端中获取，否则无法鉴权成功。
    let resJsSdkAuthorized = await jsSdkAuthorized(location.href.split('#')[0]);
    if (resJsSdkAuthorized.code == 200) {
      let { agentId, corpId, timeStamp, nonceStr, signature } = resJsSdkAuthorized.signatureObj;
      // console.log('signatureObj', agentId, corpId, timeStamp, nonceStr, signature);
      dingtalk.config({
        agentId, // 必填，微应用ID
        corpId, //必填，企业ID
        timeStamp, // 必填，生成签名的时间戳
        nonceStr, // 必填，自定义固定字符串。
        signature, // 必填，签名
        type: 0, //选填。0表示微应用的jsapi,1表示服务窗的jsapi；不填默认为0。该参数从dingtalk.js的0.8.3版本开始支持
        jsApiList: ['chooseChat', 'chooseImage', 'share'] // 必填，需要使用的jsapi列表，注意：不要带dd。
      });

      dingtalk.error(async (err) => {
        console.log(err, 'err')
        closeToast()
        await showDialog({
          title: '标题',
          message: 'dd error: ' + JSON.stringify(err),
          zIndex: 2000,
        });
      }); //该方法必须带上，用来捕获鉴权出现的异常信息，否则不方便排查出现的问题
    }
    // 钉钉配置加载完成后触发
    dingtalk.ready(async () => {
      try {

        // 获取token
        if (getToken()) {
          // console.log('有token', to)
          console.log(userStore.getDingUserInfo().result.name, 'useUserStore.getDingUserInfo()');
          closeToast(); // 确保在这里关闭 loading
          return;// 表示放行,路由正常跳转
        } else {
          // console.log('没有token', to)
          // 新版
          // let res = await dingtalk.getAuthCode({
          //   corpId: import.meta.env.VITE_APP_CORPID,
          // });
          // 老版本
          let res = await dingtalk.runtime.permission.requestAuthCode({
            corpId: import.meta.env.VITE_APP_CORPID,
          });
          let code = res.code;
          // 获取微应用免登授权码code
          // 获取钉钉用户信息
          await userStore.initDingUserInfo(code);
          // 信息获取完成后,重定向到原来的路由
          router.push({
            path: to.path,
            query: { ...to.query, _t: Date.now() }, // 通过添加时间戳参数避免路由相同
            replace: true,
          });
        }
      } catch (error) {
        // console.log(error, 'error')
        let message = error.message ? error.message : error.errorMessage
        closeToast()
        await showDialog({
          title: '标题',
          message: message,
          zIndex: 2000,
        });
        return router.push({ name: '404' })
      } finally {
        closeToast()
      }
    });


  }

});
router.afterEach((to, from) => {
  // heyui.$LoadingBar.success();
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
});
