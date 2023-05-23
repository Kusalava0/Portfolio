import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { BiExpandAlt } from 'react-icons/bi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about__container'>
                <div className='about__me '>
                    <div className='about__me-image'>
                        <img src={ME} alt='About Image' />
                    </div>
                </div>
                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Hackathons</h5>
                            <small>Won 2 National Hackathons</small>
                        </article>

                        <article className='about__card'>
                            <BiExpandAlt className='about__icon' />
                            <h5>Experience</h5>
                            <small>1+ Years of Exploring</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>10+ Completed Projects</small>
                        </article>
                    </div>

                    <p>
                        As a passionate Computer Science undergraduate, I am committed to pushing my limits and harnessing my abilities to the fullest to achieve my short and long-term goals. I firmly believe in the power of expanding one's skill set,
                        which is why I am excited about continuously learning and exploring new technologies.
                        <br></br>
                        Throughout my journey, I have explored various key areas of Computer Science, gaining valuable knowledge and experience along the way.
                        I have actively participated in three hackathons, which have been instrumental in highlighting
                        my areas for growth and identifying the skills and technologies I need to learn to stay ahead in the industry.

                        Feel free to contact me or drop me a message! I'd love to connect and discuss exciting opportunities or collaborations.
                    </p>
                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>

        </section>
    )
}

export default About