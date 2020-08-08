import { Link } from "gatsby"
import React from "react"
import styled from "styled-components/macro"
import Image from "./image"
import colors from "./colors"

const Header = ({ location }: { location: string }) => {
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <Link to="/">
          <StyledImage>
            <Image name="majidLogo" />
          </StyledImage>
          <NameTitle>
            Majid Eltayeb | <span>Frontend</span> Engineer
          </NameTitle>
        </Link>
        / <span>{location}</span>
      </HeaderLeft>
      <NavBar>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contacts">Contacts</Link>
      </NavBar>
    </HeaderWrapper>
  )
}

const LinkStyled = styled(Link)`
  /* font-family: Win; */
`

export default Header

const HeaderWrapper = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 36px;
  background-color: ${colors.background};
  color: ${colors.text};
  display: flex;
  align-items: center;
  font-weight: bold;
  justify-content: space-between;
`
const StyledImage = styled.div`
  width: 36px;
  height: 36px;
  margin-right: 20px;
`
const NameTitle = styled.div``
const NavBar = styled.div`
  /* border: 2px solid blue; */
  a {
    margin: 0 15px;
    color: white;
    text-decoration: none;
    font-family: RR;
  }
`
const HeaderLeft = styled.h1`
  font-size: 16px;
  margin: 0;
  padding: 5px 10px;
  font-family: OB;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  span {
    text-transform: capitalize;
    color: white;
  }
  a {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    span {
      color: red;
      text-transform: uppercase;
    }
  }
`
