
import axios from "axios";

// 创建 axios 实例并配置默认值
const axiosInstance = axios.create({
  baseURL: '/',  // 设置默认的基础 URL
  timeout: 5000,  // 设置请求超时时间
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  config => {
    // 你可以在请求发送之前做一些操作，比如添加认证 token
    // console.log('Request:', config);
    return config;
  },
  error => {
    // 请求出错时的处理
    return Promise.reject(error);
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  response => {
    // 你可以在这里处理响应数据，比如进行统一的响应格式处理
    // console.log('Response:', response);
    return response.data;  // 统一返回响应数据，避免每个地方都写 response.data
  },
  error => {
    // 统一处理错误
    if (error.response) {
      // 请求已发出，但服务器响应了状态码
      console.error('Error Response:', error.response);
    } else if (error.request) {
      // 请求已发出，但未收到响应
      console.error('Error Request:', error.request);
    } else {
      // 其他错误
      console.error('Error Message:', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
