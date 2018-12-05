import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './header.scss'
import { headerLogo } from '../../service/imgSrc'

const Header = ({ siteTitle }) => (
  <div className="zzdj-header-wrap">
    <div className="zzdj-header-inner">
      <a href="http://www.zhizhudj.com/" className="nav-item-link" className="logo">
        <img src={headerLogo} />
      </a>
      <ul className="zzdj-header-nav">
        <li> <Link to="/" className="nav-item-link"> 首页</Link></li>
        <li> <Link to="/" className="nav-item-link"> 游戏</Link></li>
        <li> <Link to="/" className="nav-item-link"> 直播</Link></li>
        <li> <Link to="/" className="nav-item-link"> 分类</Link></li>
        <li> <Link to="/" className="nav-item-link"> 视频</Link></li>
        <li> <Link to="/" className="nav-item-link"> 游戏</Link></li>
      </ul>
      {/* <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1> */}
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
