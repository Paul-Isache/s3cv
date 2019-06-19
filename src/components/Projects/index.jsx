import React, { useContext } from 'react'
import moment from 'moment'

import { UserContext } from '../../contexts/UserContext';

import './Projects.css'

function Projects() {
  const { user } = useContext(UserContext)
  let projects

  if (user && user.projects) {
    projects = user.projects.map((item, index) => Project(item, index))
  }

  return (
    <div className="projects">
      <h4><code>Projects</code></h4>
      {projects}
    </div>
  )
}

function Project({ title, company, description, date }, index) {
  return (
    <div className="project-wrapper" key={`project-${index}`}>
      <h5>
        <span role="img" aria-label={company}>🚀</span><code>{title}</code> at <strong>{company}</strong>
      </h5>
      <span>
        {!date.end ? 'now' : moment.unix(date.end).format('MMM YYYY')} - {moment.unix(date.start).format('MMM YYYY')}
      </span>
      <p>
        {description}
      </p>
    </div>
  )

}

export default Projects