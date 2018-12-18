import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TcPlayer from '../../util/TcPlayer-2.2.1.js';
console.log(TcPlayer)

/**
 * react component wrap flv.js
 */
export default class PlayerV extends Component {

  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    m3u8: PropTypes.string, // m3u8 播放 URL 示例： http://2157.liveplay.myqcloud.com/2157_358535a.m3u8
    m3u8_hd: PropTypes.string, // 高清 m3u8 播放URL 示例：http://2157.liveplay.myqcloud.com/2157_358535ahd.m3u8
    m3u8_sd: PropTypes.string, // 标清 m3u8 播放URL 示例： http://2157.liveplay.myqcloud.com/2157_358535asd.m3u8
    flv: PropTypes.string, // 原画 flv 播放 URL 示例： http://2157.liveplay.myqcloud.com/2157_358535a.flv
    flv_hd: PropTypes.string, // 高清 flv 播放 URL 示例： http://2157.liveplay.myqcloud.com/2157_358535ahd.flv
    flv_sd: PropTypes.string, // 标清 flv 播放 URL 示例： http://2157.liveplay.myqcloud.com/2157_358535asd.flv
    mp4: PropTypes.string, // 原画 mp4 播放 URL 示例： http://200002949.vod.myqcloud.com/200002949_b6ffc.f0.mp4
    mp4_hd: PropTypes.string, // 高清 mp4 播放 URL 示例： http://200002949.vod.myqcloud.com/200002949_b6ffc.f40.mp4
    mp4_sd: PropTypes.string, // 标清 mp4 播放 URL 示例： http://200002949.vod.myqcloud.com/200002949_b6ffc.f20.mp4
    rtmp: PropTypes.string, // 原画 rtmp 播放 URL 示例： rtmp://2157.liveplay.myqcloud.com/live/2157_280d88
    rtmp_hd: PropTypes.string, // 高清 rtmp 播放 URL 示例： rtmp://2157.liveplay.myqcloud.com/live/2157_280d88hd
    rtmp_sd: PropTypes.string, // 标清 rtmp 播放 URL 示例： rtmp://2157.liveplay.myqcloud.com/live/2157_280d88sd
    width: PropTypes.number, // 必选，设置播放器宽度，单位为像素 示例：640
    height: PropTypes.number, // 必选，设置播放器高度，单位为像素 示例：480
    volume: PropTypes.number, // 0.5 设置初始音量，范围：0~1 [v2.2.0+] 示例：0.6
    live: PropTypes.bool, // default: false 必选，设置视频是否为直播类型，将决定是否渲染时间轴等控件，以及区分点直播的处理逻辑 示例：true
    autoplay: PropTypes.bool, // default false 是否自动播放 备注：该选项只对大部分 PC 平台生效  示例： true
      /*
       * 预览封面，可以传入一个图片地址或者一个包含图片地址 src 和显示样式 style 的对象。
       * style 可选属性：
       * default 居中 1：1 显示 
       * stretch 拉伸铺满播放器区域，图片可能会变形 
       * cover 优先横向等比拉伸铺满播放器区域，图片某些部分可能无法显示在区域内 
       * 示例： "http://www.test.com/myimage.jpg" 
       * 或者
       * {"style": "cover", "src": http://www.test.com/myimage.jpg}
       */
    coverpic: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
      ]),
    controls: PropTypes.string, // "default" default 显示默认控件，none 不显示控件，system 移动端显示系统控件 备注：如果需要在移动端使用系统全屏，就需要设置为 system。默认全屏方案是使用 Fullscreen API + 伪全屏的方式 例子 示例："system"
    systemFullscreen: PropTypes.bool, // false 开启后，在不支持 Fullscreen API 的浏览器环境下，尝试使用浏览器提供的 webkitEnterFullScreen 方法进行全屏，如果支持，将进入系统全屏，控件为系统控件 示例：true
    flash: PropTypes.bool, // default true 是否优先使用 flash 播放视频，备注：该选项只对 PC 平台生效[v2.2.0+] 示例：true
    flashUrl: PropTypes.bool, // 可以设置 flash swf url 备注：该选项只对 PC 平台生效 [v2.2.1+]
    h5_flv: PropTypes.bool, // default false 是否启用 flv.js 的播放 flv。启用时播放器将在支持 MSE 的浏览器下，采用 flv.js 播放 flv，然而并不是所有支持 MSE 的浏览器都可以使用 flv.js，所以播放器不会默认开启这个属性。[v2.2.0+] 示例: true
    x5_player: PropTypes.bool, // default false 是否启用 TBS 的播放 flv。启用时播放器将在 TBS 模式下(例如 Android 的微信、QQ 浏览器）将 flv 播放地址直接赋给 <video> 播放，TBS 视频能力 [v2.2.0+] 示例：true
    x5_type: PropTypes.string, // 通过 video 属性 “x5-video-player-type” 声明启用同层 H5 播放器，支持的值：H5 (该属性为 TBS 内核实验性属性，非 TBS 内核不支持)，TBS H5 同层播放器接入规范 示例："h5"
    x5_fullscreen: PropTypes.string, // 通过 video 属性 “x5-video-player-fullscreen” 声明视频播放时是否进入到 TBS 的全屏模式，支持的值：true (该属性为 TBS 内核实验性属性，非 TBS 内核不支持) 。 示例："true"
    x5_orientation: PropTypes.number, // 通过 video 属性 “x5-video-orientation” 声明 TBS 播放器支持的方向，可选值：0（landscape 横屏），1：（portraint竖屏），2：（landscape | portrait 跟随手机自动旋转）。 (该属性为 TBS 内核实验性属性，非 TBS 内核不支持) [v2.2.0+] 示例：0
    wording: PropTypes.object, //  自定义文案 示例：{ 2032: '请求视频失败，请检查网络'}
    clarity: PropTypes.string, // 'od' 默认播放清晰度 [v2.2.1+] 示例: clarity: 'od'
    clarityLabel: PropTypes.object, // {od: '超清', hd: '高清', sd: '标清'} 自定义清晰度文案 [v2.2.1+] 示例: clarityLabel: {od: '蓝光', hd: '高清', sd: '标清'}
    listener: PropTypes.func // 事件监听回调函数，回调函数将传入一个 JSON 格式的对象 示例：function(msg){//进行事件处理 }
  }

  // constructor (props) {
  //   super(props)
  // }

  initTcPlayer = () => {
    console.log(TcPlayer)
    console.log(1111)
    // let tcPlayer = new TcPlayer('tc_video', {...this.props});
  }

  componentWillUnmount() {

  }

  render() {
    const { className, style } = this.props;
    return (
      <div id="tc_video" 
      className={className}
      style={Object.assign({
        width: '100%',
      }, style)}
      ref={this.initTcPlayer}></div>
    )
  }
}