import React, { useRef } from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa'
import { ImInstagram } from 'react-icons/im'
import emailjs from 'emailjs-com'


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pzeekz7', 'template_1c3nm0i', form.current, 'n1Q81iFXI4yo4kQvT')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>dkb03122001@gmail.com</h5>
                        <a href='mailto:dkb03122001@gmail.com' target='_blank'>Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <FaLinkedin className='contact__option-icon' />
                        <h4>LinkedIn</h4>
                        <h5>Kusalava Badrinath D</h5>
                        <a href='https://www.linkedin.com/in/kusalava-badrinath-d/' target='_blank'>Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <ImInstagram className='contact__option-icon' />
                        <h4>Instagram</h4>
                        <h5>dkb03122001@gmail.com</h5>
                        <a href='https://ig.me/m/kusalava_0' target='_blank'>Send a message</a>
                    </article>
                </div>
                {/* End Of Optons */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your Full Name' required />
                    <input type='email' name='email' placeholder='Your Email' required />
                    <textarea name='message' rows='7' placeholder='Your Message' required ></textarea>
                    <button type='submit' className='btn btn-primary'>Send message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact