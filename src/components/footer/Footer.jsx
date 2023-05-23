import React from 'react'
import './Footer.css'
import { MdOutlineEmail } from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa'
import { ImInstagram } from 'react-icons/im'
import { VscGithub } from 'react-icons/vsc'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Kusalava</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/kusalava-badrinath-d/' target='_blank'><FaLinkedin /></a>
        <a href='https://github.com/Kusalava0' target='_blank'><VscGithub /></a>
        <a href='mailto:dkb03122001@gmail.com' target='_blank'><MdOutlineEmail /></a>
        <a href='https://ig.me/m/kusalava_0' target='_blank'><ImInstagram /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Kusalava. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer