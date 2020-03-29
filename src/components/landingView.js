import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Helmet from "react-helmet"
import testvid from "../images/Under_the_Sea.mp4"
import $ from 'jquery';

const LandingView = ({ }) => {
  
  // include jquery
  //const $ = require("jquery");
  //typeof $ !== `undefined` ? require("jquery") : null
  //const $ = typeof window !== `undefined` ? require("jquery") : null

  if (typeof window !== `undefined`) {

  $( document ).ready(function() { 
    var vid = document.getElementById("vid");
    vid.addEventListener("timeupdate", function () {
        if(this.currentTime >= 5.0) {
            this.currentTime = 0.0;
        }
    });

    var banner = document.querySelector('.banner');
    var bannerVideo = document.querySelector('.banner__video');

    if (/iPad|iPhone|iPod/.test(navigator.platform)) {
      banner.style.backgroundImage = 'url("' + bannerVideo.poster + '")';
      banner.style.backgroundSize = 'cover';
      banner.style.backgroundPosition = 'center';
      bannerVideo.style.display = 'none';
    }

  });

  
}
  
  
  return (
    
    <div style={{ height : '600px'}} className="banner">
      <h2 style={{ zIndex : '2' , position : 'relative' , paddingTop : '150px' , fontFamily : " 'Pacifico', cursive " 
                    , textAlign : 'center' , fontSize : '75px' , textShadow : 'rgba(0, 0, 0, 0.3) -10px 10px 18px, rgba(192, 128, 255, 0.1) 10px -10px 30px'}} >MM</h2>

      <h2 style={{ zIndex : '2' , position : 'relative' , paddingTop : '50px' , fontFamily : " 'Quicksand', sans-serif " 
                    , textAlign : 'center' , fontSize : '50px'}} >Manes By Macey</h2>

      <h2 style={{ zIndex : '2' , position : 'relative' , paddingTop : '35px' , fontFamily : " 'Quicksand', sans-serif" 
                    , textAlign : 'center' , fontSize : '18px'}} >Hair Artist Based in Central New Jersey</h2>    

      <video className="vidtest2" id="vid" preload muted="muted" autoplay="autoplay" playsinline="playsinline" loop="loop"  >
        <source src={testvid} type="video/mp4"></source>
      </video> 
    </div>

  )
}

LandingView.propTypes = {

}

LandingView.defaultProps = {

}

export default LandingView  