import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Helmet from "react-helmet"
import Image from "./image"
// import { url } from "inspector";


const ServicesSection = ({ blockHeight , backgroundColorVal , blockMarginTop}) => {
  return (
    <div 
      style={{ height : blockHeight , backgroundColor: backgroundColorVal , marginTop: blockMarginTop }} 
    >
      <div className="row" style={{ padding: '50px'  }}>
       
        <div className="col-lg-12">
          <h1 style={{ textAlign : 'center' , paddingBottom : '50px'}}> Services </h1>
          <div className="row"> 
          
            <div className="col-lg-12" style={{ display: 'flex' , flexWrap : 'wrap'}}>

              <div class="col-one skills-col col-lg-4 col-md-4" style={{ textAlign : 'center', paddingBottom : '50px' }}>
                <h3 class="resume-h3"> Cuts </h3>
                <ul style={{ listStyleType : 'none' , margin : 0 }}>
                  <li> Sample Cuts</li> 
                  <li> Sample Cuts</li> 
                  <li> Sample Cuts</li> 
                  <li> Sample Cuts</li> 
                </ul>
              </div>

              <div class="col-one skills-col col-lg-4 col-md-4" style={{ textAlign : 'center' , paddingBottom : '50px' }}>
                <h3 class="resume-h3"> Color </h3>
                <ul style={{ listStyleType : 'none' , margin : 0 }}>
                  <li> Sample Cuts</li> 
                  <li> Sample Cuts</li> 
                  <li> Sample Cuts</li> 
                  <li> Sample Cuts</li> 
                </ul>
              </div>

              <div class="col-one skills-col col-lg-4 col-md-4" style={{ textAlign : 'center' , paddingBottom : '50px' }}>
                <h3 class="resume-h3"> Combo </h3>
                <ul style={{ listStyleType : 'none' , margin : 0 }}>
                  <li> Sample Cuts</li> 
                  <li> Sample Cuts</li> 
                  <li> Sample Cuts</li> 
                  <li> Sample Cuts</li> 
                </ul>
              </div>

              <div class="col-one skills-col col-lg-4" style={{ textAlign : 'center' , paddingBottom : '50px'}}>
                <h3 class="resume-h3"> Bleaching Serivces </h3>
                <ul style={{ listStyleType : 'none' , margin : 0 }}>
                  <li> Sample Cuts</li> 
                  <li> Sample Cuts</li> 
                  <li> Sample Cuts</li> 
                  <li> Sample Cuts</li> 
                </ul>
              </div>

              <div class="col-one skills-col col-lg-4 col-md-6" style={{ textAlign : 'center' , paddingBottom : '50px'}}>
                <h3 class="resume-h3" style={{ textAlign : 'center' }}> Styling </h3>
                <ul style={{ listStyleType : 'none' , margin : 0 }}>
                  <li> Sample Cuts</li> 
                  <li> Sample Cuts</li> 
                  <li> Sample Cuts</li> 
                  <li> Sample Cuts</li> 
                </ul>
              </div>

              <div class="col-one skills-col col-lg-4 col-md-6" style={{ textAlign : 'center' , paddingBottom : '50px'}}>
                <h3 class="resume-h3"> Extensions </h3>
                <ul style={{ listStyleType : 'none' , margin : 0 }}>
                  <li> Sample Cuts</li> 
                  <li> Sample Cuts</li> 
                  <li> Sample Cuts</li> 
                  <li> Sample Cuts</li> 
                </ul>
              </div>

              <div class="col-one skills-col col-lg-12" style={{ textAlign : 'center' }}>
                <h3 class="resume-h3"> Keratin Treatments </h3>
                <ul style={{ listStyleType : 'none' , margin : 0 }}>
                  <li> Sample Cuts</li> 
                  <li> Sample Cuts</li> 
                  <li> Sample Cuts</li> 
                  <li> Sample Cuts</li> 
                </ul>
              </div>

            </div>
          
          </div>

        </div>
      
      </div>

    </div>
  )
}

ServicesSection.propTypes = {
  blockHeight : PropTypes.number,
  backgroundColorVal: PropTypes.string,
  blockMarginTop: PropTypes.number
}

ServicesSection.defaultProps = {
  blockHeight: 500,
  backgroundColorVal: 'lightgrey',
  blockMarginTop: 0
}

export default ServicesSection  