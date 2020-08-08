import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Social from "../components/social"
const SecondPage = () => (
  <Layout location="Contacts">
    <SEO title="Social" />
    <Social />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
