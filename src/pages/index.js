import React, { Component } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/layout'
import Image from '../components/image'
import VideoPlay from '../components/Video/video'
import './index.scss';
<<<<<<< HEAD
import Hotsort from '../components/Hotsort/hotsort'
const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site1111 121212121rr.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Hotsort></Hotsort>
  </Layout>
)
=======
import { Banner } from '../components/index'

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
      <Layout title={'蜘蛛电竞-为精彩比赛喝彩'}>
        <Banner></Banner>
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
>>>>>>> 8f37225829f83cbc9fbd0ffeaaa0ecc30110bc6a

export default IndexPage
