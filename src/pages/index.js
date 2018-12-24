import React, { Component } from 'react'
import { Link } from 'gatsby'
import { HeaderContaner, Layout, Banner } from '../components/index'
// import { Banner } from '../components/index'
class IndexPage extends Component {

  constructor (props) {
    super(props)
    this.state = {
      name: 'LeiZP',
      meta: {
        title: '首页'
      }
    }
  }

  render () {
    return (
      <div>
        <HeaderContaner></HeaderContaner>
        <Layout title={'蜘蛛电竞-为精彩比赛喝彩'}>
          <Banner></Banner>
        </Layout>
      </div>
    )
  }
}

export default IndexPage