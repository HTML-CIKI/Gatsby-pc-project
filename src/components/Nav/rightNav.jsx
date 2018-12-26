import React, { Component } from 'react'
import { Link } from 'gatsby'
// import PropTypes from 'prop-types'
import './index.scss'
import { headerLogo } from '../../service/imgSrc'

class RightNav extends Component {

  constructor (props) {
    super(props)
    this.state = {
      name: 'LeiZP'
    }
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render () {
    return (
      <div className="nav-right-wrap">
        <ul>
          <li>
            <Link to="/" className="nav-right-item">
              <i className='item icon1'></i>
              <span>开播</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-right-item">
              <i className='item icon2'></i>
              <span>下载</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-right-item">
              <i className='item icon3'></i>
              <span>订阅</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-right-item">
              <i className='item icon4'></i>
              <span>历史</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-right-item">
              <i className='item icon5'></i>
              <span>登陆</span>
            </Link>
            |
            <Link to="/" className="nav-right-item">
              <span>注册</span>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default RightNav