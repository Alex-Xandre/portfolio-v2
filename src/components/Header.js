import React,{useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import Typewriter from "typewriter-effect";
import ImageSlider from './ImageSlider';

const Header = ({theme}) => {
    useEffect(() => {
      Aos.init({duration: 1000})
      Aos.refresh()
  }, [])

  const slides = [
    {
      'img':'https://res.cloudinary.com/dgtgmqx08/image/upload/v1659337905/avatar/proj1_bcg3ck.png',
      'title':'Xcryptaces Website',
      'url':'https://xcryptaces.com'
    },
    {
      'img':'https://res.cloudinary.com/dgtgmqx08/image/upload/v1659337903/avatar/barkmeoww_geoohk.png',
      'title':'BARKMEOW HEROES',
      'url':'https://www.barkmeowheroeshq.com/'
    },
    {
      'img':'https://res.cloudinary.com/dgtgmqx08/image/upload/v1659337904/avatar/proj5_gjvqka.png',
      'title':'E LEARNING WEBSITE',
      'url':'https://elms-bnhs.herokuapp.com/'
  }
  ]

  const containerStyles ={
    width:'100%',
    height:'280px',
    margin: '0 auto'
  }

  return (

  <header className='header'>
    
    <section className='hero_section'>
       <img src='https://res.cloudinary.com/dgtgmqx08/image/upload/v1659328905/avatar/main-image_nblsga.png' alt='logo'/>        
    </section>
   
    <section className='hero_description'>     
      <div className='title'>
        <h1>    
        {theme === 'light' ?  <Typewriter
            options={{
              strings:  'Front-end developer at MKBG IT solutions',
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
        <h2>A 22 year old developer who found his passion on programming, based on Luna, La Union</h2>
        <h2>Don't limit your challenges, challenge your limits. It is always impossible until its done.</h2>
          <div className='hero_options'>
            <a  href="https://www.linkedin.com/in/alexander-micua-04657a217/" target="_blank" rel='noreferrer'> <button>Hire a freelancer</button></a>
            {/* <button className='call_btn'>Schedule a call</button> */}
          </div>
      </div>  
      <div className='project_summary' data-aos ="fade-up">
        <h1>Latest Projects</h1>

       {/* slider for mobile */}
        <div style={containerStyles} className="project_slider">
           <ImageSlider slides = {slides}/>
        </div>

        {/* slider summary for desktop */}
        <div className='project_summary_container'>
          {slides.slice(0,2).map((slide, index) => {
            return(
              <img src={slide.img}alt ="project" key={index}/>
            )
          })}
        </div>
        <a href='/projects'><button>View All</button></a>
      </div>   
    </section>
  </header>
  )
}

export default Header