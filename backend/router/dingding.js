import { Router } from "express";
import { dingJsApiTicket, dingToken } from "../middle/index.js"
import dingController from "../controller/dingController.js";
let router = Router();
router.get("/", (req, res) => {
  res.send({
    code: 200,
    data: "你好钉钉"
  })
})

// jssdk鉴权的接口
router.get("/jsSdkAuthorized", dingJsApiTicket, dingController.jsSdkAuthroized)
// 获取钉钉用户信息
router.post("/getUserInfo", dingToken, dingController.getUserInfo)


export default router;