// @ts-ignore
/* eslint-disable */
import request from '@/services';

/** 登录 后台登录 POST /admin/user/login */
export async function login(body: API.AdminLoginRequest, options?: { [key: string]: any }) {
  return request<{ code?: number; message?: string; data?: API.AdminLoginResponse }>(
    '/admin/user/login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 登出 后台退出登录 POST /admin/user/logout */
export async function logout(options?: { [key: string]: any }) {
  return request<{ code?: number; message?: string; data?: string }>('/admin/user/logout', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 个人中心用户详情 个人中心用户详情 POST /service/user/detail */
export async function webUserDetail(options?: { [key: string]: any }) {
  return request<{ code?: number; message?: string; data?: API.WebUserDetailResponse }>(
    '/service/user/detail',
    {
      method: 'POST',
      ...(options || {}),
    },
  );
}

/** 登录 前台登录 POST /service/user/login */
export async function WebLogin(body: API.AdminLoginRequest, options?: { [key: string]: any }) {
  return request<{ code?: number; message?: string; data?: API.WebUserLoginResponse }>(
    '/service/user/login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 登出 前台退出登录 POST /service/user/logout */
export async function webLogout(options?: { [key: string]: any }) {
  return request<{ code?: number; message?: string; data?: string }>('/service/user/logout', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 登录 前台登录 POST /service/user/reset_password */
export async function WebResetPasswordn(
  body: API.ResetPasswordRequest,
  options?: { [key: string]: any },
) {
  return request<{ code?: number; message?: string; data?: string }>(
    '/service/user/reset_password',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}
