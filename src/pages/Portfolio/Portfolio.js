import React from 'react';
import Slider from 'react-slick';
import './Portfolio.css';

const Portfolio = ({ data,id }) => {
  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2, // Show 2 cards by default
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 768, // Below 768px screen width
      settings: {
        slidesToShow: 1,
        arrows: false, // Optional: hide arrows on mobile
      },
    },
  ],
};


  return (
    <section className="portfolio-section" id={id || 'portfolio'}>
      <h2 className="portfolio-title">{data.heading}</h2>
      <Slider {...settings} className="portfolio-slider">
        {data.projects.map((project, index) => (
          <div className="portfolio-card" key={index}>
                <div className="portfolio-image-wrapper">
                  <img src={project.image} alt={project.title} className="portfolio-image" />
                </div>
                <div className="portfolio-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      className="view-project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {'View Project'}
                    </a>
                  )}
                </div>
              </div>
        ))}
      </Slider>
    </section>
  );
};

export default Portfolio;
