import { notification } from 'antd';
import axios from 'axios';
import { history } from 'umi';
import { LOGIN_PATH, TOKEN } from '../constant';

declare const requestHost: string;

// api接口前缀
// export const API_PREFIX = '/api';

// 创建extend实例，配置默认参数
const service = axios.create({
  baseURL: requestHost,
  timeout: 600000, // 超时
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
service.interceptors.request.use((config: any) => {
  config.headers = {
    ...config.headers,
    Authorization: `${sessionStorage.getItem(TOKEN)}`,
    Accept: config.headers?.Accept ?? 'application/json',
  };
  return config;
}, errorHandler);

// 响应拦截器
service.interceptors.response.use((response) => {
  // 当status不是200或code不为0，抛出错误
  if (response.data?.code !== 0 || response.status !== 200) {
    notification.error({ message: response.data?.message ?? '出错了' });
    if (response.data.code === 10001) {
      sessionStorage.clear();
      history.replace(LOGIN_PATH);
    }
    return Promise.reject(response.data);
  }
  // 只有成功了才返回data里的数据
  return response.data;
}, errorHandler);

// 统一错误处理
function errorHandler(error: any) {
  // TODO 重新登录
  if (error.response?.data?.errorCode === 401) {
    notification.error({ message: '请重新登录' });
    sessionStorage.clear();
    history.replace(LOGIN_PATH);
  } else {
    const errorInfo = error?.response?.data?.errorMessage || '出错了';
    notification.error({ message: errorInfo });
  }
  return Promise.reject(error);
}

export default service;
