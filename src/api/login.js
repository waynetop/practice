import request from '@/utils/request';

export function login(data) {
  return request({
    url: '/tiny_authority_tbs/login.tml',
    method: 'post',
    params: {
      flow: 'token'
    },
    data
  });
}
