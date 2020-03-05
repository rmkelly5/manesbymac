import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Helmet from "react-helmet"
import Image from "../components/image"
// import { url } from "inspector";

const ContactUs = ({ blockHeight , backgroundColorVal , blockMarginTop}) => {
  return (
    <div 
      style={{ height : blockHeight , backgroundColor: backgroundColorVal , marginTop: blockMarginTop }} 
    >
      <div className="row" style={{ padding: '100px'  }}>
       
        <div className="col-lg-12">

          <div className="row"> 
          
            <div className="col-lg-6">

              <p className="" style={{ whiteSpace : 'pre-wrap' }} id="yui_3_17_2_1_1583186918645_1706">      
                <strong>T |&nbsp;732-455-3966</strong>
                <br /><br />
                <strong>SALON HOURS</strong>
                <br />Monday: Closed<br />Tuesday:&nbsp; 11am-6pm<br />Wednesday: 11am-6pm<br />Thursday: &nbsp;11am-7pm<br />Friday: &nbsp;11am-8pm<br />Saturday: 10am-4pm<br />Sunday: Closed      
              </p>

              <p className="" style={{ whiteSpace : 'pre-wrap' }}><strong>Location</strong>: <strong>Boho Hair Salon</strong></p>

              <p className="" style={{ whiteSpace : 'pre-wrap' }}>621 Lake Ave, Suite 1B  ( First Floor) </p>

              <p className="" style={{ whiteSpace : 'pre-wrap' }}>Asbury Park NJ, 07712</p>

              <p className="" style={{ whiteSpace : 'pre-wrap' }}>*48 Hour cancellation policy by telephone enforced</p>

            </div>


            <div className="col-lg-6">
            Google Map

            </div>
          
          </div>

        </div>
      
      </div>

    </div>
  )
}

ContactUs.propTypes = {
  blockHeight : PropTypes.number,
  backgroundColorVal: PropTypes.string,
  blockMarginTop: PropTypes.number
}

ContactUs.defaultProps = {
  blockHeight: 500,
  backgroundColorVal: 'lightgrey',
  blockMarginTop: 0
}

export default ContactUs  
