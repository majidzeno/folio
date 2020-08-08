import React, { Component } from "react"
import Particles from "react-tsparticles"
import colors from "./colors"
import styled, { css } from "styled-components/macro"
import { Link } from "gatsby"

const Landing = () => {
  return (
    <LandingWrapper>
      <StyledParticles
        options={{
          background: {
            color: {
              // value: "#fff",
              value: colors.background,
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: false,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              // value: "#000",
              value: colors.text,
            },
            links: {
              // color: "#000",
              color: colors.text,
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 50,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <LandingContent>
        <LandingContent.Left>
          <LandingContent.Title>Majid </LandingContent.Title>
        </LandingContent.Left>
        <LandingContent.Right>
          <LandingContent.Title> Eltayeb</LandingContent.Title>
          <LandingContent.Subtitle>
            <span>Frontend</span> Engineer
          </LandingContent.Subtitle>
        </LandingContent.Right>
        <LandingContent.Footer>
          <Btn to="/projects">projects</Btn>
          <Btn to="/about">about</Btn>
          <Btn to="/contacts">contacts</Btn>
        </LandingContent.Footer>
      </LandingContent>
    </LandingWrapper>
  )
}

export default Landing

const LandingWrapper = styled.div`
  /* border: 2px solid red; */
  height: 100vh;
  /* margin-top: -36px; */
  color: white;
  background: #000;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LandingContent: any = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-flow: row wrap;
  width: 100%;
`
const Left = styled.div`
  padding-right: 10px;
  width: 50%;
  text-align: right;
`
const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`
const Title = styled.h1`
  font-size: 90px;
  margin-bottom: 0;
  font-family: OB;
  text-transform: uppercase;
  letter-spacing: 3px;
`
const Subtitle = styled.h2`
  font-size: 40px;
  padding-left: 5px;
  font-family: OB;
  text-transform: uppercase;
  span {
    color: red;
  }
`
const Footer = styled.div`
  width: 40%;
  padding-top: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
LandingContent.Title = Title
LandingContent.Subtitle = Subtitle
LandingContent.Left = Left
LandingContent.Right = Right
LandingContent.Footer = Footer

const StyledParticles = styled(Particles)`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
`
const Btn = styled(Link)`
  background-color: ${colors.text};
  color: ${colors.background};
  text-decoration: none;
  text-transform: capitalize;
  font-family: RR;
  padding: 2px 27px;
  border-radius: 18px;
`
