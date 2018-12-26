import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './index.scss'

class Player extends Component {

  constructor (props) {
    super(props)
    this.state = {
      name: 'LeiZP'
    }
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render () {

    return (
      <div className="zzdj-player-wrap">
        <script src="//imgcache.qq.com/open/qcloud/video/vcplayer/TcPlayer-2.2.1.js"></script>
        <div id="id_video" style="width:100%; height:auto;"></div>
        {/* <script>
          {
            let player = new TcPlayer('id_video', {
            "m3u8": "http://2157.liveplay.myqcloud.com/2157_358535a.m3u8",
            "flv": "http://2157.liveplay.myqcloud.com/live/2157_358535a.flv", //增加了一个flv的播放地址，用于PC平台的播放 请替换成实际可用的播放地址
            "autoplay" : true,      //iOS下safari浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
            "coverpic" : "http://www.test.com/myimage.jpg",
            "width" :  '480',//视频的显示宽度，请尽量使用视频分辨率宽度
            "height" : '320'//视频的显示高度，请尽量使用视频分辨率高度
            });
          }
        </script> */}
      </div>
    )
  }
}

export default Player