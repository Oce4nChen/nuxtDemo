import Path from '~/assets/util/isPath.js'
export default function (ctx) {
  if (ctx.isHMR) return
  // 除去  fav的请求
  if (ctx.route.path.indexOf('favicon.ico') > 0) {
  }
  const path = new Path(ctx)
  // 获取base接口
  var fnArray = []
  // 获取基础信息
  ctx.store.state.baseData || fnArray.push(path.getBaseData().then(res => {
    ctx.store.commit('setBaseData', res.data)
    // console.log(ctx.store.stat.baseData)
  }))

  // 获取nav菜单
  ctx.store.state.menuList || fnArray.push(path.getNav().then(res => {
    ctx.store.commit('setMenuList', res.lists)
  }))

  return d.api.Promise.all(fnArray)
}
