import React, { Component } from 'react'
import { Link } from 'gatsby'
// import PropTypes from 'prop-types'
import './index.scss'

class ClassifyDrop extends Component {

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
      <div className="drop-classify">
        <div className="drop-classify-inner">
          <h3>热门分类</h3>
          <div>
            <Link to="/"> 英雄联盟</Link>
            <Link to="/"> 英雄联盟</Link>
            <Link to="/"> 英雄联盟</Link>
            <Link to="/"> 英雄联盟</Link>
            <Link to="/"> 英雄联盟</Link>
            <Link to="/"> 英雄联盟</Link>
          </div>
        </div>
        <div className="drop-classify-inner">
          <h3>热门分类</h3>
          <div>
            <Link to="/"> 英雄联盟</Link>
            <Link to="/"> 英雄联盟</Link>
            <Link to="/"> 英雄联盟</Link>
            <Link to="/"> 英雄联盟</Link>
            <Link to="/"> 英雄联盟</Link>
            <Link to="/"> 英雄联盟</Link>
          </div>
        </div>
        <Link className="drop-load-more" to="/"> 更多 ＞</Link>
      </div>
    )
  }
}

export default ClassifyDrop