// @ts-ignore
/* eslint-disable */
import request from '@/services';

/** 地区 地区树 POST /service/common/region */
export async function region(options?: { [key: string]: any }) {
  return request<{ code?: number; message?: string; data?: API.RegionResponse[] }>(
    '/service/common/region',
    {
      method: 'POST',
      ...(options || {}),
    },
  );
}
