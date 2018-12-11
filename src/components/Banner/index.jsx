import React, { Component } from 'react'
import { Link } from 'gatsby'
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
          {/* <Link to="http://www.zhizhudj.com/" className="nav-item-link" className="logo">
            <img src={headerLogo} />
          </Link> */}
        </div>
      </div>
    )
  }
}

export default Banner
