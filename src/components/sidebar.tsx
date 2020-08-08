import React from "react"
import IconWithText from "./IconWithText"
import styled from "styled-components/macro"

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <IconsWrapper>
        <IconWithText iconName="folder" text="projects" />
        <IconWithText iconName="resume" text="resume" />
        <IconWithText iconName="about" text="about" />
        <IconWithText iconName="contact" text="contacts" />
      </IconsWrapper>
    </SidebarWrapper>
  )
}

export default Sidebar

const IconsWrapper = styled.div`
  /* border: 1px solid #ff0; */
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
`

const SidebarWrapper = styled.div`
  /* border: 1px solid red; */

  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  flex: 1;
  padding: 0 15px;
  padding-top: 36px;
`
