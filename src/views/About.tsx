import React from 'react'
import SubBanner from '../components/SubBanner'
import Team from '../components/Team'
import Concepts from '../components/Concepts'

const About = () => {
  return (
    <div className="about">
      <SubBanner name="about"/>
      <Concepts />
      <Team />
    </div>
  )
}

export default About
