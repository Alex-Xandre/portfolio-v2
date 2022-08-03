
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

const StyledApp = styled.div `
color: ${(props) => props.theme.fontColor}` 

function App() {
  const [theme, setTheme] = useState("light")
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
        <Navbar clicked={clicked} onClick={() => handleClick}/>
         <div className='container'>
         <Header onSwitch = {() => themeToggler}  theme={theme} onClick={()=> handleClick} clicked={clicked}/>
            <ThemeProvider theme={theme === "light"? lightTheme: darkTheme}>
                <GlobalStylesAboutSection/>
                  <StyledApp>
                    <About/>
                  </StyledApp>
                <GlobalStylesAboutSection/>
            </ThemeProvider>
          <Projects />
          <Services/>
          <Contact/>
         </div>
        </StyledApp>
      <GlobalStyles/>
    </ThemeProvider>

   
    </>
   
     
  
  );
}

export default App;
