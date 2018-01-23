import isWapByAgent from '~/assets/util/isWapByAgent.js'
export default function ({ redirect, req, route }) {
  // 除去  fav的请求
  if (route.path.indexOf('favicon.ico') > 0) {
    return
  }
  var isWapByAgentState = isWapByAgent(process.browser ? navigator.userAgent : req.headers['user-agent'])
  let path = ''
  if (req && req.headers) {
    path = req.headers.host
  } else {
    path = location.host
  }
  // 弄个假的 现在是移动端
  // path = 'enfit.cn'
  var isWapByPathState = path.startsWith('m.')
  if (isWapByAgentState && isWapByPathState) {
    // 手机浏览器访问了手机的地址
    return
  } else if ((!isWapByAgentState) && (!isWapByPathState)) {
    // 电脑浏览器访问了电脑的地址
    return
  }
  let pathNew = ''
  if (isWapByPathState) {
    // 手机端状态
    pathNew = `${path.substr(2)}${route.fullPath}`
  } else {
    pathNew = path.startsWith('www.') ? `m${path.substr(3)}${route.fullPath}` : `m.${path}${route.fullPath}`
  }
  return redirect('302', pathNew)
}
