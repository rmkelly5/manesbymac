//<link href="/stylesheets/style.css" rel="stylesheet"> 
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Helmet from "react-helmet"
import "./layout.css"


const NavHeader = () => {

  // javascript for navbar hide on scroll

  var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}

  return (
    <div>
    <Helmet>
      {/* including bootstrap css  */}
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
        
      {/* including font awesome incons */}
      <script src="https://kit.fontawesome.com/e2a027d1b1.js" crossorigin="anonymous"></script>

      {/*importing bootstrap */}
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      
      
    </Helmet>
    <nav id="navbar" class="navbar navbar-expand-md navbar-dark nav-div">
        <a class="navbar-brand logo-icon nav-anchor" href="#">MM</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav navlist navpos">
            <li class="nav-item active nav-li-item nav-anchor">
              <a class="nav-link nav-anchor" href="#">About<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item nav-li-item">
              <a class="nav-link" href="profile.html">Services</a>
            </li>
            <li class="nav-item dropdown nav-li-item">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Gallery
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item nav-li-item">
            <a class="nav-link" href="profile.html">Contact</a>
            </li>
            <li class="nav-item nav-li-item">
            <a class="nav-link" href="http://instagram.com/manesbymaceymorgan">
              <div><span class="fab fa-instagram fa-lg" aria-hidden="true"></span></div>
            </a>
            </li>
            <li class="nav-item nav-li-item">
            <a class="nav-link" href="http://facebook.com/manesbymaceymorgan">
              <div><span class="fab fa-facebook fa-lg" aria-hidden="true"></span></div>
            </a>
            </li>
          </ul>
         
      </div>
      </nav>
      </div>
  )
}

export default NavHeader   