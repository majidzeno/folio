import React from "react"
import SvgIcon from "./svgIcons"
import styled from "styled-components/macro"
import colors from "./colors"
import anime from "animejs"
import Particles from "react-tsparticles"
import Image from "./image"
import { Link } from "gatsby"

const AboutComponents = () => {
  const avatarRef = React.useRef(true)
  const deviceRef = React.useRef(true)
  const messageRef1 = React.useRef(true)
  const messageRef2 = React.useRef(true)
  const messageRef3 = React.useRef(true)
  const messageRef4 = React.useRef(true)
  const messageRef5 = React.useRef(true)

  const messageRef6 = React.useRef(true)
  const messageRef7 = React.useRef(true)
  const messageRef8 = React.useRef(true)
  const messageRef9 = React.useRef(true)
  const messageRef10 = React.useRef(true)
  const btnRef = React.useRef(true)

  const iphoneRef = React.useRef(true)
  const ipadRef = React.useRef(true)

  const tl = anime.timeline({})
  const tl1 = anime.timeline({})
  React.useEffect(() => {
    tl.add({
      targets: avatarRef.current,
      translateX: ["140%", "0%"],
      translateY: ["100%", "0%"],
      scale: [2, 1],
      borderRadius: ["0%", "50%"],
      easing: "easeInOutSine",
      duration: 1500,
      delay: 1500,
      autoplay: true,
    })

      .add({
        targets: deviceRef.current,
        opacity: [0, 1],
        translateY: [0, -5],
        translateX: [0, 0],
        easing: "easeInOutSine",
        duration: 1000,
        delay: 500,
        autoplay: true,
        direction: "alternate",
      })
      .add({
        targets: messageRef1.current,
        translateX: ["-200%", "0%"],
        easing: "easeInOutSine",
        duration: 500,
        delay: 500,
        autoplay: true,
      })
      .add({
        targets: messageRef2.current,
        translateX: ["-200%", "0%"],
        easing: "easeInOutSine",
        duration: 500,
        delay: 1000,
        autoplay: true,
      })
      .add({
        targets: messageRef3.current,
        translateX: ["-200%", "0%"],
        easing: "easeInOutSine",
        duration: 500,
        delay: 1500,
        autoplay: true,
      })
      .add({
        targets: messageRef4.current,
        translateX: ["-200%", "0%"],
        easing: "easeInOutSine",
        duration: 500,
        delay: 1500,
        autoplay: true,
      })
      .add({
        targets: messageRef5.current,
        translateX: ["-200%", "0%"],
        easing: "easeInOutSine",
        duration: 500,
        delay: 2000,
        autoplay: true,
      })
      .add({
        targets: btnRef.current,
        opacity: [0, 1],
        scale: [0, 1],
        easing: "easeInOutSine",
        duration: 500,
        autoplay: true,
      })
      .add({
        targets: ipadRef.current,
        translateY: ["500%", "500%"],
        easing: "easeInOutSine",
        duration: 100,
        autoplay: true,
      })
  }, [])
  const startAnimate = () => {
    tl1
      .add({
        targets: btnRef.current,
        opacity: 0,
        easing: "easeInOutSine",
        duration: 100,
        autoplay: true,
      })
      .add({
        targets: deviceRef.current,
        translateY: ["0", "500%"],
        easing: "easeInOutSine",
        // position: "absolute",
        duration: 1500,
        autoplay: true,
      })
      .add(
        {
          targets: avatarRef.current,
          translateX: "-150%",
          // borderRadius: ["0%", "50%"],
          easing: "easeInOutSine",
          duration: 500,
          // delay: 1500,
          autoplay: true,
        },
        "-=1500"
      )
      .add({
        targets: ipadRef.current,
        // position: "relative",
        translateY: ["500%", "-13%"],
        translateX: ["30%", "30%"],
        easing: "easeInOutSine",
        duration: 1500,
        autoplay: true,
      })

      .add({
        targets: messageRef6.current,
        translateX: ["-200%", "0%"],
        easing: "easeInOutSine",
        duration: 1500,
        delay: 500,
        autoplay: true,
      })
      .add({
        targets: messageRef7.current,
        translateX: ["-200%", "0%"],
        easing: "easeInOutSine",
        duration: 2000,
        delay: 500,
        autoplay: true,
      })
      .add({
        targets: messageRef8.current,
        translateX: ["-200%", "0%"],
        easing: "easeInOutSine",
        duration: 500,
        delay: 500,
        autoplay: true,
      })
    //   .add({
    //     targets: messageRef9.current,
    //     translateX: ["-200%", "0%"],
    //     easing: "easeInOutSine",
    //     duration: 500,
    //     delay: 500,
    //     autoplay: true,
    //   })
    //   .add({
    //     targets: messageRef10.current,
    //     translateX: ["-200%", "0%"],
    //     easing: "easeInOutSine",
    //     duration: 500,
    //     delay: 500,
    //     autoplay: true,
    //   })
  }
  //   const stopAnimate = () => {
  //     console.log("removed")

  //     anime.remove(avatarRef)
  //     anime.remove(deviceRef)
  //     anime.remove(btnRef)
  //     anime.remove(iphoneRef)
  //     anime.remove(ipadRef)
  //     anime.remove(messageRef1)
  //     anime.remove(messageRef2)
  //     anime.remove(messageRef3)
  //     anime.remove(messageRef4)
  //     anime.remove(messageRef5)
  //     anime.remove(messageRef6)
  //     anime.remove(messageRef7)
  //     anime.remove(messageRef8)
  //     // avatarRef
  //     // deviceRef
  //     // messageRef1
  //     // messageRef2
  //     // messageRef3
  //     // messageRef4
  //     // messageRef5
  //     // messageRef6
  //     // messageRef7
  //     // messageRef8
  //     // btnRef
  //     // iphoneRef
  //     // ipadRef
  //   }
  return (
    <Container>
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
              enable: false,
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
      {/* {console.log(tl)}
      <MoreBtn
        onClick={() => {
          tl.completed = true
        }}
      >
        Stop Animation
      </MoreBtn> */}
      <InnerContainer>
        <Content>
          <StyledImage ref={avatarRef}>
            <Image name="majidLogo" />
          </StyledImage>
          <Device ref={deviceRef}>
            <SvgIcon name="iphone" ref={iphoneRef} />
            <DeviceContent>
              <Message ref={messageRef1}>Hi There !</Message>
              <Message ref={messageRef2}>
                I am <span>Majid</span>
              </Message>
              <Message ref={messageRef3}>
                A frontend engineer based in Giza,Egypt.
              </Message>
              <Message ref={messageRef4}>
                I’m currently working as a frontend engineer with a great team
                in the heart of Cairo called “Unplugged” since 2017.
              </Message>
              <Message ref={messageRef5}>
                Besides my daily work, I enjoy playing with JS libraries,
                exploring new animation and css tricks, Stackoverflow-ing,
                building dummy products, and mastering Calisthenics.
              </Message>
            </DeviceContent>
          </Device>
          <IpadDevice ref={ipadRef}>
            <SvgIcon name="ipad" />
            <DeviceContentIpad>
              <Message>Hi There !</Message>
              <Message>
                I am <span>Majid</span>
              </Message>
              <Message>A frontend engineer based in Giza,Egypt.</Message>
              <Message>
                I’m currently working as a frontend engineer with a great team
                in the heart of Cairo called “Unplugged” since 2017.
              </Message>
              <Message>
                Besides my daily work, I enjoy playing with JS libraries,
                exploring new animation and css tricks, Stackoverflow-ing,
                building dummy products, and mastering Calisthenics.
              </Message>
              <Message ref={messageRef6}>
                I like helping others, back in colleage i was part of many
                student/community organizations like IEEE, ENACTUS, AIESEC.
              </Message>
              <Message ref={messageRef7}>
                I get pumped by new ideas, i love stories,
                adventures,experiences, books and many other things so if you
                have any, i you wantto discuss new ideas or new projects feel
                free to send a{" "}
                <a href="mailto:majid.eltayeb@gmail.com">message </a>to me any
                time.
              </Message>
              <Message ref={messageRef8}>
                or find me <Link to="/contacts">here</Link>
              </Message>
            </DeviceContentIpad>
          </IpadDevice>
          <MoreBtn onClick={startAnimate} ref={btnRef}>
            Tell me More
          </MoreBtn>
        </Content>
      </InnerContainer>
    </Container>
  )
}

export default AboutComponents

const Container = styled.div`
  width: 100%;
  height: calc(100% - 36px);
  /* border: 2px solid blue; */
  position: relative;
`
const StyledParticles = styled(Particles)`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
`

const InnerContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`
const Content = styled.div`
  /* border: 2px solid yellowgreen; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  min-width: 50%;
`
const Device = styled.div`
  /* border: 2px solid yellow; */
  width: 243px;
  display: flex;
  flex-direction: column;
  svg {
    position: absolute;
    /* top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
    width: 243px;
    /* border: 1px solid #ffa500; */
    z-index: 0;
  }
`
const DeviceContent = styled.div`
  border: 2px solid #00f;
  /* padding: 36px 25px 20px 25px; */
  border: 1px solid #0000;
  border-width: 36px 25px 20px 25px;
  z-index: 1;
  position: relative;
  width: 243px;
  height: 475px;
  display: flex;
  /* align-items: center; */
  justify-content: flex-start;
  flex-direction: column;
  overflow: hidden;
  /* height: 100%; */
`
const Message = styled.div`
  position: relative;
  /* background-color: #e5e5e5; */
  background-color: #fff;
  border-radius: 5px;
  border-top-left-radius: 0;
  margin-left: 12px;
  margin-top: 10px;
  padding: 5px;
  padding-left: 15px;
  font-size: 14px;
  font-family: RR;
  line-height: 18px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -14px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 15px 15px 0;
    border-color: transparent #fff transparent transparent;
  }
  span {
    font-weight: bold;
    font-size: 18px;
    font-family: RB;
  }
`
const IpadDevice = styled.div`
  position: absolute;
  svg {
    position: absolute;
    z-index: 0;
  }
`
const DeviceContentIpad = styled(DeviceContent)`
  width: 512px;
  height: 629px;
`
const MoreBtn = styled.div`
  background-color: white;
  color: black;
  cursor: pointer;
  position: relative;
  align-self: flex-end;
  /* margin-top: 50px; */
  font-size: 14px;
  border-radius: 20px;
  font-family: RR;
  padding: 5px 15px;
  /* margin-right: 25px; */
`

const StyledImage = styled.div`
  /* position: absolute; */
  width: 100px;
  height: 100px;
  /* top: 30%;
  left: 34%; */
  border-radius: 10%;
  overflow: hidden;
  width: 10em;
  height: 10em;
  /* transform: translate(-50%, -50%); */
`
