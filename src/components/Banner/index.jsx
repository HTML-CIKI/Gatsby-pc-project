import React, { Component } from 'react'
import ReactFlv from '../ReactFlv/index'
// import PropTypes from 'prop-types'
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
          {/* <ReactFlv></ReactFlv> */}
        </div>
      </div>
    )
  }
}

export default Banner
