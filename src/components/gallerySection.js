import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Helmet from "react-helmet"
import Image from "../components/image"
// import { url } from "inspector";
import imgtest from "../images/sample_pic.png"




const GallerySection = ({ blockHeight , backgroundColorVal , blockMarginTop}) => {
  
  function test() {
    console.log('testing');
    //document.getElementById('test1').style.display = 'none';
  };

  

  return (
    <div 
      style={{ height : blockHeight , backgroundColor: backgroundColorVal , marginTop: blockMarginTop }} 
      id="gallerySection"
    >
    <h1 style={{ textAlign: "center", padding: "25px" , position : 'relative'}}>Gallery</h1>

    <div class="row">


      <div class="col-lg-6">
        <div id="test1" style={{ width: '320px', height: "380px" , outline: '1px solid black' , float: 'left' , marginLeft: '35%' }}></div>
      {/* <img src={imgtest} style={{ width: '320px', height: "380px"}}></img> */}
      </div>


      <div class="col-lg-6" >
      <div style={{ width: '320px', height: "380px" , outline: '1px solid black' , float: 'right' , marginRight: '35%'}}></div>
      {/* <img src={imgtest} style={{ width: '320px', height: "380px"}}></img> */}
      </div>
    
      <div class="col-lg-6">
      <div style={{ width: '320px', height: "380px" , outline: '1px solid black' , float: 'left' , marginLeft: '35%' , marginTop: '35px'}}></div>
      {/* <img src={imgtest} style={{ width: '320px', height: "380px", display: 'none'}}></img> */}
      </div>

      <div class="col-lg-6" >
      <div style={{ width: '320px', height: "380px" , outline: '1px solid black' , float: 'right' , marginRight: '35%' , marginTop: '35px'}} onClick={ test }></div>
      {/* <img src={imgtest} style={{ width: '320px', height: "380px" , display: 'none'}}></img> */}
      </div>
    </div>

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
