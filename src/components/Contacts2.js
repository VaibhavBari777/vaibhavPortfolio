import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contacts2.css';

const Contacts2 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY')
      .then(() => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      })
      .catch((error) => {
        alert('Failed to send message, try again later.');
        console.error('EmailJS Error:', error);
      });
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-gray-500 via-indigo-500 to-red-700 text-white">
      <h2 className='text-4xl text-black text-center'>Contact Me</h2>
      <br></br>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />
        
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contacts2;
