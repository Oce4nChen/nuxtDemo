export default function (ctx) {
  if (ctx.isHMR) return
  // 除去  fav的请求
  if (ctx.route.path.indexOf('favicon.ico') > 0) {
    return
  }
  let url = 'http://api.zs.easyke.top/v1.0/api/seo'
  // params type=news||index||product||cases       tableId=1 默认1
  function getseo () {
    // 首页
    var ajaxData = { tableId: 1 }
    if (ctx.route.path === '/') {
      ajaxData.type = 'index'
    }
    // 列表
    if (ctx.params.methodId) {
      ajaxData.type = ctx.params.method
      ajaxData.tableId = ctx.params.methodId || 1
    }
    // page
    if (ctx.params.pageId) {
      ajaxData.type = ctx.params.pageId
    }
    // item页
    if (ctx.params.itemId) {
      return
    }
    return d.get(url, ctx)
      .send(ajaxData)
      .then(res => {
        ctx.store.commit('setSiteDescription', res.data.siteDescription || '')
        ctx.store.commit('setSiteKeywords', res.data.siteKeywords || '')
        ctx.store.commit('setSiteTitle', res.data.siteTitle || '')
      })
  }

  getseo()
}
