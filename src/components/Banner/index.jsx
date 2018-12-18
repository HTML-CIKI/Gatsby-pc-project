import React, { Component } from 'react'
import ReactFlv from '../ReactFlv/index'
// import PropTypes from 'prop-types'
import VideoPlay from '../Video/video'
import PlayerV from '../TcPlayer/index'
import './index.scss'


class Banner extends Component {

  constructor (props) {
    super(props)
    this.state = {
      name: 'LeiZP'
    }
  }

  render () {
    return (
      <div className="zzdj-banner-wrap">
        <div className="zzdj-header-inner">
        <PlayerV
          className="pla"
          m3u8="http://172.18.1.97:7002/live/test.m3u8"
          autoplay={true}
          coverpic="http://www.test.com/myimage.jpg"
          width="1200"
          height="600"
        >
        </PlayerV>
        {/* <VideoPlay></VideoPlay> */}
        </div>
      </div>
    )
  }
}

export default Banner
