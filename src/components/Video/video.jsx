import React, { Component} from 'react'
import { Player } from 'video-react'
import HLSSource from './HLSSource';
// import FLVSource from './FLVSource'
import './video.scss'

class VideoPlay extends Component {
  constructor (props) {
    super(props)
    this.state = {date: new Date()}
  }

  render () {
    return (
      <div className='video'>
      {/* m3u8 fls 播放 */}
        <Player width="1200">
          <HLSSource
            isVideoChild
            src="http://172.18.1.97:7002/live/test.m3u8"
          />
        </Player>
        {/* mp4 视频播放 */}
        {/* <Player
          playsInline
          poster="/assets/poster.png"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        /> */}
      </div>
    )
  }
}

export default VideoPlay
