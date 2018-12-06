import React, { Component } from 'react';
// the default player can play mp4 and flv videos
import Player from 'video-player-react';
// the BasePlayer only can play video that browser support
import BasePlayer from 'video-player-react/dist/baseplayer.min.js';  

// the FlvPlayer use flv.js decode flv format videos and only can play flv format videos
import FlvPlayer from 'video-player-react/dist/flvplayer.min.js'


const src = 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4';
// const src = 'https://mister-ben.github.io/videojs-flvjs/bbb.flv';
const poster = 'http://i1.go2yd.com/corpimage.php?url=V_01hq9SbYd8&source=mibrowser';

class FLVSource extends Component {
  render() {
    return <Player options={{}} src={src} poster={poster}/>
  }
}
export default FLVSource;