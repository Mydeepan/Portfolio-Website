import React from 'react';
import crud from '../assets/CRUD.png'

export const Project = ({darkMoon}) => {
  return (
    <section id='project' className={darkMoon ? 'dark-Project projects' : 'projects'}>
      <h2 className='Project-head' data-aos="fade-down" >Project</h2>
      <div  className="project-heading">
        <div data-aos="fade-down" data-aos-delay='250' className="project-container">
          <div data-aos="zoom-in" className="project pro-01" >
            <div className="pro">
              <img width="35" height="35" src="https://img.icons8.com/fluency/48/pos-terminal.png" alt="pos-terminal"/>
              <h4>Mortgage Payment Calculator</h4>
            </div>
            <p>A Mortgage Payment Calculator estimates monthly payments based on loan amount, interest rate, and loan term.</p>
            <button className={ darkMoon ?'dark-btn-project btn-project':'btn-project'}><a className={darkMoon ? 'dark-link link' : "link" }  href="https://check-repayment-calculator.netlify.app/">Click Here</a></button>
          </div>
          <div data-aos="zoom-in" className="project pro-02" >
            <div className="pro">
              <img width="35" height="35" src="https://img.icons8.com/fluency/48/apple-mail.png" alt="apple-mail"/>
              <h4>Email Verification System</h4>
            </div>
            <p>An Email Verification System sends a confirmation link to ensure the validity and ownership of an email address.</p>
            <button className={ darkMoon ?'dark-btn-project btn-project':'btn-project'}><a className={darkMoon ? 'dark-link link' : "link" } href="https://main--email-subcription-validation.netlify.app/">Click Here</a></button>
          </div>
          <div data-aos="zoom-in" className="project pro-03" >
            <div className="pro">
              <img width="35" height="35" src="https://img.icons8.com/fluency/48/country.png" alt="country"/>
              <h4>World Countries API</h4>
            </div>
            <p>World Countries API provides data about countries, including names, population, area, and other relevant details for easy integration.</p>
            <button className={ darkMoon ?'dark-btn-project btn-project':'btn-project'}><a className={darkMoon ? 'dark-link link' : "link" } href="https://world-country-api.netlify.app/">Click Here</a></button>
          </div>
          <div data-aos="zoom-in" className="project pro-04" >
            <div className="pro">
              <img width="35" height="35" src="https://img.icons8.com/fluency/48/night-wind-.png" alt="night-wind-"/>
              <h4>Weather API Implementation</h4>
            </div>
            <p>Weather API Implementation fetches real-time weather data from an external service based on user location.</p>
            <button className={ darkMoon ?'dark-btn-project btn-project':'btn-project'}><a className={darkMoon ? 'dark-link link' : "link" } href="https://weather-report-api-project.netlify.app/">Click Here</a></button>
          </div>
          <div data-aos="zoom-in" className="project pro-05" >
            <div className="pro">
              <img width="35" height="35" src="https://img.icons8.com/color/35/password.png" alt="password"/>
              <h4>OTP Generator</h4>
            </div>
            <p>An OTP Generator creates a one-time password for secure user authentication during login or transactions.</p>
            <button className={ darkMoon ?'dark-btn-project btn-project':'btn-project'}><a className={darkMoon ? 'dark-link link' : "link" } href="https://otp-generator-react-js.netlify.app/">Click Here</a></button>
          </div>
          <div data-aos="zoom-in" className="project pro-06" >
            <div className="pro">
              <img width="35" height="35" src="https://img.icons8.com/fluency/48/analytics--v1.png" alt="analytics--v1"/>
              <h4>Expense Analytics Component</h4>
            </div>
            <p>Expense Analytics Component tracks spending patterns and provides visual insights to help users manage their finances.</p>
            <button className={ darkMoon ?'dark-btn-project btn-project':'btn-project'}><a className={darkMoon ? 'dark-link link' : "link" } href="https://main--simple-expenses-chart-component.netlify.app/">Click Here</a></button>
          </div>
          <div data-aos="zoom-in" className="project pro-07" >
            <div className="pro">
              <img width="35" height="35" src="https://img.icons8.com/fluency/48/online-order.png" alt="online-order"/>
              <h4>Bootstrap E-Commerce Layout</h4>
            </div>
            <p>A Bootstrap E-Commerce Layout is a responsive template that organizes products, navigation, and shopping cart elements for online stores.</p>
            <button className={ darkMoon ?'dark-btn-project btn-project':'btn-project'}><a className={darkMoon ? 'dark-link link' : "link" } href="https://github.com/Mydeepan/Responsive-Bootstrap-Project">Click Here</a></button>
          </div>
          <div data-aos="zoom-in" className="project pro-08" >
            <div className="pro">
              <img width="35" height="35" src="https://img.icons8.com/fluency/48/cooking-book.png" alt="cooking-book"/>
              <h4>Recipe Website Design</h4>
            </div>
            <p>Recipe Website Design features organized sections for ingredients, instructions, and images to make cooking easy and accessible.</p>
            <button className={ darkMoon ?'dark-btn-project btn-project':'btn-project'}><a className={darkMoon ? 'dark-link link' : "link" } href="https://github.com/Mydeepan/responsive-recipe-website">Click Here</a></button>
          </div>
          <div data-aos="zoom-in" className="project pro-09" >
            <div className="pro">
              <img width="35" height="35" src="https://img.icons8.com/fluency/48/video-id-verification.png" alt="video-id-verification"/>
              <h4>Form Input Validation</h4>
            </div>
            <p>Form Input Validation checks user input for correctness and completeness before form submission.</p>
            <button className={ darkMoon ?'dark-btn-project btn-project':'btn-project'}><a className={darkMoon ? 'dark-link link' : "link" } href="https://github.com/Mydeepan/Form-validation">Click Here</a></button>
          </div>
          <div data-aos="zoom-in" className="project pro-10" >
            <div className="pro">
              <img width="35" height="35" src="https://img.icons8.com/fluency/48/math.png" alt="math"/>
              <h4>Scientific Math Calculator</h4>
            </div>
            <p>A Scientific Math Calculator performs advanced operations like trigonometry, logarithms, and exponents.</p>
            <button className={ darkMoon ?'dark-btn-project btn-project':'btn-project'}><a className={darkMoon ? 'dark-link link' : "link" } href="https://github.com/Mydeepan/Calculate">Click Here</a></button>
          </div>
          <div data-aos="zoom-in" className="project pro-11" >
            <div className="pro">
              <img width="35" height="35" src='https://techhyme.com/wp-content/uploads/2024/01/CRUD-Operations.jpg' alt="external-crud-database-outline-outline-black-m-oki-orlando"/>
              <h4>CRUD Operation</h4>
            </div>
            <p>CRUD stands for Create, Read, Update, and Delete, the four basic operations for managing data in applications.</p>
            <button className={ darkMoon ?'dark-btn-project btn-project':'btn-project'}><a className={darkMoon ? 'dark-link link' : "link" } href="https://github.com/Mydeepan/CRUD-project">Click Here</a></button>
          </div>
        </div>
      </div>
    </section>
  )
}
