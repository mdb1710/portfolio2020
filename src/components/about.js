import React from "react"

const AboutMe = () => {
  return (
    <div className="about-me" style={{ textAlign: "center" }}>
      <h2>About me</h2>
      <p class="">
        After a career of promoting other people's creations I am branching out
        as a web developer to create and promote some of my own. I am currently
        in the Thinkful Engineering Immersion Bootcamp to help fulfill this
        goal. I've always been too curious for my own good and now I'm using my
        skills for four main purposes:
      </p>
      <div className="container">
        <div className="reason">
          Compose code and apps to make new things work.
        </div>
        <div className="reason">
          Optimize current apps to make good things work better.
        </div>
        <div className="reason">
          Develop new 'toys' to help accomplish the first two goals
        </div>
        <div className="reason">
          Experience the world inside & outside of the screen.
        </div>
      </div>
    </div>
  )
}

export default AboutMe
