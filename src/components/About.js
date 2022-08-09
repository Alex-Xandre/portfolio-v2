import React, {useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
const images = [
  {
    'url':'https://res.cloudinary.com/dgtgmqx08/image/upload/v1659337904/avatar/react_psgvsg.png',
    'alt':'react'
  },
  {
    'url':'https://res.cloudinary.com/dgtgmqx08/image/upload/v1659337903/avatar/icon_nodejs_rkx2u9.png',
    'alt':'node'
  },
  {
    'url':'https://res.cloudinary.com/dgtgmqx08/image/upload/v1659337903/avatar/mysql_gxtrbt.png',
    'alt':'mysql'
  },
  {
    'url':'https://res.cloudinary.com/dgtgmqx08/image/upload/v1659337903/avatar/mongodb_e1zd6i.png',
    'alt':'mongodb'
  },
  {
    'url':"https://res.cloudinary.com/dgtgmqx08/image/upload/v1659337903/avatar/icon_sass_q3ldu6.png",
    'alt':'sass'
  },
  {
    'url':'https://res.cloudinary.com/dgtgmqx08/image/upload/v1659337902/avatar/icon_html_ha2giz.png',
    'alt':'html'
  },
  {
    'url':'https://res.cloudinary.com/dgtgmqx08/image/upload/v1659337902/avatar/icon_css_mukeph.png',
    'alt':'css'
  },
  {
    'url':'https://res.cloudinary.com/dgtgmqx08/image/upload/v1659337902/avatar/icon_android_i3mqqk.png',
    'alt':'android'
  }


]
const About = () => {
    useEffect(() => {
        Aos.init({duration: 1000})
        Aos.refresh()
    }, [])

  return (
    <section className='about_section' id="about"  >
        <div className='description_container' id="about" data-aos ="fade-left" >
            <h1><span>&#60;</span> About <span> &#62;</span></h1>
            <h2><span>Hello !</span>  I am full stack developer specializing in developing solutions with MERN Stack Applications</h2>
            <h2>A 22 year old programmer that worked on projects including creation of websites, android application, full-stack software development; moderating discord and editing short videos; and tutoring.<br/><br/>Things that I am currently studying: #Web Development, #UI/UX Design, #Trading, #Web3, #VA, #Japanese Culture</h2>
            <h1><span>&#60; &#47;</span> About <span>  &#62;</span></h1>
        </div>

        <div data-aos ="fade-left" className='tech_container'> 
             <h1><span>&#60;</span> Technology <span> &#47;&#62;</span></h1>
              {images.map((i, index) => {
                return(
                  <img src={i.url} alt ={i.alt} key={index}/>
                )
              })}
        </div>
    </section>
  )
}

export default About