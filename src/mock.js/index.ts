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

export function getTitle(type = 1) {
  return type == 1 ? Mock.mock('@title(3, 5)') : Mock.mock('@title(8, 12)');
}
