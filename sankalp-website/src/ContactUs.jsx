import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const contacts = [
    {
      id: 1,
      position: "President",
      name: "Suvam Mishra",
      phone: "7894409607",
      icon: "👑"
    },
    {
      id: 2,
      position: "Secretary",
      name: "Manish Kumar Bhatta",
      phone: "9692551455",
      icon: "📋"
    },
    {
      id: 3,
      position: "Treasurer",
      name: "Deeshanshi Sahu",
      phone: "7978908959",
      icon: "💰"
    }
  ];

  return (
    <section className="contact-us">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Sankalp'25 Contacts</h2>
          <p className="contact-subtitle">Feel free to contact us</p>
        </div>

        <div className="contacts-grid">
          {contacts.map((contact, index) => (
            <div
              className="contact-card"
              key={contact.id}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="card-decorative-top"></div>
              <div className="card-decorative-bottom"></div>

              <div className="contact-icon-wrapper">
                <div className="icon-glow-ring"></div>
                <div className="contact-icon">{contact.icon}</div>
              </div>

              <div className="contact-position">{contact.position}</div>
              <div className="position-underline"></div>
              <div className="contact-name">{contact.name}</div>

              <div className="phone-wrapper">
                <a href={`tel:${contact.phone}`} className="contact-phone">
                  <span className="phone-icon">📞</span>
                  <span className="phone-text">Ph no : {contact.phone}</span>
                </a>
              </div>

              <div className="card-golden-border">
                <span className="contact-sparkle contact-sparkle-1"></span>
                <span className="contact-sparkle contact-sparkle-2"></span>
                <span className="contact-sparkle contact-sparkle-3"></span>
                <span className="contact-sparkle contact-sparkle-4"></span>
              </div>

              <div className="corner-ornament corner-tl"></div>
              <div className="corner-ornament corner-tr"></div>
              <div className="corner-ornament corner-bl"></div>
              <div className="corner-ornament corner-br"></div>

              <div className="contact-glow-effect"></div>

              <div className="card-particles">
                <span className="card-particle cp-1"></span>
                <span className="card-particle cp-2"></span>
                <span className="card-particle cp-3"></span>
              </div>
            </div>
          ))}
        </div>

        <div className="additional-contact">
          <div className="get-in-touch">
            <p className="touch-label">Get in Touch</p>
            <a href="mailto:sankalp@nist.edu" className="email-link">
              sankalp@nist.edu
            </a>
          </div>
        </div>
      </div>

      <div className="background-lines">
        <div className="accent-line accent-left-top"></div>
        <div className="accent-line accent-left-bottom"></div>
        <div className="accent-line accent-right-top"></div>
        <div className="accent-line accent-right-bottom"></div>
      </div>

      <div className="floating-particles">
        <span className="bg-particle bg-particle-1"></span>
        <span className="bg-particle bg-particle-2"></span>
        <span className="bg-particle bg-particle-3"></span>
        <span className="bg-particle bg-particle-4"></span>
        <span className="bg-particle bg-particle-5"></span>
        <span className="bg-particle bg-particle-6"></span>
      </div>

      <div className="geometric-shapes">
        <div className="geo-shape geo-triangle-1"></div>
        <div className="geo-shape geo-triangle-2"></div>
        <div className="geo-shape geo-circle-1"></div>
        <div className="geo-shape geo-circle-2"></div>
      </div>
    </section>
  );
};

export default ContactUs;
