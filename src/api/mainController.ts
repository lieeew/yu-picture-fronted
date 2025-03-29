/* eslint-disable */
import request from '@/request'

/** doLogin POST /api/main/doLogin */
export async function doLoginUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.doLoginUsingPOSTParams,
  options?: { [key: string]: any }
) {
  return request<string>('/api/main/doLogin', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** health GET /api/main/health */
export async function healthUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseString_>('/api/main/health', {
    method: 'GET',
    ...(options || {}),
  })
}

/** isLogin GET /api/main/isLogin */
export async function isLoginUsingGet(options?: { [key: string]: any }) {
  return request<string>('/api/main/isLogin', {
    method: 'GET',
    ...(options || {}),
  })
}

/** logout GET /api/main/logout */
export async function logoutUsingGet(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/main/logout', {
    method: 'GET',
    ...(options || {}),
  })
}

/** tokenInfo GET /api/main/tokenInfo */
export async function tokenInfoUsingGet(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/main/tokenInfo', {
    method: 'GET',
    ...(options || {}),
  })
}
