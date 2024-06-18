import { LOGIN_PATH, TOKEN } from '@/constant';
import { webLogout } from '@/services/front/yonghuguanli';
import { useRequest } from 'ahooks';
import { notification } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { history } from 'umi';

export default function useAuth() {
  const [token, setToken] = useState<string | undefined>();
  const [userInfo, setUserInfo] = useState<
    API.WebUserDetailResponse | undefined
  >();

  // 登录设置信息
  const setLoginInfo = useCallback((res?: API.AdminLoginResponse) => {
    setToken(res?.token ?? '');
    setUserInfo(res?.user);
    sessionStorage.setItem(TOKEN, res?.token ?? '');
    sessionStorage.setItem('userInfo', JSON.stringify(res));
  }, []);

  const { loading: logoutLoading, runAsync: runLogoutAsync } = useRequest(
    webLogout,
    {
      manual: true,
    },
  );

  const clearLoginInfo = useCallback(() => {
    setToken(undefined);
    setUserInfo(undefined);
    sessionStorage.clear();
    history.push(LOGIN_PATH);
  }, []);

  // 退出登录
  const handleLogout = useCallback(() => {
    runLogoutAsync().then(() => {
      notification.success({ message: '退出登录' });
      clearLoginInfo();
    });
  }, [clearLoginInfo, runLogoutAsync]);

  // 更新 token 和 userInfo
  useEffect(() => {
    if (sessionStorage.getItem('userInfo')) {
      const userInfo = JSON.parse(sessionStorage.getItem('userInfo') || '');
      userInfo && setUserInfo(userInfo.user);
    }
    if (sessionStorage.getItem('token')) {
      const token = sessionStorage.getItem('token') || '';
      token && setToken(token);
    }
  }, []);

  return {
    token,
    setToken,
    userInfo,
    setUserInfo,
    setLoginInfo,
    clearLoginInfo,
    logoutLoading,
    handleLogout,
  };
}
