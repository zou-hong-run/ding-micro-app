# 钉钉应用开发教程

## 地址

- 视频教程地址
  - [钉钉应用开发教程（持续更新）_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV13BqkYBEhS/?spm_id_from=333.999.0.0)
- 代码仓库
  - [zou-hong-run/ding-micro-app: 钉钉应用开发教程代码](https://github.com/zou-hong-run/ding-micro-app)

- [应用类型介绍 - 钉钉开放平台](https://open.dingtalk.com/document/orgapp/application-types)
- [钉钉应用开发平台](https://open-dev.dingtalk.com/fe/ai?hash=%23%2Fapp%2F6767323a-e4b9-4979-afc6-b985e18f8190%2Fh5#/app/6767323a-e4b9-4979-afc6-b985e18f8190/h5)
- [钉钉管理后台](https://oa.dingtalk.com/index.htm#/welcome)

## 为啥要学习钉钉开发

依托钉钉平台，使用钉钉提供的各种api能力，根据实际需要定制开发，企业应用

[能力全景图](https://open.dingtalk.com/document/ability/map)

能学到下面所有内容

## 认识应用类型

| **应用类型**   | **开发者**                         | **使用人员**                     | **支持的能力**                                           | **是否支持上架到钉钉应用广场**                               |
| -------------- | ---------------------------------- | -------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------ |
| 企业内部应用   | 企业内部开发者或委托的服务商开发者 | 安装了该应用的企业内部人员       | 小程序支持移动端支持PC端H5微应用支持移动端支持PC端机器人 | 否                                                           |
| 第三方企业应用 | 产品方案商的开发者                 | 购买开通该三方应用的企业内部人员 | 小程序支持移动端支持PC端H5微应用支持移动端支持PC端       | 是，需要满足上架要求，上架流程请参考[合作全流程指引](https://open.dingtalk.com/document/isvapp/isv-cooperation-guide#)。 |
| 第三方个人应用 | 产品方案商的开发者                 | 钉钉的个人用户                   | 小程序支持移动端支持PC端                                 | 否                                                           |

## 创建自己的组织

前提：没有加入任何组织

如果已经加入了组织，可以找组织管理员在[钉钉管理后台](https://oa.dingtalk.com/index.htm#/welcome)**分配权限**

可以找一个没有加入任何组织的账号，创建一个新组织，这样可以拥有所有权限。

### 开发者后台

[成为钉钉开发者 - 钉钉开放平台](https://open.dingtalk.com/document/orgapp/become-a-dingtalk-developer)

## 应用管理

[创建应用 - 钉钉开放平台](https://open.dingtalk.com/document/orgapp/create-orgapp)

- 创建应用
- 开发管理
- 权限管理
- 人员管理（仅限小程序）
- 监控中心
- 安全中心（仅限小程序）
- 版本管理与发布

## 钉钉设计开放

### 学习钉钉设计语言[DingDesign-颜色-设计语言](https://ding.design/#/cate/1/page/657?filter=design)

实现效果三端都要看一下，安卓，苹果，电脑（不同平台效果可能不一样，例如vant图标在安卓显示失效）

## 能力全景图

[钉钉开放平台](https://open.dingtalk.com/document/ability/map)

## 开发工具下载

### 后端API调试工具

### 前端API调试工具

### ！微应用调试工具

- 四端调试工具-网页版，不推荐
- IDE，不推荐
- RC版，开发版的钉钉客户端，推荐（f12可以调试）

### DinTalkDesignCLI

主要使用该脚手架打开h5本地模拟器

## 创建第一个应用（钉钉微应用）

### hello world

- 初始化git仓库
- 创建vue3+pinia-router项目(前端)+nodejs+express+自己封装mvc架构（后端）
  - 修改配置
- 创建钉钉应用
  - 发布
- 本地调试
  - 使用DinTalkDesignCli本地预览调试
- 初始化项目内容
  - 架构前端代码
  - 架构后端代码

### 前端API调试工具

[JSAPI Explorer (dingtalk.com)](https://open.dingtalk.com/tools/explorer/jsapi)

## API总览

后面学习的功能都会用到下面的api功能

### 服务端API

选学api

- 身份验证（免登）
- 获取访问凭证
- 通讯录管理
- 上下游组织（原合作空间）
- 上下级组织（原关联组织）
- 考勤
- 日志
- 日程
- 签到
- 公告
- 音视频
- 钉工牌
- 工作台
- 服务窗
- OA审批
- 即时通信IM
- 智能人事
- 智能填表
- 智能交互
- 组织大脑
- 待办任务
- 文档/文件
- 钉钉客联
- 互动卡片
- 应用管理
- 企业文化
- 专属开放
- 生态开放
- 智能硬件
- 行业开放
- HCM 主数据
- 宜搭应用开发
- 客户管理（官方CRM）
- Teambition 项目管理
- 钉钉快办
- Agoal
- 炼丹炉（模型服务）
- AI 助理

### 客户端API

选学api

- 基础API

  - 基础

    界面

    跳转

    多媒体

    缓存

    文件

    位置

    网络

    设备

    分享

    更新管理

- 协同

- 支付

- 文件

- 音视频

- 组织关系

- 专属开放

- 身份与免登

- 即时通讯IM

- 酷应用

## 事件订阅

接入Stream模式推送

钉钉事件订阅功能，是钉钉开放平台推出的一项服务。这项服务允许开发者在自己开发的应用程序中，实时接收到钉钉平台产生的各类重要通知。通过设置事件订阅，你的应用能够监听到钉钉中发生的诸如部门架构调整、员工签到、打卡等事件，并据此在你的应用中进行及时响应和处理。利用这一功能，你的企业应用将能够更深度地与钉钉平台集成，实现信息共享和业务协同。

- 操作指南
- 开发指南
- 开发参考
- 事件订阅总览
- 协同
- 办公
- 音视频
- 服务群
- AI 助理
- 组织关系
- 即时通讯IM
- 智能人事
- 客户管理
- 企业文化
- 应用管理
- 专属开放
- 行业开放

## 服务端API

- 身份验证（免登）
- 获取访问凭证
- 通讯录管理
- 上下游组织（原合作空间）
- 上下级组织（原关联组织）
- 考勤
- 日志
- 日程
- 签到
- 公告
- 音视频
- 钉工牌
- 工作台
- 服务窗
- OA审批
- 即时通信IM
- 智能人事
- 智能填表
- 智能交互
- 组织大脑
- 待办任务
- 文档/文件
- 钉钉客联
- 互动卡片
- 应用管理
- 企业文化
- 专属开放
- 生态开放
- 智能硬件
- 行业开放
- HCM 主数据
- 宜搭应用开发
- 客户管理（官方CRM）
- Teambition 项目管理
- 钉钉快办
- Agoal
- 炼丹炉（模型服务）
- AI 助理
- 附录

## 客户端API

- 基础API
- 协同
- 支付
- 文件
- 音视频
- 组织关系
- 专属开放
- 身份与免登
- 即时通讯IM
- 酷应用

## 授权，免登

无论是哪种应用，都必须接入钉钉免登，即在用户打开应用时可直接获取用户身份无需输入钉钉账号和密码。

### 获取微应用免登授权码

## 网页应用（H5微应用）

### 配置前端

#### JSAPI鉴权(调用钉钉客户端原生功能)

钉钉提供的JSAPI有很多是手机的基础能力，对这些JSAPI的调用不需要进行鉴权（**不需要进行dd.config**），只需要在**dd.ready**里调用。对于一些钉钉业务、安全相关的JSAPI的调用，需要先鉴权，然后再调用。

#### 页面事件监听

当页面进行某些特殊操作时，钉钉会产生回调，开发者可监控该操作，并处理开发者自己的业务逻辑。

回调事件监听需要在dd.ready的回调函数触发后，示例如下

```
dd.ready(function() {
  // 退到后台的事件监听(webview)
  document.addEventListener('pause', function(e) {
      e.preventDefault();
      console.log('事件：pause')
  }, false);

  // 页面被唤醒的事件监听(webview)
  document.addEventListener('resume', function(e) {
      e.preventDefault();
      console.log('事件：resume')
  }, false);


  //返回按钮点击的事件监听(android)
  document.addEventListener('backbutton', function(e) {
      e.preventDefault();
      dd.device.notification.alert({
          message: '哎呀，你不小心点到返回键啦!',
          title: '...警告...'
      });
  }, false);

 //双击标题的事件监听
  document.addEventListener('navTitle', function(e) {
      e.preventDefault();
      console.log('事件：navTitle')      
   },false);

 // 网络连接成功的事件监听
  document.addEventListener('online', function(e) {
      e.preventDefault();
      console.log('事件：online')
  }, false);

 // 网络连接断开的事件监听
  document.addEventListener('offline', function(e) {
      e.preventDefault();
      console.log('事件：offline')
  }, false);
});
```



### 配置后端

1. 登录[开发者后台](https://open-dev.dingtalk.com/#/)，单击目标应用，进入应用详情页。

2. 单击**开发配置** > **安全设置**，填写服务端出口 IP。

   **说明**

   服务端出口 IP：调用钉钉服务端 API 时的合法 IP 列表，如果不填写服务端出口 IP，调用服务端 API 时，会出现***访问ip不在白名单之中，request ip=\******\**\*.\**\*.\**\*.\**\**** ***appKey(dingxxx)\*** 的错误信息。

3. 实现免登。详情参考[企业内部应用免登](https://open.dingtalk.com/document/orgapp/enterprise-internal-application-logon-free)。

4. 申请接口调用权限。详情参考[添加接口调用权限](https://open.dingtalk.com/document/orgapp/add-api-permission)。

5. 选择合适的事件推送方式并完成接入。

   开发者对特定的事件进行订阅并接收相关的推送消息。通过事件订阅功能，开发者可以及时获取钉钉中发生的各种事件的通知。企业内部应用支持两种种方式接收钉钉推送的回调事件：HTTP 推送和 Stream 模式推送。详情参考 [HTTP 推送](https://open.dingtalk.com/document/orgapp/configure-http-push)和 [Stream 推送](https://open.dingtalk.com/document/orgapp/configure-stream-push)。

6. 调用服务端 API，进行业务集成。例如调用机器人接口。详情参考[如何调用服务端 API](https://open.dingtalk.com/document/orgapp/how-to-call-apis)。



## 酷应用

一种开放能力

把群聊沟通的逻辑，把聊天为主，变成做事为主

在群里就能事办了

基本场景不变，把干的事融入其中（通过各种组件）

### 快速新建任务

### 快速新建项目

## 机器人

**Webhook 机器人**

## 卡片

卡片推送

[概述 - 钉钉开放平台](https://open.dingtalk.com/document/resourcedownload/platform-building-overview)

## 连接器

应用与应用之间的连接

- 官方连接器：连接钉钉一方应用的连接器，如审批、机器人、通讯录等。
- 三方连接器：连接三方企业应用的连接器，如金蝶、用友、抖音、北森等。
- 自建连接器：当前企业自己创建的连接器，可以连接本企业内部系统。

连接器配合卡片

## AI

### AI助理

### 拟人操作（RPA）自动化

### AI卡片

#### 主动发送

#### 回复消息

#### AI发布网页

## 工作台

### 创建自定义工作台

## 小程序（自学）

## 实战项目

钉钉官方流程h5微应用扫码登录

实现自定义三方钉钉扫码登录

事件消息推送

## 钉钉连接器与事件订阅的区别与应用场景

在钉钉开放平台中，开发者可以使用多种工具和接口来扩展和集成自己的应用。其中，**钉钉连接器**和**事件订阅**是两种常见的功能，它们各自有不同的作用和使用场景。虽然它们都涉及与钉钉系统的交互，但在实现方式和适用场景上存在明显的区别。在这篇博客中，我们将深入分析这两者的异同，并帮助开发者更好地理解何时使用它们。

#### 1. 钉钉连接器

##### 1.1 什么是钉钉连接器？

钉钉连接器通常指与钉钉 API 的直接交互。它允许开发者通过调用钉钉提供的 API 来实现多种功能，如发送消息、获取组织信息、执行工作流等。开发者需要主动向钉钉平台发送请求，并等待钉钉平台的响应。

##### 1.2 钉钉连接器的应用场景

钉钉连接器适用于需要开发者主动与钉钉平台交互的场景。以下是几个典型的使用场景：

- **发送消息通知**：例如，当一个任务完成或需要提醒团队成员时，可以通过钉钉机器人向钉钉群组发送消息。
- **发起工作流审批**：如果你开发了一个自动化工作流系统，可以使用钉钉连接器发起审批请求。
- **查询信息**：例如，获取组织架构、员工信息、部门列表等，帮助系统自动化处理。

##### 1.3 钉钉连接器的使用示例

以下是一个使用钉钉连接器发送消息到钉钉群组的简单示例：

```
axios.post('https://oapi.dingtalk.com/robot/send?access_token=your_token', {
  msgtype: 'text',
  text: { content: 'Hello, DingTalk!' }
});
```

在这个示例中，开发者主动向钉钉 API 发送请求，请求钉钉发送一条文本消息到指定的群组。

#### 2. 钉钉事件订阅

##### 2.1 什么是钉钉事件订阅？

与钉钉连接器的主动调用不同，**事件订阅**是钉钉提供的一种机制，让开发者能够被动接收钉钉平台的事件通知。当某些特定事件发生时，钉钉平台会主动将相关信息推送到开发者指定的回调 URL（Webhook）。这种方式让开发者无需主动请求，系统会根据预先设定的事件类型自动推送数据。

##### 2.2 钉钉事件订阅的应用场景

钉钉事件订阅通常适用于开发者希望实时接收到钉钉平台上的某些行为或事件通知的场景。以下是一些典型的应用：

- **审批事件通知**：当钉钉中的某个审批流程通过或被拒绝时，钉钉会将审批结果推送到开发者的服务器，以便进行后续处理（例如记录、通知用户等）。
- **考勤打卡**：如果你的公司需要监控员工的打卡情况，钉钉事件订阅可以用来监听员工的打卡事件，并实时接收打卡数据。
- **群聊行为**：例如，当有用户加入或退出某个钉钉群组时，钉钉可以通过事件订阅将这一信息推送给开发者，方便进行后续管理。

##### 2.3 钉钉事件订阅的使用示例

假设你设置了一个事件订阅，用来监听审批通过事件，当某个审批流程被批准时，钉钉会将事件数据推送到开发者的回调地址。以下是一个简单的事件订阅回调处理代码示例：

```
app.post('/dingTalkEvent', (req, res) => {
  const event = req.body;
  console.log('Received DingTalk Event:', event);
  res.send('success');
});
```

在这个示例中，钉钉会在审批通过时，自动将相关事件数据发送到`/dingTalkEvent`的回调 URL。开发者可以根据事件信息进行后续操作，如自动通知相关人员，或者触发其他工作流程。

#### 3. 钉钉连接器与事件订阅的区别

尽管钉钉连接器和事件订阅都是钉钉开放平台的重要功能，它们在实现方式、应用场景和交互模式上有明显的区别：

| 特点         | 钉钉连接器                                   | 钉钉事件订阅                               |
| ------------ | -------------------------------------------- | ------------------------------------------ |
| **功能**     | 主动调用钉钉 API 实现功能                    | 被动接收钉钉推送的事件通知                 |
| **交互方式** | 开发者主动发起请求，钉钉平台响应请求         | 钉钉平台主动向开发者推送事件数据           |
| **应用场景** | 发送消息、获取信息、执行工作流等             | 监听事件（如审批、考勤打卡、消息等）       |
| **典型用途** | 发送消息通知、查询组织架构、发起工作流审批等 | 接收审批通过、消息发送、考勤打卡等事件通知 |

#### 4. 总结

钉钉连接器和钉钉事件订阅各自有着不同的应用场景和优势：

- **钉钉连接器**适合于开发者需要主动与钉钉进行交互的场景，如发送通知、发起审批、查询信息等。
- **钉钉事件订阅**则更适用于需要实时响应钉钉平台上发生的特定事件的场景，如审批通知、考勤打卡、群组行为等。

理解这两者的区别和使用方式，有助于开发者根据实际需求选择合适的集成方式，从而提高工作效率和系统自动化程度。通过合理结合钉钉连接器和事件订阅，开发者可以构建更高效、智能的企业应用。
