import React, { Component } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/layout'
import Image from '../components/image'
import VideoPlay from '../components/Video/video'
import { asyncGetMatchInfo } from '../service/service'
import './index.scss';
import Hotsort from '../components/Hotsort/hotsort'
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

  /**
   * 渲染生命周期
   */
  componentDidMount() {
    this.fnGetData()
  }

  /**
   * 销毁生命周期
   */
  componentWillUnmount() {

  }

  /**
   * 获取数据
   */
  fnGetData = () => {
    asyncGetMatchInfo({
      season_id: 14,
      user_guid: 'ud103924a98dcbf1af8da41c096aa611e',
      token: 'T2D0E99F4862679861F155F89EC4D5280',
      appid: 'com.zzdj.esports.ios',
    })
      .then(res => {
        console.log(res)
      })
  }

  render () {
    return (
      <Layout title={'蜘蛛电竞-为精彩比赛喝彩'}>
        <Banner></Banner>
        <Hotsort></Hotsort>
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

export default IndexPage
