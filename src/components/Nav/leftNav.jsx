import React, { Component } from 'react'
import { Link } from 'gatsby'
// import PropTypes from 'prop-types'
import './index.scss'
import ClassifyDrop from './classifyDrop'

class LeftNav extends Component {

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
    let liClass = ''
    if (location.pathname === '/') {
      liClass += ' nav-active'
    }
    return (
      <div className="zzdj-header-nav">
        <li className={liClass}>
          <Link to="/" className="nav-item-link"> 首页</Link>
        </li>
        <li> <Link to="/page-2/" className="nav-item-link"> 直播</Link></li>
        <li>
          <Link to="/index1/" className="nav-item-link">
            <span>分类 </span>
            <i className="arrow"></i>
            <div className="drop-wrap classify fadeInDown">
              <ClassifyDrop></ClassifyDrop>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/index1/" className="nav-item-link">
            <span>赛事</span>
            <i className="arrow"></i>
            {/* <div className="drop-wrap classify">
              {this.props.children}
            </div> */}
          </Link>
        </li>
        <li>
          <Link to="/index1/" className="nav-item-link">
            <span>视频 </span>
            <i className="arrow"></i>
            {/* <div className="drop-wrap classify">
              {this.props.children}
            </div> */}
          </Link>
        </li>
      </div>
    )
  }
}

export default LeftNav