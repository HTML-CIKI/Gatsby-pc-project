import axios from 'axios'
// import qs from 'qs'

/**
 * @module 'service/index'
 * @desc 分装service层，用以区分开发环境和生产环境
 * @author LieZuoPing
 */
let api = `http://client-m-server.test.zhizhudj.com/` // 测试部署地址
// let api = `https://client-m-server.zhizhudj.com/` // 线上部署地址
let baseUrl = ''
let imgBaseUrl = ''
console.log(process)
if (process.env.NODE_ENV === 'development') { // 开发环境
  imgBaseUrl = '../../static/'
} else if (process.env.NODE_ENV === 'production') { // 生产环境
  imgBaseUrl = './static/'
}

/**
 * @desc 获取赛事信息接口
 * @author LieZuoPing
 * @param {
 *    season_id: season_id, 大赛ID
 *    user_guid: user_guid, 用户ID
 *    token: token,
 *    appid: appid,
 *  }
 */
const asyncGetMatchInfo = (param) => {
  // return axios.post(`${api}Webview/Match/Info`, qs.stringify(param, {
  //   indices: false
  // }))
  return axios.get(`${api}Webview/Match/Info`, {
    params: {...param, time: Date.parse(new Date())}
  })
}


// 最后统一暴露出来
export {
  api, // 端口
  baseUrl,
  imgBaseUrl, // 图片基础地址\
  asyncGetMatchInfo,
}
