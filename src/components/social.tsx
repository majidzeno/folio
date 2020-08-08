import React from "react"
import Particles from "react-tsparticles"
import colors from "./colors"
import styled, { css } from "styled-components/macro"
import { Link } from "gatsby"
import SvgIcon from "./svgIcons"
const Social = () => {
  const [colorPal, setColorPal] = React.useState({
    background: "#000",
    particlesColor: "#fff",
  })
  const ColorMe = (channel: string) => {
    switch (channel) {
      case "twitter":
        setColorPal({ background: "#00aced", particlesColor: "#fff" })
        break
      case "linkedin":
        setColorPal({ background: "#007fb1", particlesColor: "#000" })
        break
      case "facebook":
        setColorPal({ background: "#3b5998", particlesColor: "#fff" })
        break
      case "medium":
        setColorPal({
          background: "linear-gradient(#000, #192f2c)",
          particlesColor: "#fff",
        })
        break
      case "instagram":
        setColorPal({
          background: `linear-gradient(#400080, transparent),
         linear-gradient(200deg, #d047d1, #ff0000, #ffff00)`,
          particlesColor: "#000",
        })
        break
      case "codepen":
        setColorPal({
          background: "linear-gradient(#000, #8e8e8e)",
          particlesColor: "#fff",
        })
        break
      case "stackoverflow":
        setColorPal({ background: "#fb9537", particlesColor: "#000" })
        break
      case "github":
        setColorPal({
          //   background: "linear-gradient(#000, #373636)",
          background: "#fff",
          particlesColor: "#000",
        })
        break
      default:
        setColorPal({
          background: "linear-gradient(#000, #373636)",
          particlesColor: "#fff",
        })
        break
    }
  }
  return (
    <SocialWrapper>
      <StyledParticles
        color={colorPal.background}
        options={{
          background: {
            color: {
              value: "#0000",
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
              value: colorPal.particlesColor,
            },
            links: {
              // color: "#000",
              color: colorPal.particlesColor,
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
      <SocialContentWrapper color={colorPal.particlesColor}>
        <h1>Find me on</h1>
        <SocialContent>
          <SocialLink
            href="https://twitter.com/majidzeno"
            className="twitter"
            target="__blank"
            onMouseOver={() => ColorMe("twitter")}
          >
            {/* Twitter */}
            <SvgIcon name="twitter" />
          </SocialLink>
          <SocialLink
            href="https://www.facebook.com/majid.zeno"
            className="facebook"
            target="__blank"
            onMouseOver={() => ColorMe("facebook")}
          >
            {/* Facebook */}
            <SvgIcon name="facebook" />
          </SocialLink>

          <SocialLink
            href="https://github.com/majidzeno"
            className="github"
            target="__blank"
            onMouseOver={() => ColorMe("github")}
          >
            {/* Github */}
            <SvgIcon name="github" />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/majidzeno/"
            className="linkedin"
            target="__blank"
            onMouseOver={() => ColorMe("linkedin")}
          >
            {/* Linkedin */}
            <SvgIcon name="linkedin" />
          </SocialLink>
          <SocialLink
            href="https://medium.com/@majidzeno"
            className="medium"
            target="__blank"
            onMouseOver={() => ColorMe("medium")}
          >
            {/* Medium */}
            <SvgIcon name="medium" />
          </SocialLink>
          <SocialLink
            href="https://www.instagram.com/majidzeno/"
            className="instagram"
            target="__blank"
            onMouseOver={() => ColorMe("instagram")}
          >
            {/* Instagram */}
            <SvgIcon name="instagram" />
          </SocialLink>
          <SocialLink
            href="https://codepen.io/majidzeno/"
            className="codepen"
            target="__blank"
            onMouseOver={() => ColorMe("codepen")}
          >
            {/* Codepen */}
            <SvgIcon name="codepen" />
          </SocialLink>
          <SocialLink
            href="https://stackoverflow.com/users/6669995/majid-eltayeb"
            className="envelope"
            target="__blank"
            onMouseOver={() => ColorMe("stackoverflow")}
          >
            {/* Stackoverflow */}
            <SvgIcon name="stackoverflow" />
          </SocialLink>
        </SocialContent>
      </SocialContentWrapper>
    </SocialWrapper>
  )
}

export default Social

const SocialWrapper = styled.div`
  width: 100%;
  height: calc(100% - 36px);
`
const StyledParticles: any = styled(Particles)`
  position: absolute;
  z-index: 0;
  top: 36px;
  left: 0;
  height: 100vh;
  width: 100%;

  canvas {
    background: ${props => props.color} !important;
    transition: 0.5s all ease-out;
  }
`
const SocialContentWrapper: any = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: space-evenly;

  h1 {
    color: ${props => props.color};
    font-family: OB;
    text-transform: uppercase;
    transition: 0.5s all ease-out;
  }
`
const SocialContent: any = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-flow: row wrap;
  width: 100%;
  background-color: #fff;
`
const SocialLink = styled.a`
  margin: 30px;

  svg {
    width: 30px;
    height: 30px;
  }
`
