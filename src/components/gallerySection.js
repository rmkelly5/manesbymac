import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Helmet from "react-helmet"
import Image from "../components/image"
// import { url } from "inspector";



const GallerySection = ({ blockHeight , backgroundColorVal , blockMarginTop}) => {
  return (
    <div 
      style={{ height : blockHeight , backgroundColor: backgroundColorVal , marginTop: blockMarginTop }} 
      id="gallerySection"
    >
    <h1 style={{ textAlign: "center", padding: "25px"}}>Gallery</h1>
    

    </div>
  )
}

GallerySection.propTypes = {
  blockHeight : PropTypes.number,
  backgroundColorVal: PropTypes.string,
  blockMarginTop: PropTypes.number
}

GallerySection.defaultProps = {
  blockHeight: 500,
  backgroundColorVal: 'lightgrey',
  blockMarginTop: 0
}

export default GallerySection  
