import React, { useRef } from 'react'
import './contact.css'
import Offshore from '../../assets/offshore.png'
import SAER from '../../assets/saer.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import InstagramIcon from '../../assets/instagram.png'
import YoutubeIcon from '../../assets/youtube.png'
import emailjs from '@emailjs/browser';
import Gitlogo from '../../assets/gitlogo.png'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pl6l8u4', 'template_28ikarl', form.current, '0S9Ad-mB5YE8D-qPe')
            .then((result) => {
                console.log(result.text);
                alert('Email Sent !');
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='contactPage'>
            <div id="experience">
                <h1 className='experiencePageTitle'>My Experience</h1>
                <div className='experienceBars'>
                    <div className="exp">
                        <img src={SAER} alt="" />
                        <div className="expText">
                            <h2>SAER Technologies Pvt. Ltd.</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus temporibus rem minima harum quasi repudiandae quas rerum porro corporis, error nulla nostrum ipsa, beatae eaque vel architecto officiis amet odit.</p>
                        </div>
                    </div>
                    <div className="exp">
                        <img src={Offshore} alt="" />
                        <div className="expText">
                            <h2>Offshore Tech Solution Pvt. Ltd.</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam eum necessitatibus incidunt sit, aperiam repellendus. Necessitatibus totam voluptate enim impedit qui, optio dolores mollitia! Labore eius asperiores adipisci animi reiciendis.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">
                    Please fill out the form below to discuss any work oppertunities.
                </span>
                <form onSubmit={sendEmail} ref={form} className="contactForm">
                    <input type="text" className='name' placeholder='Your Name' name='from_name' />
                    <input type="email" className='email' placeholder='Your Email' name='from_email' />
                    <textarea name="message" rows="5" className='message' placeholder='Your Message'></textarea>
                    <button type='submit' value='Send' className="submitBtn">Submit</button>
                    <div className="links">
                        <a href="https://www.facebook.com/profile.php?id=100024226454237" target="_blank" rel="noopener noreferrer">
                            <img src={FacebookIcon} alt="FacebookIcon" className="link"  />
                        </a>
                        <a href="https://github.com/vivek0933" target="_blank" rel="noopener noreferrer">
                            <img src={Gitlogo} alt="TwitterIcon" className="link" />
                        </a>
                        <a href="https://www.instagram.com/vivek_0933/" target="_blank" rel="noopener noreferrer" >
                            <img src={InstagramIcon} alt="InstagramIcon" className="link" />
                        </a>
                        <a href="https://www.youtube.com/channel/UC_FLqjd1tSev5_LQJGhfo8g" target="_blank" rel="noopener noreferrer">
                            <img src={YoutubeIcon} alt="YoutubeIcon" className="link" />
                        </a>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Contact 
