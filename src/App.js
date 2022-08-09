
import '../src/components/styles.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import styled,{ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme, GlobalStyles, GlobalStylesAboutSection, lighterTheme, darkerTheme } from './themes.js'
import { useState } from 'react';
import About from './components/About';
import Projects from './components/Projects';
import './App.css'
import Services from './components/Services';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom';



const StyledApp = styled.div `
color: ${(props) => props.theme.fontColor}` 

function App() {
  const [theme, setTheme] = useState("dark")
  const [clicked,setClicked] = useState(true)
  const themeToggler =() =>{
    theme === "light" ? setTheme("dark"): setTheme("light")
  }
  const handleClick =() =>{
     clicked === false ? setClicked(true): setClicked(false)
  }

  return (
    <>
     <ThemeProvider theme={theme === "light"? lighterTheme: darkerTheme}>
      <GlobalStyles/>
        <StyledApp>
        <Navbar clicked={clicked} onClick={() => handleClick}  onSwitch = {() => themeToggler}  theme={theme} />
         <div className='container'>
         {/* <Header onClick={()=> handleClick} clicked={clicked}/> */}
            <ThemeProvider theme={theme === "light"? lightTheme: darkTheme}>
                <GlobalStylesAboutSection/>
                  <StyledApp>
                  <Routes>
                     <Route path="/" element={<Header theme={theme}/>}/>
                     <Route path="/about" element={<About/>}/>   
                     <Route path="/projects" element={<Projects/>}/>
                     <Route path="/service" element={<Services/>}/>
                     <Route path="/contact" element={<Contact/>}/>
                   </Routes>  
                  </StyledApp>
                <GlobalStylesAboutSection/>
            </ThemeProvider>
          {/* <Projects />
          <Services/>
          <Contact/> */}
         </div>
        
        {/* <Footer/> */}
        </StyledApp>
      <GlobalStyles/>
    </ThemeProvider>

   
    </>
   
     
  
  );
}

export default App;
