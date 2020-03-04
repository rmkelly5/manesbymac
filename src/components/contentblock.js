import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Helmet from "react-helmet"

const ContentBlock = ({ blockHeight , backgroundColorVal , blockMarginTop}) => {
  return (
    <div 
      style={{ height : blockHeight, backgroundColor : backgroundColorVal, marginTop: blockMarginTop }} 
    >
    {blockHeight}
    </div>
  )
}

ContentBlock.propTypes = {
  blockHeight: PropTypes.number,
  backgroundColorVal: PropTypes.string,
  blockMarginTop: PropTypes.number
}

ContentBlock.defaultProps = {
  blockHeight: 500,
  backgroundColorVal: 'lightgrey',
  blockMarginTop: 0
}

export default ContentBlock  
