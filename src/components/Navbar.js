import React from 'react'
import { Link } from 'react-scroll'
import './styles.css'
const MenuItems = [
 
    {
        title:'About',
        url:'about',
        cName:'nav-links'
    },
    {
        title:'Projects',
        url:'projects',
        cName:'nav-links'
    },
    {
        title:'Services',
        url:'service',
        cName:'nav-links'
    },
]

const Navbar = ({clicked, onClick}) => {
  return (
    <nav >
        <h3>Alexander Micua</h3>
        <ul className={clicked === false ? 'active': 'inactive' }>
        {MenuItems.map((item, index)=> {
                return(
                    <li key ={index}>
                        <span>&#60;</span> &nbsp; 
                        <Link to={item.url} 
                            activeClass="activelink" 
                            spy={true} 
                            smooth={true}
                            offset={100} 
                            duration={500} 
                            delay={10} 
                            className={item.cName} onClick={onClick()} >
                            {item.title}
                            
                        </Link>
                        <span> &#47; &#62;</span>
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}

export default Navbar