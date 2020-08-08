import React from "react"
import styled from "styled-components/macro"
import Image from "./image"
const Modal = ({ children, style }: { children: any; style: any }) => {
  const [open, setOpen] = React.useState(true)
  const [focused, setFocused] = React.useState(false)
  return (
    <ModalWrapper
      style={style}
      isOpen={!!open}
      focused={!!focused}
      onClick={() => {
        console.log("focused")
        setFocused(true)
      }}
      onBlur={() => {
        setFocused(false)
      }}
    >
      <ModalHeader>
        <div
          onClick={() => {
            setOpen(false)
          }}
        >
          <Image name="close" />
        </div>
      </ModalHeader>
      {children}
    </ModalWrapper>
  )
}

export default Modal

const ModalWrapper = styled.div`
  /* border: 2px solid white; */
  /* background-color: white; */
  position: absolute;
  width: 50vw;
  height: 50vh;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #c0c0c0;
  border: 2px solid #f4f4f4;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  background-color: ${({ focused }) => (focused ? "hotpink" : "purple")};
  z-index: ${({ focused }) => (focused ? 1 : 0)};
`
const ModalHeader = styled.div`
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 20px;
  div {
    width: 10px;
    margin-right: 5px;
    cursor: pointer;
  }
`
