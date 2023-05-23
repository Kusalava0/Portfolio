import React from 'react'
import './Header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
        <header>
            <div className='container header__container'>
                <h5>Hello I'm</h5>
                <h1>Kusalava</h1>
                <h5 className='text-light'>Fullstack Developer</h5>
                <CTA />
                <HeaderSocials />
                <div className='me'>
                    <h1>Welcome To</h1>
                    <h2>My</h2>
                    <h1>Personal Portfolio</h1>
                    {/* <div className='myimg'>
                        <img src={ME} />
                    </div> */}
                    <a data-scroll href="#about">
                        <div class="arrow"></div>
                    </a>
                </div>
                <a href='#contact' className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header
