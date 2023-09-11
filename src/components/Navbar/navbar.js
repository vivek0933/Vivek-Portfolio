import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo' />
            <div className="desktopMenue">
                <Link  activeClass='active' to='intro'  spy={true} smooth={true} offset={-100} duration={500} className="desktopMenueListItem" >Home </Link>
                <Link  activeClass='active' to='skillsorg'  spy={true} smooth={true} offset={-78} duration={500} className="desktopMenueListItem" >About </Link>
                <Link  activeClass='active' to='projects'  spy={true} smooth={true} offset={-78} duration={500} className="desktopMenueListItem" >Project </Link>
                <Link  activeClass='active' to='experience'  spy={true} smooth={true} offset={-78} duration={500} className="desktopMenueListItem" >Experience </Link>
            </div>
            <button className="desktopMenueBtn" onClick={() => {
            document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contactImg} alt="" className="desktopMenueImg" />Contact Me
            </button>

            <img src={menu} alt="Menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display : showMenu? 'flex':'none'}}>
                <Link  activeClass='active' to='intro'  spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)} >Home </Link>
                <Link  activeClass='active' to='skillsorg'  spy={true} smooth={true} offset={-80} duration={500} className="listItem" onClick={() => setShowMenu(false)} >About </Link>
                <Link  activeClass='active' to='projects'  spy={true} smooth={true} offset={-80} duration={500} className="listItem" onClick={() => setShowMenu(false)} >Project </Link>
                <Link  activeClass='active' to='experience'  spy={true} smooth={true} offset={-80} duration={500} className="listItem" onClick={() => setShowMenu(false)} >Experience </Link>
                <Link  activeClass='active' to='contact'  spy={true} smooth={true} offset={-80} duration={500} className="listItem" onClick={() => setShowMenu(false)} >Contact Me </Link>
            </div>

        </nav>
    )
}

export default Navbar