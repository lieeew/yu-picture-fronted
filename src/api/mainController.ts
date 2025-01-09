// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** health GET /api/health */
export async function healthUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseString_>('/api/health', {
    method: 'GET',
    ...(options || {}),
  })
}

/** test GET /api/test2 */
export async function testUsingGet(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/test2', {
    method: 'GET',
    ...(options || {}),
  })
}
