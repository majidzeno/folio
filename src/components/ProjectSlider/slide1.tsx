import React from "react"
import styled from "styled-components/macro"
import { Slide } from "./styles"
import SvgIcon from "../svgIcons"
import Image from "../image"

const Slide1 = ({ next, prev }) => {
  return (
    <Slide style={{ backgroundColor: "#ffa39c" }}>
      <Slide.Background>WeTheTrillions</Slide.Background>
      <Slide.Project>
        <Slide.Logo>
          <SvgIcon name="weTheTrillions" />
        </Slide.Logo>
        <Slide.Category>Healthy meal delivery service - Web App</Slide.Category>
        <Slide.Tags>
          <Slide.Tag>React</Slide.Tag>
          <Slide.Tag>Next</Slide.Tag>
          <Slide.Tag>Node</Slide.Tag>
          <Slide.Tag>Styled-Components</Slide.Tag>
          <Slide.Tag>UI</Slide.Tag>
        </Slide.Tags>
        <Slide.Description
          style={{
            backgroundColor: "white",
          }}
        >
          <div>
            A web application helps people to find best healthy food that suit
            their health condition, throughout this project I've:
          </div>
          <Slide.Points style={{ paddingTop: "2%" }}>
            <Slide.Point>
              Fixed accessability issues in the old web application to meet{" "}
              <a
                href="https://www.w3.org/WAI/standards-guidelines/wcag/"
                target="_blank"
                rel="noopener noreferrer"
              >
                WCAG standards (Web Content Accessibility Guidelines).
              </a>
            </Slide.Point>
            <Slide.Point>
              Improved application SEO from 30% to 100% by using lighthouse
              KPIs.
            </Slide.Point>
            <Slide.Point>
              Collaborated with the design team to improve the UX by adding new
              features to the application and revamping other features.
            </Slide.Point>
            <Slide.Point>
              Migrating the application from React to be static and
              server-rendered using
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next
              </a>
              which improved the application performance and indexing.
            </Slide.Point>
          </Slide.Points>
        </Slide.Description>
        <Slide.Btn
          href="https://www.wethetrillions.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit
        </Slide.Btn>
        <Slide.NavBtns>
          {/* <Slide.NavBtn onClick={prev}>Prev</Slide.NavBtn> */}
          <Slide.NavBtn onClick={next}>Next Project</Slide.NavBtn>
        </Slide.NavBtns>
      </Slide.Project>
      <Slide.ProjectImage>
        {/* <div>
          <Slide.Category>
            Healthy meal delivery service - Web App
          </Slide.Category>
          <Slide.Tags>
            <Slide.Tag>React</Slide.Tag>
            <Slide.Tag>Next</Slide.Tag>
            <Slide.Tag>Node</Slide.Tag>
            <Slide.Tag>Styled-Components</Slide.Tag>
            <Slide.Tag>UI</Slide.Tag>
          </Slide.Tags>
        </div> */}
        <Slide.StyledImage>
          <Image name="weTheTrillions" />
        </Slide.StyledImage>
      </Slide.ProjectImage>
    </Slide>
  )
}

export default Slide1
