import request from '@/utils/request';

export function fetchList(query) {
  return request({
    url: '/tiny_authority_tbs/article/list',
    method: 'get',
    params: query
  });
}
