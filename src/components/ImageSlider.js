import React, { useState } from 'react'

const ImageSlider = ({slides}) => {


  const [currentIndex, setCurrentIndex] = useState(0)
    
    const sliderStyles={
        height:'100%',
        position:'relative'
    }

    const slideStyles ={
        width:'100%',
        height:'100%',
        backgroundImage: `url(${slides[currentIndex].img})`,
        backgroundPosition:'center',
        backgroundSize:'cover' 
    } 

    const leftArrowStyles ={
        position:"absolute", 
        top:'50%',
        transform:'translate(0, -50%)',
        left:'20px',
        fontSize:'80px',
        color:'#20AFFF',
        zIndex:'1',
        cursor:'pointer',
    }
    const rightArrowStyles ={
        position:"absolute", 
        top:'50%',
        transform:'translate(0, -50%)',
        right:'20px',
        fontSize:'80px',
        color:'#20AFFF',
        zIndex:'1',
        cursor:'pointer'
    }

    const goToPrevious = () =>{
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length -1: currentIndex -1
        setCurrentIndex(newIndex)
    }

    const goToNext = () =>{
        const isLastSlide = currentIndex === slides.length -1
        const newIndex = isLastSlide ? 0: currentIndex  +  1
        setCurrentIndex(newIndex)
    }

  return (
    <div style={sliderStyles}>
        <div style={leftArrowStyles} onClick={goToPrevious}>&#8249;</div>
        <div style={rightArrowStyles}  onClick={goToNext}>&#8250;</div>
        <div style={slideStyles}></div>
    </div>
  )
}

export default ImageSlider