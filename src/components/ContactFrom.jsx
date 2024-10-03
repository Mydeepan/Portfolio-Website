import React, { useState } from 'react';
import image from '../assets/undraw_Message_sent_re_q2kl-1.png'

export const ContactFrom = ({darkMoon}) => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [textArea,setTextArea] = useState('');
    const [success,setSuccess] = useState('');
    const [errorName,setErrorName] = useState('');
    const [errorEmail,setErrorEmail] =useState('');
    const [errorTextArea,setErrorTextArea] = useState('');


      const onSubmit = async (event) => {
    event.preventDefault();
    if (!name.trim()) {
   setErrorName('Enter your name');
    return;
  }

  if (!validateEmail(email)) {
    setErrorEmail('Please enter a valid email address');
    return;
  }

  if (!textArea.trim()) {
    setErrorTextArea('Enter a message');
    return;
  }

    const formData = new FormData(event.target);

    formData.append("access_key", "17a24b6a-f45e-4084-b7c9-3b495a88975d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setSuccess(res.message)
    }
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());
  };

const goBack = ()=>{
    setEmail('');
    setName('');
    setTextArea('');
    setSuccess('');
}
  return (
    <section id='contact' className={darkMoon ? "dark-contact contact" : 'contact'}>
        <h2 data-aos="fade-down"  className="contact-heading">Contact</h2>
        <div className="form-container">
          <div data-aos="fade-down" data-aos-delay='250' className="contact-container">
           {success.length ? 
            <div className="suusses-container">
                <img width="120" height="120" src="https://img.icons8.com/papercut/120/ok.png" alt="ok"/>
                <p className="mgs">Form submitted successfully</p>
                <p>Thank you! The form has been submitted successfully.</p>
                <p>I Will reply to you soon!</p>
                <button className='goback' onClick={goBack}>Go back</button>
            </div> 
            :
            <form data-aos="fade-right"  onSubmit={onSubmit} className="contact-form">
                <h3 data-aos="fade-right" data-aos-delay='200'>Get in Touch</h3>
                <input data-aos="fade-right" data-aos-delay='250' value={name} onChange={e => setName(e.target.value)} type="text" name='name' placeholder='Your Name' className='contact-input'  />
                <p>{errorName}</p>
                <input data-aos="fade-right" data-aos-delay='300' value={email} onChange={e => setEmail(e.target.value)} type="email" name='email' placeholder='Your Email' className='contact-input'  />
                <p>{errorEmail}</p>
                <textarea data-aos="fade-right" data-aos-delay='350' value={textArea} onChange={e => setTextArea(e.target.value)}  name="message" id="message" placeholder='Your Message' className='contact-input' />
                <p>{errorTextArea}</p>
                <button data-aos="fade-right" data-aos-delay='400'   className='btn-submit' type='submit'>Submit</button>
            </form> 
           }
        </div>
        { success.length ? " " : 
         <div  data-aos="fade-left" data-aos-delay='400' className="img-box-contact">
          <img src={image} alt="contact" />
        </div>
        }
        </div>
    </section>
  )
}
