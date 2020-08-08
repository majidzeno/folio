import React from "react"
import styled from "styled-components/macro"
import { Link } from "gatsby"

// import Image from "./image"
import SvgIcon from "./svgIcons"

type IconProps = {
  iconName: string
  text: string
}
const IconWithText = ({ iconName, text }: IconProps) => {
  const url = "/" + text
  return (
    <IconWithTextWrapper to={url}>
      <Icon>
        <SvgIcon name={iconName} />
      </Icon>
      <Icon.Text>{text}</Icon.Text>
    </IconWithTextWrapper>
  )
}

export default IconWithText

const IconWithTextWrapper = styled(Link)`
  /* border: 1px solid red; */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  margin: 20px 0;
  text-decoration: none;
  color: black;
`
const Icon: any = styled.div`
  max-width: 40px;
  width: 100%;
  height: 40px;
  svg {
    width: 100%;
    height: 100%;
  }
`
const Text = styled.p`
  /* color: white; */
  font-family: R;
  font-size: 14px;
  text-transform: capitalize;
  margin: 0;
`
Icon.Text = Text
