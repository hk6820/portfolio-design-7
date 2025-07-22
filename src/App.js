// src/App.js
import './App.css';
import Home from './pages/Home/Home';
import Layout from './components/layout/Layout';
import About from './pages/About/About';
import Experience from './pages/Experience/Experience';
import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';

function App() {
  const homeData = {
    name: 'John Doe',
    title: 'Frontend Developer',
    primaryButton: 'Resume',
    secondaryButton: 'Portfolio',
    subtitle: 'I build responsive web applications.A passionate graphic designer with 8+ years of experience crafting visual stories and user experiences.',
    backgroundImage: '/assets/Home-bg.png',
    resumeLink: '/assets/resume.pdf' // Place resume in public/assets
  };

 const navData = [
  { path: 'home', label: 'Home' },
  { path: 'about', label: 'About' },
  { path: 'experience', label: 'Experience' },
  { path: 'portfolio', label: 'Portfolio' },
  { path: 'contact', label: 'Contact' },
];


  const aboutData = {
  heading: 'About Me',
  description:
    "I'm Jason Martin, a passionate graphic designer with 8+ years of experience crafting visual stories and user experiences. I love merging creativity with strategy.",
  backgroundImage: '/assets/about-bg.png', // make sure image is in public/assets
};

const experienceData = {
  softwareSkills: [
    { name: 'Photoshop', level: 90, icon: '🎨' },
    { name: 'Illustrator', level: 85, icon: '✏️' },
    { name: 'InDesign', level: 80, icon: '📄' },
    { name: 'Premiere', level: 70, icon: '🎬' },
    { name: 'After Effect', level: 75, icon: '✨' },
  ],
  backgroundImage: '/assets/experience-bg1.png',
  languages: [
    { name: 'English', level: 95 },
    { name: 'Arabic', level: 85 },
    { name: 'Turkish', level: 70 },
  ],
  personalSkills: ['Creativity', 'Team Work', 'Organisation'],

  experience: [
    { year: '2017 - Present', company: 'White Fish Advertising Co.', role: 'Art Director' },
    { year: '2012 - 2017', company: 'Pyramids Sun Advertising Co.', role: 'Senior Graphic Designer' },
    { year: '2007 - 2012', company: 'Planet Stationary', role: 'Graphic Designer' },
    { year: '2004 - 2007', company: 'Play Graphic Agency', role: 'Graphic Designer' },
    { year: '2002 - 2004', company: 'Marco Florida Internet', role: 'Graphic Designer' },
  ],

  education: {
    degree: 'BS/MS in Computer Science',
    institution: 'University of Maryland',
  },

  whatICanDo: ['Logo - Stationery - Branding', 'Newsletter - Packaging - Catalog', 'Strategy - Advertisement'],
  designSkills: ['Creativity - Planning & Strategy', 'Signs & Typography - Layout', 'Grid - Color sense - Inspiration'],
  hobbies: [
    { label: 'Reading', icon: '📚' },
    { label: 'Photography', icon: '📸' },
    { label: 'Drawing', icon: '🎨' },
    { label: 'Travel', icon: '✈️' },
  ],
};

const contactData = {
  subtitle: "Feel free to reach out me for any questions and opportunities!",
  name: "Jason Martin",
  navLinks: [
     { label: "Home", href: "#home" },
    { label: "About me", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ],
  socials: [
    { icon: <i className="fab fa-linkedin-in"></i>, href: "https://linkedin.com" },
    { icon: <i className="fab fa-github"></i>, href: "https://github.com" },
    { icon: <i className="fas fa-envelope"></i>, href: "mailto:example@example.com" },
  ],
};

const portfolioData = {
  heading: "My Projects",
  projects: [
    {
      title: "Portfolio Website",
      description: "A modern portfolio built with React and styled-components.",
      image: '/assets/project1.png',
      link: "https://your-portfolio-link.com"
    },
    {
      title: "E-commerce App",
      description: "A shopping app with cart and payment integration.",
      image: '/assets/project2.png',
      link: "https://ecommerce-link.com"
    },
    {
      title: "Landing Page",
      description: "Animated landing page using GSAP and scroll effects.",
      image:'/assets/project3.png',
      link: "https://ecommerce-link.com"
    },
    {
      title: "Landing Page",
      description: "Animated landing page using GSAP and scroll effects.",
      image: '/assets/project1.png',
      link: ""
    }
  ]
};



  return (
    <>
    <Layout brandName="Jason Martin" navLinks={navData}>
      <Home data={homeData} id='home'/>
      <About data={aboutData} id='about'/>
      <Experience data={experienceData} id='experience'/>
       <Portfolio data={portfolioData} id='portfolio'/>
      <Contact data={contactData} id='contact'/>
    </Layout>
      </>
  );
}

export default App;
