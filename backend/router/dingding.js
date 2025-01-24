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

// 创建或更新审批模板
router.post("/createProcessTemplate", dingToken, dingController.createProcessTemplate)
// 查询审批模板
router.get("/findProcessTemplate", dingToken, dingController.findProcessTemplate)
// 创建审批实例
router.post("/createProcessInstance", dingToken, dingController.createProcessInstance)
// 更新审批实例
router.post("/updateProcessInstance", dingToken, dingController.updateProcessInstance)
// 创建待办任务
router.post("/createProcessTasks", dingToken, dingController.createProcessTasks)
// 更新待办任务
router.post("/updateProcessTasks", dingToken, dingController.updateProcessTasks)
export default router;
