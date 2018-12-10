import React, { Component} from 'react'
import { Player } from 'video-react'
// import HLSSource from './HLSSource';
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
        {/* <Player>
          <HLSSource
            isVideoChild
            src="http://pili-live-hls.djlive-match.live.zzdj.7659.com/djlive-match/zzdj_104389.m3u8"
          />
        </Player> */}
        {/* mp4 视频播放 */}
        {/* <Player
          playsInline
          poster="/assets/poster.png"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        /> */}
        {/* flv 播放 */}
        {/* <Player>
          <FLVSource src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="mp4">
          </FLVSource>
        </Player> */}
      </div>
    )
  }
}

export default VideoPlay
