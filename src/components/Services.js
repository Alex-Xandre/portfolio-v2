import React, {useEffect} from 'react'
import { Service } from './Service'
import Aos from 'aos'
import "aos/dist/aos.css"


const Services = () => {
    useEffect(() => {
        Aos.init({duration: 1000})
        Aos.refresh()
    }, [])
  return (
    <section className='services_section'  data-aos ="fade-left" id ="service">
        <h1><span>&#60;</span> Services <span>  &#47;&#62;</span></h1>
            {Service.map((serc, index) =>{
                return(
                    <div className ="services_container" key={index} >
                        <h1><span>&#60;</span> {serc.title} <span> &#47; &#62;</span></h1>
                        <h2>{serc.description}</h2>
                    </div>
                )
            })
            }
       
    </section>
  )
}


export default Services