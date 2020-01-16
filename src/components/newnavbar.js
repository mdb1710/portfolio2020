import React from "react"

import { Navbar } from "react-bootstrap"
import { Nav } from "react-bootstrap"

const NewNavBar = () => {
  return (
    <>
      <Navbar bg="warning" variant="warning" justify-content="space-between">
        <Nav className="">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
    </>
  )
}

export default NewNavBar
