import React from 'react';
import './css/Common.css';
import './css/Contact.css';

const Contact: React.FC = () => {
  const user = 'dccfanforlife';
  const domain = 'gmail.com';
  const email = `${user}@${domain}`;

  return (
    <main className="contact-page">
      <div className="container">
        <h1 className="contact-title">Contact Me</h1>

        <section className="contact-block">
          <p>
            Thank you for visiting <strong>Hamaverse: Unofficial ARAH Comic Fan Site!</strong> If you have any questions, would like to chat about the ARAH Comic, or simply say hi, I would love to hear from you.
          </p>
          <p>
            Feel free to reach out at{' '}
            <a href={`mailto:${email}`}>{email}</a>.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Contact;