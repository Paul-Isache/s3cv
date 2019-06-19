import React, { useContext } from 'react'
import ReactTooltip from 'react-tooltip'

import Icon from '../Icon'
import { UserContext } from '../../contexts/UserContext'

import './Skills.css'

function Skills() {
  const { user } = useContext(UserContext)
  let skills = []

  if (user && user.skills) {
    skills = user.skills.map(({ name, icon, more }, index) => (
      <div key={`skills-${index}`}>
        <Icon icon={icon} />
        <span><code>{name}</code></span>
        {MoreSkills(more, index)}

      </div>
    ))
  }

  return (
    <div>
      <h4><code>Skills</code></h4>
      <div className="skills-wrapper">{skills}</div>
    </div>
  )
}

function MoreSkills(more, index) {
  let tooltip = ''

  if (more && more.length) {
    tooltip = (
      <div>
        <span data-tip data-for={`skills-more-${index}`} data-event='click focus'><Icon icon='info' /></span>
        <ReactTooltip place="bottom" effect="solid" globalEventOff='click' id={`skills-more-${index}`}>
          {more.map((item, i) => <p key={`skill-map-${index}-${i}`}>{item}</p>)}
        </ReactTooltip>
      </div >
    )
  }

  return tooltip
}

export default Skills
