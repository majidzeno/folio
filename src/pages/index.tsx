import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Modal from "../components/modal"
import Landing from "../components/landing"

const IndexPage = () => {
  return (
    <Layout location="">
      <SEO title="Home" />
      <Landing />
    </Layout>
  )
}

export default IndexPage
