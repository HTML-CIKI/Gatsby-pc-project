import React, { Component } from 'react'
import { Link } from 'gatsby'
// import PropTypes from 'prop-types'
import './index.scss'
import { headerLogo } from '../../service/imgSrc'

class Nav extends Component {

  constructor (props) {
    super(props)
    this.state = {
      name: 'LeiZP'
    }
  }

  render () {
    return (
      <div className="zzdj-header-wrap">
        <div className="zzdj-header-inner">
          <Link to="http://www.zhizhudj.com/" className="nav-item-link" className="logo">
            <img src={headerLogo} />
          </Link>
          <ul className="zzdj-header-nav">
            <li> <Link to="/" className="nav-item-link"> 首页</Link></li>
            <li> <Link to="/page-2/" className="nav-item-link"> 游戏</Link></li>
            <li> <Link to="/index1/" className="nav-item-link"> 直播</Link></li>
            <li> <Link to="/child/child/" className="nav-item-link"> 分类</Link></li>
            <li> <Link to="/" className="nav-item-link"> 视频</Link></li>
            <li> <Link to="/" className="nav-item-link"> 游戏</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Nav
