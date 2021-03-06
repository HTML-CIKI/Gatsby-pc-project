import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Nav from '../Nav/index'
import './layout.css'

const Layout = ({ children, title }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={title}
          meta={[
            { name: 'description', content: '蜘蛛电竞' },
            { name: 'keywords', content: '蜘蛛电竞是安果科技打造的全新的共享电竞品牌。蜘蛛电竞-为精彩比赛喝彩,【实时队内语音】:实时激情队内语音，听选手谈笑间绝地求生！【明星选手视角】:明星选手第一视角，看大神炮火中攻城掠寨！【百万观赛红包】:百万红包送不停，观众个个有钱领！' },
          ]}
        >
          <html lang="ch" />
        </Helmet>
        <Nav />
        <div
          style={{
            margin: '0 auto',
            maxWidth: '1400px',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout