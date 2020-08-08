import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

type ImageProps = {
  name: string
}

const Image = ({ name }: ImageProps) => {
  const data = useStaticQuery(graphql`
    query {
      majidLogo: file(relativePath: { eq: "majidLogo.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      folder: file(relativePath: { eq: "folder.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      folderOpen: file(relativePath: { eq: "folder-open.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      resume: file(relativePath: { eq: "resume.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      about: file(relativePath: { eq: "about.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      contact: file(relativePath: { eq: "contact.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      close: file(relativePath: { eq: "close.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      weTheTrillions: file(relativePath: { eq: "weTheTrillions.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lexus: file(relativePath: { eq: "lexus.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  switch (name) {
    case "majidLogo":
      return <Img fluid={data.majidLogo.childImageSharp.fluid} />
    case "folder":
      return <Img fluid={data.folder.childImageSharp.fluid} />
    case "folderOpen":
      return <Img fluid={data.folderOpen.childImageSharp.fluid} />
    case "resume":
      return <Img fluid={data.resume.childImageSharp.fluid} />
    case "about":
      return <Img fluid={data.about.childImageSharp.fluid} />
    case "contact":
      return <Img fluid={data.contact.childImageSharp.fluid} />
    case "close":
      return <Img fluid={data.close.childImageSharp.fluid} />
    case "weTheTrillions":
      return <Img fluid={data.weTheTrillions.childImageSharp.fluid} />
    case "lexus":
      return <Img fluid={data.lexus.childImageSharp.fluid} />

    default:
      return <div>Image</div>
  }
}

export default Image
