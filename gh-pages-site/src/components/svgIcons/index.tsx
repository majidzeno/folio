/** @format */

import React from "react"

import FolderOpen from "./FolderOpen"
import Folder from "./Folder"
import Resume from "./Resume"
import About from "./About"
import Contact from "./Contact"
import WeTheTrillions from "./WeTheTrillions"
import Lexus from "./Lexus"
import Iphone from "./Iphone"
import Ipad from "./Ipad"
import Twitter from "./Twitter"
import Linkedin from "./Linkedin"
import Facebook from "./Facebook"
import Medium from "./Medium"
import Instagram from "./Instagram"
import Codepen from "./Codepen"
import Stackoverflow from "./Stackoverflow"
import Github from "./Github"

const SvgIcon = (props: any) => {
  switch (props.name) {
    // case "about":
    //   return <About {...props} />
    // case "contact":
    //   return <Contact {...props} />
    // case "resume":
    //   return <Resume {...props} />
    // case "folder":
    //   return <Folder {...props} />
    // case "folderOpen":
    //   return <FolderOpen {...props} />
    case "weTheTrillions":
      return <WeTheTrillions {...props} />
    case "lexus":
      return <Lexus {...props} />
    case "iphone":
      return <Iphone {...props} />
    case "ipad":
      return <Ipad {...props} />

    case "twitter":
      return <Twitter {...props} />
    case "linkedin":
      return <Linkedin {...props} />
    case "facebook":
      return <Facebook {...props} />
    case "medium":
      return <Medium {...props} />
    case "instagram":
      return <Instagram {...props} />
    case "codepen":
      return <Codepen {...props} />
    case "stackoverflow":
      return <Stackoverflow {...props} />
    case "github":
      return <Github {...props} />
    default:
      return <div>icon</div>
  }
}

export default SvgIcon
