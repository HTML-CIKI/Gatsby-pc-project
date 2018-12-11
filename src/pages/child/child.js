import React, { Component } from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout/layout'

class ChalidPage extends Component {

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
      <Layout title={'蜘蛛电竞-子页面'}>
        11111
        {/* <h1>首页</h1>
        <p>1111.</p>
        <p>2222</p>
        <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
          <Image />
        </div>
        <div>
          <VideoPlay></VideoPlay>
        </div>
        <Link to="/page-2/">Go to page 2</Link>
        <Link to="/index1/">Go to Index1</Link> */}
      </Layout>
    )
  }
}

export default ChalidPage
