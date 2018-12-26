import React, { Component } from 'react'
import { Link } from 'gatsby'
// import PropTypes from 'prop-types'
import './index.scss'

class MatchDrop extends Component {

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
      <div className="drop-match">
        222
      </div>
    )
  }
}

export default MatchDrop