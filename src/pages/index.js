import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/layout'
import Image from '../components/image'
import VideoPlay from '../components/Video/video'
import './index.scss';
const IndexPage = () => (
  <Layout>
    <h1>首页</h1>
    <p>1111.</p>
    <p>2222</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <div>
      <VideoPlay></VideoPlay>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
