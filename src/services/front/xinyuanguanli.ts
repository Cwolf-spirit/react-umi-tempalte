// @ts-ignore
/* eslint-disable */
import request from '@/services';

/** 信源明细 信源明细 目前供方案日志使用 POST /admin/direct/detail_list */
export async function adminDirectDetailList(
  body: {
    /** page */
    page?: number;
    /** page_size */
    page_size?: number;
    /** platform */
    platform?: string;
    /** nickname */
    nickname?: string;
    /** user_id */
    user_id?: string;
    /** main_domain */
    main_domain?: string;
    /** direct_id */
    direct_id?: number;
  },
  options?: { [key: string]: any },
) {
  return request<{ code?: number; message?: string; data?: API.DirectDetailListResponse }>(
    '/admin/direct/detail_list',
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

/** 全部信源组 全部信源组 目前供方案日志使用 POST /admin/direct/total_list */
export async function adminDirectTotalList(
  body: {
    /** company_id */
    company_id: number;
  },
  options?: { [key: string]: any },
) {
  return request<{ code?: number; message?: string; data?: API.OneDirect[] }>(
    '/admin/direct/total_list',
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

/** 全平台 全平台 供查询信源时使用,包含部分二级平台 POST /service/direct/all_platform */
export async function directAllPlatform(options?: { [key: string]: any }) {
  return request<{ code?: number; message?: string; data?: Record<string, any> }>(
    '/service/direct/all_platform',
    {
      method: 'POST',
      ...(options || {}),
    },
  );
}

/** 批量添加信源 批量添加信源明细 POST /service/direct/batch_create_detail */
export async function directBatchCreateDetail(
  body: API.BatchCreateDirectDetailRequest,
  options?: { [key: string]: any },
) {
  return request<{ code?: number; message?: string; data?: API.BatchCreateDirectResponse }>(
    '/service/direct/batch_create_detail',
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

/** 批量删除信源 批量删除信源明细 POST /service/direct/batch_delete_detail */
export async function directBatchDeleteDetail(
  body: API.BatchDeleteRequest,
  options?: { [key: string]: any },
) {
  return request<{ code?: number; message?: string; data?: Record<string, any> }>(
    '/service/direct/batch_delete_detail',
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

/** 创建信源组 创建信源组 POST /service/direct/create */
export async function directCreate(body: API.OneDirect, options?: { [key: string]: any }) {
  return request<{ code?: number; message?: string; data?: string }>('/service/direct/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除信源组 删除信源组 POST /service/direct/delete */
export async function directDelete(
  body: {
    /** The unique identifier of the direct item for the request. */
    direct_id?: number;
  },
  options?: { [key: string]: any },
) {
  return request<{ code?: number; message?: string; data?: string }>('/service/direct/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 信源明细 信源明细 POST /service/direct/detail_list */
export async function directDetailList(
  body: {
    /** page */
    page?: number;
    /** page_size */
    page_size?: number;
    /** platform */
    platform?: string;
    /** nickname */
    nickname?: string;
    /** user_id */
    user_id?: string;
    /** main_domain */
    main_domain?: string;
    /** direct_id */
    direct_id?: number;
  },
  options?: { [key: string]: any },
) {
  return request<{ code?: number; message?: string; data?: API.DirectDetailListResponse }>(
    '/service/direct/detail_list',
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

/** 信源明细记录 信源明细记录 POST /service/direct/detail_log */
export async function directDetailLog(
  body: {
    /** page */
    page?: number;
    /** page_size */
    page_size?: number;
    /** platform */
    platform?: string;
    /** nickname */
    nickname?: string;
    /** user_id */
    user_id?: string;
    /** main_domain */
    main_domain?: string;
    /** direct_id */
    direct_id?: number;
  },
  options?: { [key: string]: any },
) {
  return request<{ code?: number; message?: string; data?: API.DirectDetailListResponse }>(
    '/service/direct/detail_log',
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

/** 信源组 信源组 POST /service/direct/list */
export async function directList(body: API.DirectListRequest, options?: { [key: string]: any }) {
  return request<{ code?: number; message?: string; data?: API.DirectListResponse }>(
    '/service/direct/list',
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

/** 搜索信源 搜索信源 POST /service/direct/search_users */
export async function directSearchUsers(
  body: API.SearchUsersRequest,
  options?: { [key: string]: any },
) {
  return request<{ code?: number; message?: string; data?: API.SearchUsersResponse }>(
    '/service/direct/search_users',
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

/** 全部信源组 全部信源组 供下拉选择 POST /service/direct/total_list */
export async function directTotalList(options?: { [key: string]: any }) {
  return request<{ code?: number; message?: string; data?: API.OneDirect[] }>(
    '/service/direct/total_list',
    {
      method: 'POST',
      ...(options || {}),
    },
  );
}

/** 创建信源组 创建信源组 POST /service/direct/update */
export async function directUpdate(body: API.OneDirect, options?: { [key: string]: any }) {
  return request<{ code?: number; message?: string; data?: string }>('/service/direct/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
