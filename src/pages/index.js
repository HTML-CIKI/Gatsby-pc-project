import React, { Component } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/layout'
// import Image from '../components/image'
import { Banner } from '../components/index'
import Nowlive from '../components/Imglazy/nowlive'
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
        {/* <Nowlive></Nowlive> */}
        {/* <div>
          <ImgLazy src="https://rpic.douyucdn.cn/asrpic/181212/1863767_1449_66.jpg/dy1"
              placeholder="https://rpic.douyucdn.cn/asrpic/181212/229346_1528.jpg/dy1"
              offset={-100} />
        </div>
        <div>
          <ImgLazy src="https://rpic.douyucdn.cn/asrpic/181212/1863767_1449_66.jpg/dy1"
              placeholder="https://rpic.douyucdn.cn/asrpic/181212/229346_1528.jpg/dy1"
              offset={-100} />
        </div>
        <div>
          <ImgLazy src="https://rpic.douyucdn.cn/asrpic/181212/1863767_1449_66.jpg/dy1"
              placeholder="https://rpic.douyucdn.cn/asrpic/181212/229346_1528.jpg/dy1"
              offset={-100} />
        </div> */}
        
        <h1>首页</h1>
        <p>1111.</p>
        <p>2222</p>
        {/* <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
          <Image />
        </div>
        <div>
          <VideoPlay></VideoPlay>
        </div>
        <Link to="/page-2/">Go to page 2</Link>
        <Linkk to="/index1/">Go to Index1</Linkk> */}
      </Layout>
    )
  }
}

export default IndexPage
