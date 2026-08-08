import React from 'react';
import './css/Common.css';
import './css/Contact.css';

const Contact: React.FC = () => {
  return (
    <main className="contact-page">
      <div className="container">
        <h1 className="contact-title">Contact Me</h1>

        <section className="contact-block">
          <p>
            Thanks for visiting Hamaverse: Unofficial ARAH Fan Site! If you have any questions, would like to chat about the ARAH Comic, or simply say hi, I'd love to hear from you.
          </p>
          <p>
            Feel free to reach out at{' '}
            <a href="mailto:dccfanforlife@gmail.com">dccfanforlife@gmail.com</a>.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Contact;