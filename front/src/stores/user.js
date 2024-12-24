import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { fetchDingUserInfo } from '@/api'
import { setDingUserInfo, getDingUserInfo as getUserInfo, setToken } from '@/utils/auth'
export const useUserStore = defineStore("user", () => {
  const dingUserInfo = ref(null);
  const initDingUserinfo = async (code) => {
    let res = await fetchDingUserInfo(code);
    if (res.code == 200) {
      let info = res.data;
      dingUserInfo.value = info.dingUserInfo;
      setToken(info.auth_token);
      setDingUserInfo(info.dingUserInfo);
      return true
    }
    return false;
  }
  const getDingUserInfo = (url) => {
    return dingUserInfo.value ? dingUserInfo.value : getUserInfo()
  }
  return {
    dingUserInfo,
    initDingUserinfo,
    getDingUserInfo
  }
})