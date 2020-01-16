import React from "react"

import NavStyle from "./navstyle/navstyle"

const Nav = () => {
  return (
    <NavStyle>
      <nav style={{ textAlign: "center" }}>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="contact">Contact</a>
      </nav>
    </NavStyle>
  )
}

export default Nav
