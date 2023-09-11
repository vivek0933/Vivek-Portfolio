import React from 'react'
import './intro.css';
import bg from '../../assets/image.png'
import { Link } from 'react-scroll';
import cv from '../../assets/cv.jpg'
import vivekCv from '../../assets/vivekCv.pdf';
import { saveAs } from 'file-saver';

const Intro = () => {
    const handleDownload = () => {
        saveAs(vivekCv, 'vivekCv.pdf');
      };
      
    return (
        <section id="intro">
            <div className="introContent">
                <span className='hello'>Hello</span>
                <span className='introText'>I'm
                    <span className='introName'> Vivek</span> <br />
                    Website Designer
                </span>
                <p className="introPara">I am a skilled web designer with
                    experience in creating  <br /> visually appealing and user friendly websites.</p>
                <a href={vivekCv} download="vivekCv.pdf">
                    <button className="btn" onClick={handleDownload}>
                        <img src={cv} alt="" className='cv' />Download CV
                    </button>
                </a>

            </div>
            <img src={bg} alt="Profile" className='bg' />
        </section>
    )
}

export default Intro
