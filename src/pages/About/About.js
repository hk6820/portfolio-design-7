// src/pages/About/About.js
import './About.css';

const About = ({ data,id }) => {
  const backgroundStyle = {
  backgroundImage: `url(${data.backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100vh',
};

  return (
    <section className="about-container" style={backgroundStyle} id={id || 'about'}>
      <div className="about-overlay">
        <div className="about-content">
          <h2>{data.heading}</h2>
          <p>{data.description}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
