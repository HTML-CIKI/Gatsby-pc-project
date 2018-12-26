import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './index.scss'
import Player from '../Player'

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
        <Player></Player>
      </div>
    )
  }
}

export default Banner