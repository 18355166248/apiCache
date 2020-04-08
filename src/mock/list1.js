// 使用 Mock
import Mock from 'mockjs';

Mock.mock(/\/mock\/list1/, 'GET', {
  data: ['jiang', 'cheng', 'dan', 'zhong', 'volia'],
});
