import React from "react"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div
      style={{
        margin: `3rem auto`,
        maxWidth: 850,
        padding: `0 1rem`,
        fontFamily: `Raleway, sans-serif`,
      }}
    >
      {children}
    </div>
  )
}

export default Layout
