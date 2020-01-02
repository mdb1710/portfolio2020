import React from "react"

import Header from "../components/header"
import Layout from "../components/layout"
import AboutMe from "../components/about"
import Extra from "../components/extra"
import Projects from "../components/projects"
import Footer from "../components/footer"

const App = () => {
  return (
    <>
      <Header />
      <Layout>
        <AboutMe />
        <Extra />
        <Projects />
      </Layout>
      <Footer />
    </>
  )
}

export default App
