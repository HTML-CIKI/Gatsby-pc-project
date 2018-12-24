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

  componentDidMount() {
    console.log(location)
    debugger

  }

  componentWillUnmount() {

  }

  render () {
    let liClass = ''
    if (location.pathname === '/') {
      liClass += ' nav-active'
    }
    
    return (
      <div className="zzdj-header-wrap">
        <div className="zzdj-header-inner">
          <Link to="/" className="nav-item-link" className="logo">
            <img src={headerLogo} />
          </Link>
          {/* left nav */}
          <ul className="zzdj-header-nav">
            <li className={liClass}>
              <Link to="/" className="nav-item-link"> 首页</Link>
            </li>
            <li> <Link to="/page-2/" className="nav-item-link"> 直播</Link></li>
            <li>
              <Link to="/index1/" className="nav-item-link">
                <span>分类 </span>
                <i className="arrow"></i>
              </Link>
            </li>
            <li>
              <Link to="/index1/" className="nav-item-link">
                <span>赛事</span>
                <i className="arrow"></i>
              </Link>
            </li>
            <li>
              <Link to="/index1/" className="nav-item-link">
                <span>视频 </span>
                <i className="arrow"></i>
              </Link>
            </li>
          </ul>
          {/* search box */}
          <div className="nav-search-wrap">
            <input placeholder="小Z-大魔王" />
            <span></span>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav