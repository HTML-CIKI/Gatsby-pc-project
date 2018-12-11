import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './hotsort.scss'
import { headerLogo } from '../../service/imgSrc'
import LazyLoadImg from 'react-lazyload-img'

const Hortsortmain = ({ sortMain }) => (
  <div>
    565
      {/* <LazyLoadImg
      src="https://cs-op.douyucdn.cn/dycatr/game_cate/76a6d8b20e6c1a465c6f1bbedc35fd41.jpg"
      placeholder=""
      /> */}
    </div>
)

Hortsortmain.propTypes = {
  sortMain: PropTypes.string,
}

Hortsortmain.defaultProps = {
  sortMain: '',
}

export default Hortsortmain
