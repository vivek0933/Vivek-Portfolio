import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
    return (
        <div id='skillsorg'>
            <selection id="skills">
                <span className="skillTitle">What I do</span>
                <span className="skillDesc">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for details. I am proficient in HTML, CSS, and JavaScript as well as ReactJs.</span>
                <div className="skillBars">
                    <div className="skillBar">
                        <img src={UIDesign} alt="Website Design" className='skillBarImg' />
                        <div className="skillBarText">
                            <h2>Website Design</h2>
                            <p>This is a demo text, you can write your own content here</p>
                        </div>
                    </div>
                    <div className="skillBar">
                        <img src={WebDesign} alt="Front-end Development" className='skillBarImg' />
                        <div className="skillBarText">
                            <h2>Front-end Development</h2>
                            <p>This is a demo text, you can write your own content here</p>
                        </div>
                    </div>
                    <div className="skillBar3">
                        <img src={AppDesign} alt="other" className='skillBarImg' />
                        <div className="skillBarText">
                            <h2>Other</h2>
                            <p>This is a demo text, you can write your own content here</p>
                        </div>
                    </div>
                </div>
            </selection>
        </div>
    )
}

export default Skills
