import request from '@/utils/request';

export async function login(params) {
  return request('/api/login/account', {
    method: 'POST',
    body: params,
  });
}
