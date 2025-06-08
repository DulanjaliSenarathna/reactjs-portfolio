import React, { useRef, useState } from 'react'
import './contact.css'
import emailjs, { init } from '@emailjs/browser';
import { motion, useInView } from 'motion/react';
import ContactSvg from './ContactSvg';

const listVariants ={
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
}

const Contact = () => {

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, 
        import.meta.env.VITE_TEMPLATE_ID,
        e.target, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          setSuccess(true);
          setError(false);
          e.target.reset(); // Reset the form after successful submission
          
        },
        (error) => {
          setError(true);
          setSuccess(false);
          console.log(error.text);
        },
      );
  };

 const isInView =  useInView(form, { margin: "-200px" });

  return (
    <div className='contact' >
      <div className="cSection">
        <motion.form variants={listVariants} animate={isInView ? "animate":"initial"} ref={form} onSubmit={sendEmail}>
          <motion.h1 variants={listVariants}  className="cTitle">
            Let's keep in touch!
          </motion.h1>
          <motion.div variants={listVariants}  className="formItem">
            <label>Name</label>
            <input type="text" name='user_name' placeholder='John Doe' />
          </motion.div>
          <motion.div variants={listVariants} className="formItem">
            <label>Email</label>
            <input type="email" name='user_email' placeholder='john@gmail.com' />
          </motion.div>
          <motion.div variants={listVariants} className="formItem">
            <label>Message</label>
            <textarea rows={10} name='user_message' placeholder='Write you message...'></textarea>
          </motion.div>
          <motion.button variants={listVariants} className='formButton'>Send</motion.button>
          {success && <span>Your message has been sent!</span>}
          {error && <span>Something went wrong, please try again.</span>}
        </motion.form>
      </div>
      <div className="cSection"><ContactSvg/></div>
    </div>
  )
}

export default Contact