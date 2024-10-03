import React from 'react'
import photo from '../assets/undraw_Coding_re_iv62-removebg-preview.png'
import { useEffect,useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export const Home = ({darkMoon,setDarkMoon}) => {

  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const speed=200;
  const text ='Frontend Developer';

     useEffect(() => {
      AOS.init({ 
        duration:1200,// Set animation duration in milliseconds
        once: false, // Whether animation should happen only once
      });
  }, []);


  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <section  data-aos-delay="100" id='home' className={darkMoon ? "darkhome" :'home'}>
        <div data-aos="fade-down" data-aos-delay="200"  className="home-text-content">
          <h4>Hello,I'm</h4>
          <h1 style={darkMoon ? {color:"gold" } : {color:"#4834d4"}}>Mydeepan</h1>
          <h3>{displayedText || "Frontend Developer"}</h3>
          <button className={'light-button'}><a href="#">Download CV</a></button>
          <div className="link-profiles">
            <a  href="#"><img width="48" height="48" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"/></a>
            <a  href="#"> <img width="48" height="48" src="https://img.icons8.com/color/48/github--v1.png" alt="github--v1"/></a>
            <a  href="#"> <img width="48" height="48" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new"/></a>
            <a  href="#"> <img width="48" height="48" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/></a>
          </div>
        </div>
        <div data-aos="fade-down" data-aos-delay="50" className="img-container-home">
          <img  src={photo} alt="Photo" />
        </div>
    </section>
  )
}
