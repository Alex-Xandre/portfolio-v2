import React from 'react'
const Contact = () => {
  return (
    <section className='contact_section'>
     
        <h1><span>&#60;</span> Contact Me <span> &#47;&#62;</span></h1>
        <h2>Get in touch and let us discuss the project you have in mind on <span>    <a href="https://web.facebook.com/xander.micua.9" target="_blank" rel='noreferrer'>Facebook</a> </span>or send me an email to <span style={{cursor:'pointer'}}><u onClick={() => window.location = 'mailto:yourmail@gmail.com'}>xndrmcua22@gmail.com</u></span> </h2>
        <h4>Made with react || 2022</h4>
        
    </section>
  )
}

export default Contact