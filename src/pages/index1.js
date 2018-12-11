import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/layout'
import Image from '../components/image'
import VideoPlay from '../components/Video/video'
import './index.scss';
const IndexPage1 = () => (
  <Layout title={'蜘蛛电竞-直播间'}>
    <h1>首页1111</h1>
    <div>
      <VideoPlay></VideoPlay>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage1
