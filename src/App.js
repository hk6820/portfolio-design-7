// src/App.js
import './App.css';
import Home from './pages/Home/Home';
import Layout from './components/layout/Layout';
import About from './pages/About/About';
import Experience from './pages/Experience/Experience';
import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';
import { getMergedConfig, getSocialIcon } from './utils/configUtils';
import { validatePortfolioConfig, logValidationResults } from './utils/validationUtils';

function App() {
  // Get merged configuration with environment variables
  const config = getMergedConfig();
  
  // Validate configuration in development
  if (process.env.NODE_ENV === 'development') {
    const validationResult = validatePortfolioConfig(config);
    logValidationResults(validationResult);
    
    // Show warnings/errors in console
    if (!validationResult.isValid) {
      console.error('Please fix the configuration errors before deploying.');
    }
  }
  
  // Prepare data for each component
  const homeData = config.home;
  const navData = config.navigation;
  const aboutData = config.about;
  const experienceData = config.experience;
  const portfolioData = config.portfolio;
  
  // Transform social icons for contact component
  const contactData = {
    ...config.contact,
    socials: config.contact.socials.map(social => ({
      ...social,
      icon: getSocialIcon(social.icon)
    }))
  };



  return (
    <>
    <Layout brandName={config.personalInfo.name} navLinks={navData}>
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
