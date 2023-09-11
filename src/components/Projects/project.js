import React from 'react'
import './project.css'
import fooddy1 from '../../assets/fooddy1.jpeg'
import fooddy2 from '../../assets/fooddy2.jpeg'
import fooddy3 from '../../assets/fooddy3.jpeg'
import SkyVue from '../../assets/skyvue.jpeg'
import SkyVue2 from '../../assets/skyvue2.jpeg'
import SkyVue3 from '../../assets/skyvue3.jpeg'
import SkyVue4 from '../../assets/skyvue4.jpeg'

const Project = () => {
    return (
        <div id='projects'>
            <div className="overview">
                <h1>My Projects</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam ipsa sapiente obcaecati laborum debitis id? Illo soluta fugit sint voluptate odio excepturi quas, totam nam neque aperiam, alias nisi vero.</p>
            </div>
            <div className='allProjects'>
                <div className='pro1'>
                    <div className="pro">
                        <img src={fooddy3} className='pro1Img' alt="" />
                        <h2>Foody</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias molestiae ea sunt officia nisi. Velit fuga doloribus ex aperiam placeat?</p>
                        <button className='src'>Source Code</button>
                        <button className='demo'>Live Demo</button>
                    </div>
                </div>
                <div className='pro2'>
                    <div className="pro">
                        <img src={SkyVue3} alt="" />
                        <h2>SkyVue</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora in sit ratione placeat sunt adipisci perspiciatis rerum minima facilis?</p>
                        <button className='src'>Source Code</button>
                        <button className='demo'>Live Demo</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
