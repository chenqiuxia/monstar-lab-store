const _navs = [
  {
    'id': 1,
    'name': '首页',
    'url': '/'
  },
  {
    'id': 2,
    'name': '产品中心',
    'url': '/products'
  },
  {
    'id': 2,
    'name': '订单',
    'url': '/orders'
  }
]

export default {
  getNavs (cb) {
    setTimeout(() => cb(_navs), 100)
  }
}
