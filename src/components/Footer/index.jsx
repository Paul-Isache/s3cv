import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext';
import Icon from '../Icon';

import './Footer.css'


function Footer() {
  const { user } = useContext(UserContext)
  let socialFooter

  if (user && user.social) {
    socialFooter = user.social.map(({ name, icon, link }, index) => (
      <a href={link} key={`social-${index}`}>
        <Icon icon={icon} color="#c6cbd1" />
      </a>
    ))
  }

  return (
    <footer className="footer-wrapper">
      <p> <code>	&copy; 2019 Copyright: isache.com </code></p>
      <div className="social-wrapper">
        {socialFooter}
      </div>
    </footer>
  )

}

export default Footer