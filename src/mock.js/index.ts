import Mock from 'mockjs';
export function getIdAndName() {
  return Mock.mock({
    'data|8': [
      {
        id: '@id',
        name: '@name',
      },
    ],
  });
}

export function getTitle() {
  return Mock.mock('@title(3, 5)');
}
