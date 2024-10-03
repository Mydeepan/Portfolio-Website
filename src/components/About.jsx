import React from 'react'
import photo from '../assets/undraw_Developer_activity_re_39tg-removebg-preview.png'
export const About = ({darkMoon}) => {
  return (
   <section id='about' className={darkMoon ? 'about-dark about' : "about"}>
      <h2 data-aos="fade-down" className={darkMoon ? 'dark-about-heading' : 'about-heading'}>About Me</h2>
      <div data-aos="fade-down" data-aos-delay='250' className="about-container">
        <div data-aos="fade-down" data-aos-delay='300' className={darkMoon ? "about-01 about-dark-01" : 'about-01'}>
          <h2 className="introduction">Introduction</h2>
          <p>Hello! I’m Mydeepan, a Frontend Developer who loves creating easy-to-use and attractive web applications. I have a strong understanding of web development tools.</p>
        </div>
        <div data-aos="fade-down" data-aos-delay='350'  className={darkMoon ? "about-dark-01 about-02" : 'about-02'}>
          <h2 className="education">Education</h2>
          <div className="edu-01">
            <p>B.E (ECE) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Score - 7.6</p> 
            <p>Diploma (ECE) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Score - 80%</p>
          </div>
        </div>
        <div data-aos="fade-down" data-aos-delay='400'  className={darkMoon ? "about-dark-01 about-02 contact-box" : 'contact-box about-02'}>
          <h2 className="education">Contact Details</h2>
          <div className="edu-01">
            <p>mydeepan012@gmail.com</p> 
            <p>Phone.No - +91 9597386121</p>
          </div>
        </div>
      </div>
   </section>
  )
}
