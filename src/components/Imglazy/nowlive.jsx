import React, { Component } from 'react'
import { Link } from 'gatsby'
// import PropTypes from 'prop-types'
import './nowlive.scss'
import ImgLazy from './Imglazy'

const numbers = [1, 2, 3, 4, 5,6,7,8,9,10,11]
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    <a>
    <ImgLazy src="https://rpic.douyucdn.cn/asrpic/181212/1863767_1449_66.jpg/dy1"
      placeholder="https://rpic.douyucdn.cn/asrpic/181212/229346_1528.jpg/dy1"
      offset={-100} />5656
      {number}
    </a>
  </li>
)

class Nowlive extends Component {

  constructor (props) {
    super(props)
    this.state = {
      name: 'LeiZP'
    }
  }
  
  render () {
    return (
      <div className="hotmain">
        <ul className="hotbox">
          {listItems}
          <div className="clearfix"></div>
        </ul>
      </div>
    )
  }
}

export default Nowlive