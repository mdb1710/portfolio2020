import React from "react"
import navStyles from "./navstyle.module.css"

const NavStyle = ({ children }) => (
  <div className={navStyles.container}>{children}</div>
)

export default NavStyle
