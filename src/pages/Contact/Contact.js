// src/pages/Contact/Contact.js
import './Contact.css';

const Contact = ({ data,id }) => {
  return (
    <section className="contact-wrapper" id={id || 'contact'}>
      <h2 className="contact-title">Contact me</h2>
      <p className="contact-subtitle">{data.subtitle}</p>

      <nav className="contact-nav">
        {data.navLinks.map((link, index) => (
          <a key={index} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="contact-icons">
        {data.socials.map((social, index) => (
          <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
            {social.icon}
          </a>
        ))}
      </div>

      <footer className="contact-footer">
        <p>
          Designed & Developed by <strong>{data.name}</strong>
        </p>
        <p>© {new Date().getFullYear()} {data.name}. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
