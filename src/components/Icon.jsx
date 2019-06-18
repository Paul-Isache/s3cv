import React from 'react'
import IcomoonReact from 'icomoon-react'

import iconSet from '../assets/icomoon/selection.json'

function Icon({ icon }) {
  const size = '18';

  return (
    <IcomoonReact
      color=''
      iconSet={iconSet}
      icon={icon}
      size={size}
    />)
}

export default Icon