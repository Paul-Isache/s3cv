import React, { useEffect, useContext } from 'react'

import Skills from '../../components/Skills'
import Projects from '../../components/Projects';

import { UserContext } from '../../contexts/UserContext'
import CV from '../../assets/cv'

import './Landing.css'

function Landing(props) {
  const { setUser } = useContext(UserContext)

  useEffect(() => {
    setUser(CV)
  }, [setUser])

  return (
    <div className="landing">
      <header>
        <h1>Paul Isache</h1>
        <code>Javascript developer</code>
      </header>

      <div className="content-wrapper">
        <Skills />
        <Projects />
      </div>
    </div>
  )
}


export default Landing
