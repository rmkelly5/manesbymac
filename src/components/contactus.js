import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Helmet from "react-helmet"
import Image from "../components/image"
// import { url } from "inspector";


if (typeof window !== 'undefined') {
  window.initMap = function() {
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 40.193240, lng: -74.165349 },
      zoom: 10,
    })
    var marker = new window.google.maps.Marker({
      position:  { lat: 40.193240, lng: -74.165349 }
    })
    marker.setMap(map);
  }
}

const ContactUs = ({ blockHeight , backgroundColorVal , blockMarginTop}) => {
  return (
    <div 
      style={{ height : blockHeight , backgroundColor: backgroundColorVal , marginTop: blockMarginTop }} 
    >
      <h1 style={{ textAlign: "center", padding: "25px"}}>Contact Us</h1>
      <div className="row" style={{ paddingLeft: '100px', paddingRight: '100px', paddingBottom: '100px', paddingTop: '20px'  }}>
       
        <div className="col-lg-12">

          <div className="row"> 
          
            <div className="col-lg-6">

              <p className="" style={{ whiteSpace : 'pre-wrap' }} id="yui_3_17_2_1_1583186918645_1706">      
                <strong>T |&nbsp;732-938-3011</strong>
                <br /><br />
                <strong>SALON HOURS</strong>
                <br />Monday: Closed<br />Tuesday:&nbsp; 10am-7pm<br />Wednesday: 10am-7pm<br />Thursday: &nbsp;10am-8pm<br />Friday: &nbsp;10am-7pm<br />Saturday: 9am-5pm<br />Sunday: Closed      
              </p>

              <p className="" style={{ whiteSpace : 'pre-wrap' }}><strong>Location</strong>: <strong>Cathy and Danielle's Hair Salon</strong></p>

              <p className="" style={{ whiteSpace : 'pre-wrap' }}>93 Main Street </p>

              <p className="" style={{ whiteSpace : 'pre-wrap' }}>Farmingdale, NJ 07727</p>

              <p className="" style={{ whiteSpace : 'pre-wrap' }}>*48 Hour cancellation policy by telephone enforced</p>

            </div>


            <div id="map" className="col-lg-6" style={{ width: "100%" , height :"400px", backgroundColor : "grey"}}>
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
