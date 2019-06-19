import React, { useEffect, useContext } from 'react'

import Skills from '../../components/Skills'
import { UserContext } from '../../contexts/UserContext'
import CV from '../../assets/cv'

import './Landing.css'

function Landing(props) {
  const { setUser } = useContext(UserContext)

  useEffect(() => {
    setUser(CV)
  }, [setUser])

  return (
    <div>
      <header>
        <h1>Paul Isache</h1>
        <code>Javascript developer</code>
      </header>

      <div className="wrapper">
        <Skills></Skills>
        <div>
          <h4>Description</h4>
        </div>
      </div>

    </div>
  )
}


export default Landing
