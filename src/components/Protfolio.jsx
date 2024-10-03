import React, { useState } from 'react'
import { Navbar } from './Navbar';
import { Home } from './Home';
import '../components/App.css'
import { About } from './About';
import { Skills } from './Skills';
import { Project } from './Project';
import { ContactFrom } from './ContactFrom';
import { FooterSection } from './Footer';




export const Portfolio = () => {
  const [darkMoon,setDarkMoon] =useState(false);


  return (
    <>
        <Navbar darkMoon={darkMoon} setDarkMoon={setDarkMoon}/>
        <Home  darkMoon={darkMoon} setDarkMoon={setDarkMoon}/>
        <About darkMoon={darkMoon} />
        <Skills darkMoon={darkMoon}/>
        <Project darkMoon={darkMoon}/>
        <ContactFrom darkMoon={darkMoon} />
        <FooterSection darkMoon={darkMoon}/>
    </>
  )
}
