// @ts-ignore
/* eslint-disable */
import request from '@/services';

/** 全部统计 全部统计 POST /admin/statistic/index */
export async function adminStatisticIndex(options?: { [key: string]: any }) {
  return request<{ code?: number; message?: string; data?: API.AdminStatisticResponse }>(
    '/admin/statistic/index',
    {
      method: 'POST',
      ...(options || {}),
    },
  );
}

/** 权益量统计 权益量统计 POST /service/statistic/index */
export async function serviceStatisticIndex(options?: { [key: string]: any }) {
  return request<{ code?: number; message?: string; data?: API.WebStatisticResponse }>(
    '/service/statistic/index',
    {
      method: 'POST',
      ...(options || {}),
    },
  );
}

/** 权益量每日详细列表 权益量趋势 POST /service/statistic/list */
export async function serviceStatisitcList(
  body: API.StatisticListRequest,
  options?: { [key: string]: any },
) {
  return request<{ code?: number; message?: string; data?: API.WebStatisticListResponse[] }>(
    '/service/statistic/list',
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

/** 权益量趋势 权益量趋势 POST /service/statistic/trend */
export async function serviceStatisitcTrend(
  body: API.StatisticTrendRequest,
  options?: { [key: string]: any },
) {
  return request<{ code?: number; message?: string; data?: API.WebStatisticTrendResponse[] }>(
    '/service/statistic/trend',
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
