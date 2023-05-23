import React from 'react'
import { BsLinkedin, BsInstagram } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'


const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href='https://www.linkedin.com/in/kusalava-badrinath-d/' target="_blank"><BsLinkedin /></a>
            <a href='https://github.com/Kusalava0' target="_blank"><FaGithub /></a>
            <a href='https://ig.me/m/kusalava_0' target="_blank"><BsInstagram /></a>
        </div>
    )
}

export default HeaderSocials