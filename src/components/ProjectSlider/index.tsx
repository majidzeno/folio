import React from "react"
import Slider from "react-slick"
import Slide1 from "./slide1"
import Slide2 from "./slide2"
import styled from "styled-components/macro"

const ProjectsSlider = () => {
  const sliderRef = React.useRef(null)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    accessibility: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    // beforeChange: (i1, i2) => {
    //   setActiveAnimation(i2)
    // },
  }
  const keyStrokFunction = React.useCallback(event => {
    if (event.keyCode === 39) {
      nextSlide()
    }
    if (event.keyCode === 37) {
      prevSlide()
    }
  }, [])

  React.useEffect(() => {
    document.addEventListener("keydown", keyStrokFunction, false)
    return () => {
      document.removeEventListener("keydown", keyStrokFunction, false)
    }
  }, [])

  const nextSlide = () => {
    sliderRef.current.slickNext()
  }
  const prevSlide = () => {
    sliderRef.current.slickPrev()
  }
  return (
    <SliderWrapper>
      <StyledSlider ref={sliderRef} {...settings}>
        <Slide1 next={nextSlide} prev={prevSlide} />
        <Slide2 next={nextSlide} prev={prevSlide} />
      </StyledSlider>
    </SliderWrapper>
  )
}

export default ProjectsSlider

export const StyledSlider = styled(Slider)`
  height: 100%;
  /* padding: 15px; */
`
export const SliderWrapper = styled.div`
  width: 100%;
  /* max-width: 88vw; */
  height: 100%;
  overflow: hidden;
  position: relative;
  background-color: coral;
`
