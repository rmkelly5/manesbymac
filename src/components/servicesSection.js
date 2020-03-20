import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Helmet from "react-helmet"
import Image from "./image"
import imgtest from "../images/test_1.png"
// import { url } from "inspector";



const ServicesSection = ({ blockHeight , backgroundColorVal , blockMarginTop}) => {
  return (
    <div 
      style={{ height : blockHeight , marginTop: blockMarginTop  }} 
      id="servicesSection"
      className="Logo"
    > 
      <div className="LogoOp">
      <div className="row" style={{ padding: '25px'  }}>
       
        <div className="col-lg-12">
          <h1 style={{ textAlign : 'center' , paddingBottom : '50px'}}> Services </h1>
          <div className="row"> 
          
            <div className="col-lg-12" style={{ display: 'flex' , flexWrap : 'wrap'}}>

              <div className="col-one skills-col col-lg-4 col-md-4" style={{ textAlign : 'center', paddingBottom : '50px' }}>
              <a class="" data-toggle="collapse" data-target="#testId" href="#0" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><h3 className="resume-h3"> Cuts </h3> </a>
                {/* <h3 className="resume-h3"> Cuts </h2> */}
                <ul id="testId" style={{ listStyleType : 'none' , margin : 0 }}
                  className="collapse multi-collapse">
                  <li> <h6 style={{  paddingTop : '10px'  }}> WOMAN </h6> </li> 
                  <li> $35+ with blowout </li> 
                  <li> $25+ with blowout </li> 
                  <li> <h6 style={{  paddingTop : '10px'  }}> CHILDREN </h6> </li> 
                  <li> $20+ with blowout </li> 
                  <li> $15+ with blowout </li> 
                  <li> <h6 style={{  paddingTop : '10px'  }}> TRIM </h6> </li>
                  <li> $15+ </li>  
                </ul>

                <h2 className="resume-h3" style={{  paddingTop : '55px'  }}> Extensions </h2>
                <ul style={{ listStyleType : 'none' , margin : 0 }}>
                  <li> <h6 style={{  paddingTop : '10px'  }}> Down Style </h6> </li> 
                  <li> $50+ </li> 
                  <li> <h6 style={{  paddingTop : '10px'  }}> Up do </h6> </li> 
                  <li> $75+ </li> 
                  <li> Will pay for the hair the day we order it </li> 
                  <li> Will pay for the installation the day we order it </li>
                  <li> <h6 style={{  paddingTop : '10px'  }}> Tape in strand </h6> </li> 
                  <li> $5 per strand </li> 
                  <li> <h6 style={{  paddingTop : '10px'  }}> Fusion/micro-bead/I-tip strand </h6> </li> 
                  <li> $10 per strand </li> 
                </ul>
              </div>

              <div className="col-one skills-col col-lg-4 col-md-4" style={{ textAlign : 'center' , paddingBottom : '50px' }}>
                <h2 className="resume-h3"> Color </h2>
                <ul style={{ listStyleType : 'none' , margin : 0 }}>
                  <li> <h6 style={{  paddingTop : '10px'  }}> Single Process Full </h6> </li> 
                  <li> $80+ </li> 
                  <li> <h6 style={{  paddingTop : '10px'  }}> Single Process Root </h6> </li> 
                  <li> $80+ </li> 
                  <li> <h6 style={{  paddingTop : '10px'  }}> Double Process </h6> </li> 
                  <li> $90+ </li> 
                  <li> <h6 style={{  paddingTop : '10px'  }}> Toner </h6> </li> 
                  <li> $45+ </li> 
                  <li> <h6 style={{  paddingTop : '10px'  }}> Toner with bleaching service </h6> </li> 
                  <li> $25 </li> 
                  <li> <h6 style={{  paddingTop : '10px'  }}> Express Root Touch Up </h6> </li> 
                  <li> $35 </li> 
                  <li> <h6 style={{  paddingTop : '10px'  }}> Color correction </h6> </li> 
                  <li> consultation needed </li> 
                </ul>
              </div>

              <div className="col-one skills-col col-lg-4 col-md-4" style={{ textAlign : 'center' , paddingBottom : '50px' }}>
                <h2 className="resume-h3"> Combo </h2>
                <ul style={{ listStyleType : 'none' , margin : 0 }}>
                  <li> <h6 style={{  paddingTop : '10px'  }}> Color, Hair Cut, and Blowout </h6> </li> 
                  <li> 95$ </li> 
                </ul>

                <h2 className="resume-h3 bleaching-services-top"> Bleaching Serivces </h2>
                <ul style={{ listStyleType : 'none' , margin : 0 }}>
                  <li> <h6 style={{  paddingTop : '10px'  }}> Partial Hightlights </h6> </li> 
                  <li> $75+ </li> 
                  <li> <h6 style={{  paddingTop : '10px'  }}> Full Head Hightlights </h6> </li> 
                  <li> $100+ </li> 
                  <li> <h6 style={{  paddingTop : '10px'  }}> Ombre </h6> </li> 
                  <li> $120+ </li> 
                  <li> <h6 style={{  paddingTop : '10px'  }}> Full Head Hightlights </h6> </li> 
                  <li> $100+ </li> 
                </ul>
              </div>

              {/* <div className="col-one skills-col col-lg-4" style={{ textAlign : 'center' , paddingBottom : '50px'}}>
                <h2 className="resume-h3"> Bleaching Serivces </h2>
                <ul style={{ listStyleType : 'none' , margin : 0 }}>
                  <li> Partial Hightlights </li> 
                  <li> $75+ </li> 
                  <li> Full Head Hightlights </li> 
                  <li> $100+ </li> 
                  <li> Ombre </li> 
                  <li> $120+ </li> 
                  <li> Full Head Hightlights </li> 
                  <li> $100+ </li> 
                </ul>
              </div> */}

              {/* <div className="col-one skills-col col-lg-4 col-md-6" style={{ textAlign : 'center' , paddingBottom : '50px'}}>
                <h2 className="resume-h3" style={{ textAlign : 'center' }}> Styling </h2>
                <ul style={{ listStyleType : 'none' , margin : 0 }}>
                  <li> Sample Cuts</li> 
                  <li> Sample Cuts</li> 
                  <li> Sample Cuts</li> 
                  <li> Sample Cuts</li> 
                </ul>
              </div> */}

              {/* <div className="col-one skills-col col-lg-4 col-md-6" style={{ textAlign : 'center' , paddingBottom : '50px'}}>
                <h2 className="resume-h3"> Extensions </h2>
                <ul style={{ listStyleType : 'none' , margin : 0 }}>
                  <li> <h6 style={{  paddingTop : '10px'  }}> Down Style </h6> </li> 
                  <li> $50+ </li> 
                  <li> <h6 style={{  paddingTop : '10px'  }}> Up do </h6> </li> 
                  <li> $75+ </li> 
                  <li> Will pay for the hair the day we order it </li> 
                  <li> Will pay for the installation the day we order it </li>
                  <li> <h6 style={{  paddingTop : '10px'  }}> Tape in strand </h6> </li> 
                  <li> $5 per strand </li> 
                  <li> <h6 style={{  paddingTop : '10px'  }}> Fusion/micro-bead/I-tip strand </h6> </li> 
                  <li> $10 per strand </li> 
                </ul>
              </div> */}

              <div className="col-lg-2"></div>

              <div className="col-one skills-col col-lg-8 keratin-treatments-top" style={{ textAlign : 'center' }}>
              <h2 className="resume-h3"> Keratin Treatments </h2>
                <ul style={{ listStyleType : 'none' , margin : 0 }}>
                  <li> <h6 style={{  paddingTop : '10px'  }}> Regular Signature Treatment </h6> </li> 
                  <li> $27 , 3 day marginal needed </li> 
                  <li> Stronger treatment , lasts 4-6 months , Eliminates frizz without straightning hair </li> 
                  <li> <h6 style={{  paddingTop : '10px'  }}> Express Blowout </h6> </li> 
                  <li> $12 </li> 
                  <li> Lighter treatment , lasts 6-8 weeks , Eliminates frizz without straightning hair </li> 
                  <li> <h6 style={{  paddingTop : '10px'  }}> KCMAX Treatment </h6> </li> 
                  <li> $25 </li> 
                  <li> Strongest Solution , lasts 4-6 months , Completley Eliminates frizz while flattening the hair and slightly straightening it </li> 
                  <li> <h6 style={{  paddingTop : '10px'  }}> Keratin Shot </h6> </li> 
                  <li> $25 </li> 
                  <li> Lightest treatment as it does not elimate frizz or straighten hair permanently, This is a conditioning treatment meant for damaged or unruly hair , Can be added to your bleach or color  </li> 
                </ul>
              </div>

              <div className="col-lg-2"></div>

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