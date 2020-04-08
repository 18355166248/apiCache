import request from '@/axios';

export function getList2(params) {
  return request.get('/mock/list1/', { params });
}
