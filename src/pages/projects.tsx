import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from "../components/ProjectSlider"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
const SecondPage = props => (
  <Layout location="Projects">
    <SEO title="Projects" />
    <Slider />
  </Layout>
)

export default SecondPage
