import styled from "styled-components/macro"
import colors from "../colors"
export const Slide: any = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  align-items: flex-end;
`
const Background = styled.div`
  position: absolute;
  font-family: RM;
  font-size: 900px;
  color: white;
  opacity: 0.1;
  transform: rotate(-32deg);
  transform-origin: -4% 50%;
`
const ProjectImage = styled.div`
  /* border: 2px solid yellowgreen; */
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  /* border: 2px solid; */
  justify-content: space-evenly;
`
const StyledImage = styled.div`
  width: 100%;
`
const Project = styled.div`
  /* border: 2px solid red; */
  padding: 0 50px;
  margin-bottom: 50px;
  position: relative;
  z-index: 1;
  flex: 1;
  align-self: center;
  display: flex;
  flex-direction: column;
`
const Logo = styled.div`
  /* border: 2px solid blue; */
`
const Category = styled.div`
  /* border: 2px solid green; */
  font-family: RM;
  margin: 25px 0;
`
const Tags = styled.ul`
  /* border: 2px solid yellow; */
  display: flex;
  align-items: center;
  margin: 25px 0;
  list-style: none;
  margin: 0;
  /* justify-content: space-between; */
`
const Tag = styled.li`
  background-color: ${colors.background};
  color: ${colors.text};
  border-radius: 20px;
  padding: 2px 15px;
  font-family: RM;
  font-size: 14px;
  margin-right: 15px;
`
const Description = styled.div`
  /* border: 2px solid aqua; */
  font-family: RR;
  margin: 25px 0;
  /* margin-left: 25px; */
  border-radius: 20px;
  padding: 3% 4%;
  padding-top: 4%;
  height: 250px;
  overflow: scroll;
`
const Points = styled.ul`
  margin: 0;
  margin-left: 25px;
  font-size: 15px;
`
const Point = styled.li`
  margin-bottom: 0;

  a {
    font-weight: bold;
    color: black;
    text-decoration: none;
    padding: 0 3px;
  }
`
const Btn = styled.a`
  background-color: ${colors.background};
  color: ${colors.text};
  text-decoration: none;
  text-transform: capitalize;
  font-family: RR;
  padding: 2px 27px;
  border-radius: 18px;
  align-self: flex-end;
`
const NavBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 15px;
`

const NavBtn = styled.div`
  background-color: ${colors.background};
  color: ${colors.text};
  text-transform: capitalize;
  font-family: RR;
  padding: 2px 27px;
  border-radius: 18px;
  cursor: pointer;
`

Slide.Background = Background
Slide.Project = Project
Slide.Logo = Logo
Slide.Category = Category
Slide.Tags = Tags
Slide.Tag = Tag
Slide.Description = Description
Slide.Points = Points
Slide.Point = Point
Slide.Btn = Btn
Slide.StyledImage = StyledImage
Slide.ProjectImage = ProjectImage
Slide.NavBtns = NavBtns
Slide.NavBtn = NavBtn
