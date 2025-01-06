<script setup>
import { onMounted } from "vue";
import * as dingTalk from "dingtalk-jsapi";
// showToast("No need to import showToast");
const corpId = import.meta.env.VITE_APP_CORPID;
const handleClosePage = () => {
  dingTalk.closePage({
    success: () => {},
    fail: () => {},
    complete: () => {},
  });
};
const handleSetNavigationIcon = () => {
  try {
    dingTalk.setNavigationIcon({
      showIcon: true,
      iconIndex: 101,
      success: () => {},
      fail: () => {},
      complete: () => {},
    });
  } catch (error) {
    alert("不支持");
  }
};
const handleChooseImage = () => {
  try {
    dingTalk.biz.util.chooseImage({
      count: 9,
      secret: false,
      position: "back",
      sourceType: ["camera", "album"],
      success: (res) => {
        const { files, filePaths } = res;
      },
      fail: (error) => {
        console.log(error);
      },
      complete: () => {},
    });
  } catch (error) {
    alert("不支持");
  }
};

const handleGetClipboard = async () => {
  // try {
  //   // https||localhost
  //   const text = await navigator.clipboard.readText();
  //   console.log("Pasted content: ", text);
  // } catch (err) {
  //   console.error("Failed to read clipboard contents: ", err);
  // }
};
const handleShare = () => {
  dingTalk.share({
    url: "https://www.dingtalk.com",
    type: 0,
    image:
      "https://img.alicdn.com/imgextra/i1/O1CN01SNHEw41ysQFPN5Ql6_!!6000000006634-55-tps-176-31.svg",
    title: "钉钉官网",
    content: "钉钉官网",
    success: () => {},
    fail: () => {},
    complete: () => {},
  });
};
const handleChooseChat = () => {
  dingTalk.chooseChat({
    corpId: corpId,
    isAllowCreateGroup: true,
    filterNotOwnerGroup: true,
    success: (res) => {
      const { title, chatId, openConversationId } = res;
      console.log(title);
    },
    fail: () => {},
    complete: () => {},
  });
};

onMounted(() => {
  // document.addEventListener("paste", (event) => {
  //   const clipboardData = event.clipboardData || window.clipboardData;
  //   const pastedData = clipboardData.getData("Text");
  //   console.log("剪切板的内容是:", pastedData);
  // });
});
</script>

<template>
  <main>
    <van-button type="primary" @click="handleClosePage"
      >handleClosePage</van-button
    >
    <van-button type="success" @click="handleSetNavigationIcon"
      >setNavigationIcon(windows不支持)</van-button
    >
    <van-button type="default" @click="handleChooseImage"
      >handleChooseImage</van-button
    >
    <van-button type="danger" @click="handleGetClipboard"
      >获取剪切板内容</van-button
    >
    <van-button type="warning" @click="handleShare">share</van-button>
    <van-button type="warning" @click="handleChooseChat">chooseChat</van-button>
  </main>
</template>
