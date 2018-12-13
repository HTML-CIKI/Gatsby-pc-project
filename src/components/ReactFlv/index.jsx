import React, { PureComponent } from 'react';
import Reflv from './reFlv';
import './index.scss'

class ReactFlv extends PureComponent {
  render() {
    return (
      <Reflv
        url={`http://localhost:7001/live/test.flv`}
        type="flv"
        isLive
        cors
        hasVideo
        hasAudio
        className="video-flv"
      />
    )
  }
}

export default ReactFlv