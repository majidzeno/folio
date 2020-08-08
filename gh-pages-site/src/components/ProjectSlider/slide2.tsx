import React from "react"
import styled from "styled-components/macro"
import { Slide } from "./styles"
import SvgIcon from "../svgIcons"
import Image from "../image"

const Slide2 = ({ next, prev }) => {
  return (
    <Slide style={{ backgroundColor: "white" }}>
      <Slide.Background style={{ color: "#000" }}>LEXUS</Slide.Background>
      <Slide.Project>
        <Slide.Logo>
          <SvgIcon name="lexus" />
        </Slide.Logo>
        <Slide.Category>Car Service - Web App</Slide.Category>
        <Slide.Tags>
          <Slide.Tag>Javascript</Slide.Tag>
          <Slide.Tag>Sass</Slide.Tag>
          <Slide.Tag>CMS</Slide.Tag>
          <Slide.Tag>UI</Slide.Tag>
        </Slide.Tags>
        <Slide.Description
          style={{
            backgroundColor: "black",
            color: "white",
          }}
        >
          <div>
            A web application for Lexus KSA, a tool that have many features to
            help the users to:
          </div>
          <Slide.Points>
            <Slide.Point> Know more about the company</Slide.Point>
            <Slide.Point> Compare between models </Slide.Point>
            <Slide.Point> Know each model price </Slide.Point>
            <Slide.Point> Request test drives</Slide.Point>
            <Slide.Point> Reserve a maintenance check </Slide.Point>
            <Slide.Point> Technology overview</Slide.Point>
            <Slide.Point>
              Engineering behind the designs and more information about the
              company and their products.
            </Slide.Point>
          </Slide.Points>
          <div>
            The web application integrated with a CMS to allow employers to add
            and update company website and manage users reservations, also
            internationalization provided to the application since it was for a
            branch in the middle east.
          </div>
        </Slide.Description>
        <Slide.Btn
          href="https://www.lexus.com.sa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit
        </Slide.Btn>
        <Slide.NavBtns>
          <Slide.NavBtn onClick={prev}>Previous Project</Slide.NavBtn>
          {/* <Slide.NavBtn onClick={next}>Next Project</Slide.NavBtn> */}
        </Slide.NavBtns>
      </Slide.Project>
      <Slide.ProjectImage
      // style={{ marginBottom: "180px" }}
      >
        {/* <div>
          <Slide.Category>Car Service - Web App</Slide.Category>
          <Slide.Tags>
            <Slide.Tag>Javascript</Slide.Tag>
            <Slide.Tag>Sass</Slide.Tag>
            <Slide.Tag>CMS</Slide.Tag>
            <Slide.Tag>UI</Slide.Tag>
          </Slide.Tags>
        </div> */}
        <Slide.StyledImage>
          <Image name="lexus" />
        </Slide.StyledImage>
      </Slide.ProjectImage>
    </Slide>
  )
}

export default Slide2
