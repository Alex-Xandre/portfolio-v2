import React from 'react'
import { AiOutlineClose} from 'react-icons/ai'
import { BsCloudMoon, BsCloudSun } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link, useNavigate } from 'react-router-dom'
import './styles.css'
import { AiOutlineLinkedin,AiOutlineGithub, AiOutlineFacebook,AiOutlineInstagram } from 'react-icons/ai'



const MenuItems = [
 
    {
        title:'About',
        url:'/about',
        cName:'nav-links'
    },
    {
        title:'Projects',
        url:'/projects',
        cName:'nav-links'
    },
    {
        title:'Services',
        url:'/service',
        cName:'nav-links'
    },
    {
        title:'Contacts',
        url:'/contact',
        cName:'nav-links'
    },
]

const Navbar = ({clicked, onClick, theme, onSwitch}) => {
    let navigate= useNavigate()
  return (
    <nav >
        <h3 className ="logo"onClick={()=> navigate('/')}>Alexander</h3>
      
        <div className='switch_container' >
        {theme === 'dark' ? 
        <h3 onClick={onSwitch()} >Switch to Morning mode <BsCloudSun/> </h3>
        : 
        <h3 onClick={onSwitch()} >Switch To Night mode <BsCloudMoon/></h3>}

          <div className='menu-icon' onClick={onClick()}>
               {clicked === true ? <GiHamburgerMenu/> :<AiOutlineClose/>}
          </div>
        </div>

        <ul className={clicked === false ? 'active': 'inactive' }>
        {MenuItems.map((item, index)=> {
                return(
                    <li key ={index}>
                        <span>&#60;</span> &nbsp; 
                        <Link to = {item.url} onClick={onClick()} 
                        //  className={(isActive) => isActive ? 'activelink':'j'}
                          >
                            {item.title}
                            
                        </Link>
                        <span> &#47; &#62;</span>
                    </li>
                )
            })}
        </ul>  

        <div className='socials_container'>
          <a href="https://www.linkedin.com/in/alexander-micua-04657a217/" target="_blank" rel='noreferrer'><AiOutlineLinkedin/></a>
          <a href="https://github.com/Alex-Xandre" target="_blank" rel='noreferrer'> <AiOutlineGithub/></a>
          <a href="https://www.instagram.com/xndrmcua/" target="_blank" rel='noreferrer'><AiOutlineInstagram/></a>
          <a href="https://web.facebook.com/xander.micua.9" target="_blank" rel='noreferrer'><AiOutlineFacebook/></a>
      </div>

    </nav>
  )
}

export default Navbar