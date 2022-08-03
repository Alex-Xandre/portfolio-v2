import React from 'react'
import {BsCloudSun, BsCloudMoon} from 'react-icons/bs'
import {AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram, AiOutlineFacebook, AiOutlineClose} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import Typewriter from "typewriter-effect";

const Header = ({onSwitch, theme, clicked, onClick}) => {
  
  return (

  <header className='header'>
    <div className='switch_container' >
      {theme === 'dark' ? 
        <h3 onClick={onSwitch()} >Switch to Morning mode <BsCloudSun/> </h3>
        : 
        <h3 onClick={onSwitch()} >Switch To Night mode <BsCloudMoon/></h3>}
        
        <div className='socials_container'>
          <a href="https://www.linkedin.com/in/alexander-micua-04657a217/" target="_blank" rel='noreferrer'><AiOutlineLinkedin/></a>
          <a href="https://github.com/Alex-Xandre" target="_blank" rel='noreferrer'> <AiOutlineGithub/></a>
          <a href="https://www.instagram.com/xndrmcua/" target="_blank" rel='noreferrer'><AiOutlineInstagram/></a>
         <a href="https://web.facebook.com/xander.micua.9" target="_blank" rel='noreferrer'><AiOutlineFacebook/></a>
        </div>

        <div className='menu-icon' onClick={onClick()}>
               {clicked === true ? <GiHamburgerMenu/> :<AiOutlineClose/>}
          </div>
    </div>

    <section className='hero_section'>
       <img src='https://res.cloudinary.com/dgtgmqx08/image/upload/v1659328905/avatar/main-image_nblsga.png' alt='logo'/>
         
        <a  href="https://www.linkedin.com/in/alexander-micua-04657a217/" target="_blank" rel='noreferrer'> <button>Hire a freelancer</button></a>

        <h1>    
       {theme === 'light' ?  <Typewriter
            options={{
              strings:  'Front end developer at MKGB IT solutions',
              autoStart: true,
              loop: true, delay:100
            }}
          />:
          <Typewriter
          options={{
            strings:  ['Xcrypt Aces Head Developer and co-founder', 'Freelancer'],
            autoStart: true,
            loop: true, delay:100
          }}
        />}
        </h1>
        
    </section>
    
  </header>
  )
}

export default Header