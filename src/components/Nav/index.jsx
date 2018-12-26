import React, { Component } from 'react'
import { Link } from 'gatsby'
// import PropTypes from 'prop-types'
import './index.scss'
import { headerLogo } from '../../service/imgSrc'
import LeftNav from './leftNav'
import RightNav from './rightNav'

class Nav extends Component {

  constructor (props) {
    super(props)
    this.state = {
      name: 'LeiZP'
    }
  }

  componentDidMount() {
    console.log(location)
  }

  componentWillUnmount() {

  }

  render () {
    return (
      <div className="zzdj-header-wrap">
        <div className="zzdj-header-inner">
          <Link to="/" className="nav-item-link" className="logo">
            <img src={headerLogo} />
          </Link>
          {/* left nav */}
          <LeftNav></LeftNav>
          {/* search box */}
          <div className="nav-search-wrap">
            <input placeholder="小Z-大魔王" />
            <span></span>
          </div>
          {/* 右边导航 */}
          <RightNav></RightNav>
        </div>
      </div>
    )
  }
}

export default Nav