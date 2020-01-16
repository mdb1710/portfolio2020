import React from "react"

import Header from "../components/header"
import Layout from "../components/layout"
import AboutMe from "../components/about"
import Extra from "../components/extra"
import Projects from "../components/projects"
import Footer from "../components/footer"
import Nav from "../components/nav"

// import { Router } from "@reach/router"

const App = () => {
  return (
    <>
      <Header />

      <Layout>
        <Nav />

        <AboutMe />
        <Extra />
      </Layout>
      <Projects />

      <Footer />
    </>
  )
}

export default App
