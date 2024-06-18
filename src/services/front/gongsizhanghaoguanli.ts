// @ts-ignore
/* eslint-disable */
import request from '@/services';

/** 公司账号禁用 公司和管理员登陆账号禁用 POST /admin/company/close */
export async function companyClose(body: API.CompanyId, options?: { [key: string]: any }) {
  return request<{ code?: number; message?: string; data?: string }>('/admin/company/close', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 公司账号创建 创建公司和管理员登陆账号 POST /admin/company/create */
export async function companyCreate(body: API.CompanyRequest, options?: { [key: string]: any }) {
  return request<{ code?: number; message?: string; data?: string }>('/admin/company/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 公司账号每日传输明细 公司账号每日传输明细 POST /admin/company/daily_post */
export async function companyDailyPost(
  body: {
    log_type?: number;
    page?: number;
    page_size?: number;
    company_id?: number;
  },
  options?: { [key: string]: any },
) {
  return request<{ code?: number; message?: string; data?: API.PlanDailyResponse }>(
    '/admin/company/daily_post',
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

/** 公司账号详情 公司和管理员登陆账号详情 POST /admin/company/detail */
export async function companyDetail(body: API.CompanyId, options?: { [key: string]: any }) {
  return request<{ code?: number; message?: string; data?: API.CompanyDetailResponse }>(
    '/admin/company/detail',
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

/** 公司账号列表 公司账号列表 POST /admin/company/list */
export async function companyList(body: API.CompanyListRequest, options?: { [key: string]: any }) {
  return request<{ code?: number; message?: string; data?: API.CompanyListResponse }>(
    '/admin/company/list',
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

/** 公司账号开启 公司和管理员登陆账号开启 POST /admin/company/open */
export async function companyOpen(body: API.CompanyId, options?: { [key: string]: any }) {
  return request<{ code?: number; message?: string; data?: string }>('/admin/company/open', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 公司账号付款记录创建 公司付款记录创建 POST /admin/company/pay_record_create */
export async function companyPayRecordCreate(
  body: API.PayRecord,
  options?: { [key: string]: any },
) {
  return request<{ code?: number; message?: string; data?: string }>(
    '/admin/company/pay_record_create',
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

/** 公司账号付款记录删除 公司账号付款记录删除 POST /admin/company/pay_record_delete */
export async function companyPayRecordDelete(
  body: {
    id?: number;
    company_id?: number;
  },
  options?: { [key: string]: any },
) {
  return request<{ code?: number; message?: string; data?: string }>(
    '/admin/company/pay_record_delete',
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

/** 公司账号付款记录 公司付款记录 POST /admin/company/pay_record_list */
export async function companyPayRecordList(
  body: API.PayRecordListRequest,
  options?: { [key: string]: any },
) {
  return request<{ code?: number; message?: string; data?: API.PayRecordListResponse }>(
    '/admin/company/pay_record_list',
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

/** 公司账号付款记录更新 公司账号付款记录更新 POST /admin/company/pay_record_update */
export async function companyPayRecordUpdate(
  body: API.PayRecord,
  options?: { [key: string]: any },
) {
  return request<{ code?: number; message?: string; data?: string }>(
    '/admin/company/pay_record_update',
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

/** 公司账号重置密码 公司账号重置密码 POST /admin/company/reset_password */
export async function companyResetPassword(
  body: {
    company_id?: number;
  },
  options?: { [key: string]: any },
) {
  return request<{ code?: number; message?: string; data?: Record<string, any> }>(
    '/admin/company/reset_password',
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

/** 公司账号编辑 编辑公司和管理员登陆账号 POST /admin/company/update */
export async function companyUpdate(
  body: API.CompanyUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<{ code?: number; message?: string; data?: string }>('/admin/company/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
