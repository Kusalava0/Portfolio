import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";


const data = [
    {
        id: 1,
        image: IMG1,
        title: "Wildlife Conservation",
        github: 'https://github.com/Kusalava0/Wildlife-Conservation',
        demo: 'https://drive.google.com/file/d/1S8TOoh9hTh7WAUCdIvk-cJzlFV27jHjn/view?usp=sharing'
    },
    {
        id: 2,
        image: IMG2,
        title: "Todo App With Auth",
        github: 'https://github.com/Kusalava0/TodoList-with-Auth',
        demo: 'https://todo-list-with-auth-7nb2.vercel.app/login'
    },
    {
        id: 3,
        image: IMG3,
        title: "Video Streaming and Processing",
        github: 'https://github.com/Kusalava0/URecipe',
        demo: 'https://drive.google.com/file/d/193OrAIlPPxmpMT3PaxJNVBHfQ3BqpCV9/view?usp=sharing'
    },
    {
        id: 4,
        image: IMG4,
        title: "Users Dashboard with CRUD (React Table)",
        github: 'https://github.com/Kusalava0/techwondoe-frontend',
        demo: 'https://techwondoe-frontend-nnppizrol-kusalava0.vercel.app/'
    },
    {
        id: 5,
        image: IMG5,
        title: "URecipe",
        github: 'https://github.com/Kusalava0/URecipe',
        demo: ''
    },
    {
        id: 6,
        image: IMG6,
        title: "Facial Recognition Attendance ",
        github: 'https://github.com/Kusalava0/Attendance_Prjct',
        demo: ''
    },

]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                {/* <article key={id} className='portfolio__item'>
                                    <div className='portfolio__item-image'>
                                        <img src={image} alt={title} />
                                    </div>
                                    <h3>{title}</h3>
                                    <div className='portfolio__item-cta'>
                                        <a href={github} className='btn' target='_blank'>GitHub</a>
                                        <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                    </div>
                                </article> */}

                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className=' mySwiper container portfolio__container'
                >
                    {
                        data.map(({ id, image, title, github, demo }) => {
                            return (
                                <SwiperSlide key={id} className='portfolio__item'>
                                    <div className='portfolio__item-image'>
                                        <img src={image} alt={title} />
                                    </div>
                                    <h3>{title}</h3>
                                    <div className='portfolio__item-cta'>
                                        <a href={github} className='btn' target='_blank'>GitHub</a>
                                        <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                    </div>

                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                {/* <div className='container portfolio__container'>
                    {
                        data.map(({ id, image, title, github, demo }) => {
                            return (
                                <article key={id} className='portfolio__item'>
                                    <div className='portfolio__item-image'>
                                        <img src={image} alt={title} />
                                    </div>
                                    <h3>{title}</h3>
                                    <div className='portfolio__item-cta'>
                                        <a href={github} className='btn' target='_blank'>GitHub</a>
                                        <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                    </div>
                                </article>
                            )
                        })
                    }
                </div> */}
            </div>
        </section>
    )
}

export default Portfolio