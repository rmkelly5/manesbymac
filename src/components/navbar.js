//<link href="/stylesheets/style.css" rel="stylesheet"> 
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Helmet from "react-helmet"
import "./layout.css"


const NavHeader = () => {

  return (
    <div>
    <Helmet>
      {/* including bootstrap css  */}
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
        
      {/* including font awesome incons */}
      <script src="https://kit.fontawesome.com/e2a027d1b1.js" crossorigin="anonymous"></script>
    </Helmet>
    <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand logo-icon" href="#">MM</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav navlist navpos">
            <li class="nav-item active">
              <a class="nav-link" href="#">About<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="profile.html">Services</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Contact</a>
            </li>
          </ul>
          
      </div>
      </nav>
      </div>
  )
}

export default NavHeader   