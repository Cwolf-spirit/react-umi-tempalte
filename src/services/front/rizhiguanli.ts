// @ts-ignore
/* eslint-disable */
import request from '@/services';

/** 方案日志-详情 方案日志详情 POST /admin/plan_log/detail */
export async function requestLogPlanLogDetail(
  body: {
    log_id?: number;
  },
  options?: { [key: string]: any },
) {
  return request<{ code?: number; message?: string; data?: API.RequestLogPlanItem }>(
    '/admin/plan_log/detail',
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

/** 方案日志-列表 方案日志列表 仅记录变更成功的日志 POST /admin/plan_log/list */
export async function requestLogPlanLogList(
  body: API.RequestLogPlanRequest,
  options?: { [key: string]: any },
) {
  return request<{ code?: number; message?: string; data?: API.RequestLogPlanResponse }>(
    '/admin/plan_log/list',
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

/** 请求日志-列表 请求日志列表 POST /admin/request_log/list */
export async function requestLogList(
  body: API.RequestLogListRequest,
  options?: { [key: string]: any },
) {
  return request<{ code?: number; message?: string; data?: API.RequestLogListResponse }>(
    '/admin/request_log/list',
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
