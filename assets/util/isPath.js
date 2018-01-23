
export default Path
function Path (ctx) {
  if (!ctx) Error('ctx')
  this.ctx = ctx
  this.path = this.ctx.route.path
}
Path.prototype = {
  constructor: Path,
  isHome () {
    if (this.path === '/web' || this.path === '/wap' || this.path === '/web/' || this.path === '/wap/') {
      return true
    }
  },
  isPage () {
    if (this.path.includes('page') > 0) {
      return true
    }
  },
  isList () {
    if (this.path.includes('lists')) {
      return true
    }
  },
  getBaseData () {
    const url = '/v1.0/api/basic'
    return this.getData(url)
  },
  getNav () {
    const url = '/v1.0/api/menu/lists'
    return this.getData(url)
  },
  getData (url, ajaxData = {}) {
    return d.api.data(this.ctx, () => {
      return d.get(url, this.ctx).send(ajaxData)
    })
  }
}
