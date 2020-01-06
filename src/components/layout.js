import React from "react"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div
      className=""
      style={{
        padding: `0 1rem`,
        fontFamily: `Raleway, sans-serif`,
      }}
    >
      {children}
    </div>
  )
}

export default Layout
