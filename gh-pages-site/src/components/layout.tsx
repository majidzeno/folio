import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components/macro"
import colors from "./colors"
import Header from "./header"
import "./layout.css"
import Sidebar from "./sidebar"
const Layout = ({
  children,
  location,
}: {
  children: any
  location: string
}) => {
  return (
    <>
      <Header location={location} />
      <Container
        style={{
          margin: `0 auto`,
        }}
      >
        {/* <Sidebar /> */}
        <Main>{children}</Main>
      </Container>
      {/* <footer>© {new Date().getFullYear()}, Built with</footer> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Main = styled.main`
  background-color: ${colors.background};
  width: 100vw;
  /* height: 97vh; */
  height: 100vh;
  flex: 10;
  padding-top: 36px;
`
const Container = styled.div`
  display: flex;
  max-height: 100vh;
  height: 100%;
  overflow: hidden;
`
