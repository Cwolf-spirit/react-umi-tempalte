// @ts-ignore
/* eslint-disable */
import request from '@/services';

/** 方案批量排除信源 方案批量排除信源 POST /service/plan/batch_exclude_direct */
export async function planBatchExcludeDirect(
  body: API.PlanBatchExcludeDirectRequest,
  options?: { [key: string]: any },
) {
  return request<{ code?: number; message?: string; data?: API.PlanDailyResponse }>(
    '/service/plan/batch_exclude_direct',
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

/** 方案创建 方案创建 POST /service/plan/create */
export async function planCreate(body: API.PlanRequest, options?: { [key: string]: any }) {
  return request<{ code?: number; message?: string; data?: API.PlanId }>('/service/plan/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 方案每日明细 方案每日明细 POST /service/plan/daily */
export async function planDaily(body: API.PlanDailyRequest, options?: { [key: string]: any }) {
  return request<{ code?: number; message?: string; data?: API.PlanDailyResponse }>(
    '/service/plan/daily',
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

/** 方案删除 方案删除 POST /service/plan/delete */
export async function planDelete(body: API.PlanId, options?: { [key: string]: any }) {
  return request<{ code?: number; message?: string; data?: API.PlanId }>('/service/plan/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 方案详情 方案详情 POST /service/plan/detail */
export async function planDetail(body: API.PlanId, options?: { [key: string]: any }) {
  return request<{ code?: number; message?: string; data?: API.PlanDetail }>(
    '/service/plan/detail',
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

/** 方案表单 方案表单 传参的时候传key POST /service/plan/form */
export async function planForm(options?: { [key: string]: any }) {
  return request<{ code?: number; message?: string; data?: API.PlanFormResponse }>(
    '/service/plan/form',
    {
      method: 'POST',
      ...(options || {}),
    },
  );
}

/** 方案列表 方案列表 POST /service/plan/list */
export async function planList(body: API.PlanListRequest, options?: { [key: string]: any }) {
  return request<{ code?: number; message?: string; data?: API.PlanListResponse }>(
    '/service/plan/list',
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

/** 方案开启 方案开启 POST /service/plan/open */
export async function planOpen(body: API.PlanId, options?: { [key: string]: any }) {
  return request<{ code?: number; message?: string; data?: API.PlanId }>('/service/plan/open', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 方案暂停 方案暂停 POST /service/plan/suspend */
export async function planSuspend(body: API.PlanId, options?: { [key: string]: any }) {
  return request<{ code?: number; message?: string; data?: API.PlanId }>('/service/plan/suspend', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 传输量总计 传输量总计 POST /service/plan/total_data */
export async function planTotalData(options?: { [key: string]: any }) {
  return request<{ code?: number; message?: string; data?: API.TotalDataResponse }>(
    '/service/plan/total_data',
    {
      method: 'POST',
      ...(options || {}),
    },
  );
}

/** 方案更新 方案更新 POST /service/plan/update */
export async function planUpdate(body: API.PlanUpdateRequest, options?: { [key: string]: any }) {
  return request<{ code?: number; message?: string; data?: API.PlanId }>('/service/plan/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
