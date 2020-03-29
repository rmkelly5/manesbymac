/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import NavHeader from "../components/navbar"
import ContentBlock from "./contentblock"
import ContactUs from "./contactus"
import Image from "../components/image"

import Header from "./header"
import "./layout.css"
import ServicesSection from "./servicesSection";
import ServicesSection1 from "./servicesSection.1";
import GallerySection from "./gallerySection";
import LandingView from "./landingView";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>

      

      {/* include navigation component  */}
      <NavHeader />
      
      {/* include sample content block components  */}
      <LandingView />
      
      {/* <ServicesSection blockHeight={'auto'} /> */}

      <ServicesSection1 blockHeight={'auto'} />
      
      <ContactUs blockHeight={800} backgroundColorVal={'#D1D7E0'} />

      <GallerySection blockHeight={1000} backgroundColorVal={'white'}/>

      



      {/* @@TODO - should be removed - do we want small 1 line footer? */}
      {/* <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div> */}

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
