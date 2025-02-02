import React from 'react';
import Contact from './Contact';
import Title from '../About/Title';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Title subTitle='Get in Touch' />
      <Contact />
    </div>
  );
};

export default ContactPage;