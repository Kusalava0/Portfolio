import React from 'react'
import './Experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { FaCss3Alt } from 'react-icons/fa'
import { DiJavascript1 } from 'react-icons/di'
import { SiBootstrap, SiTailwindcss, SiFastapi } from 'react-icons/si'
import { FaNodeJs, FaPython } from 'react-icons/fa'
import { SiMongodb, SiDjango } from 'react-icons/si'
import { RiReactjsFill } from 'react-icons/ri'
import { TbBrandMysql } from 'react-icons/tb'
// import { RiReactjsFill } from 'react-icons/ri'




const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className='container experience__container'>
                <div className='experience__frontend'>
                    <h3>Frontend Development</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <AiOutlineHtml5 className='experience__details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <FaCss3Alt className='experience__details-icon' />
                            <div>

                                <h4>CSS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <DiJavascript1 className='experience__details-icon' />
                            <div>

                                <h4>JavaScript</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiBootstrap className='experience__details-icon' />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiTailwindcss className='experience__details-icon' />
                            <div>
                                <h4>Tailwind</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <RiReactjsFill className='experience__details-icon' />
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* END */}
                <div className='experience__backend'>
                    <h3>Backend Development</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <FaNodeJs className='experience__details-icon' />
                            <div>
                                <h4>Node JS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiMongodb className='experience__details-icon' />
                            <div>
                                <h4>MongoDB</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <TbBrandMysql className='experience__details-icon' />
                            <div>
                                <h4>MySQL</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <FaPython className='experience__details-icon' />
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiDjango className='experience__details-icon' />
                            <div>
                                <h4>Django</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiFastapi className='experience__details-icon' />
                            <div>
                                <h4>Fast API</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience