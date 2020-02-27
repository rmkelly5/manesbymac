import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Helmet from "react-helmet"

const ContentBlock = ({ blockHeight , backgroundColorVal }) => {
  return (
    <div 
      style={{ height : blockHeight, backgroundColor : backgroundColorVal }} 
    >
    {blockHeight}
    </div>
  )
}

ContentBlock.propTypes = {
  blockHeight: PropTypes.number,
  backgroundColorVal: PropTypes.string,
}

ContentBlock.defaultProps = {
  blockHeight: 500,
  backgroundColorVal: 'lightgrey'
}

export default ContentBlock  
