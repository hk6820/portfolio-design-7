// Utility functions for configuration management
import { portfolioConfig } from '../config/portfolioConfig';

// Function to merge environment variables with config
export const getMergedConfig = () => {
  const envConfig = {
    personalInfo: {
      name: process.env.REACT_APP_NAME || portfolioConfig.personalInfo.name,
      title: process.env.REACT_APP_TITLE || portfolioConfig.personalInfo.title,
      email: process.env.REACT_APP_EMAIL || portfolioConfig.personalInfo.email,
      phone: process.env.REACT_APP_PHONE || portfolioConfig.personalInfo.phone,
      location: process.env.REACT_APP_LOCATION || portfolioConfig.personalInfo.location,
    },
    home: {
      ...portfolioConfig.home,
      name: process.env.REACT_APP_NAME || portfolioConfig.home.name,
      title: process.env.REACT_APP_TITLE || portfolioConfig.home.title,
      backgroundImage: process.env.REACT_APP_HOME_BG || portfolioConfig.home.backgroundImage,
      resumeLink: process.env.REACT_APP_RESUME_LINK || portfolioConfig.home.resumeLink,
    },
    about: {
      ...portfolioConfig.about,
      backgroundImage: process.env.REACT_APP_ABOUT_BG || portfolioConfig.about.backgroundImage,
    },
    experience: {
      ...portfolioConfig.experience,
      backgroundImage: process.env.REACT_APP_EXPERIENCE_BG || portfolioConfig.experience.backgroundImage,
    },
    contact: {
      ...portfolioConfig.contact,
      name: process.env.REACT_APP_NAME || portfolioConfig.contact.name,
      socials: portfolioConfig.contact.socials.map(social => {
        switch(social.icon) {
          case 'linkedin':
            return { ...social, href: process.env.REACT_APP_LINKEDIN_URL || social.href };
          case 'github':
            return { ...social, href: process.env.REACT_APP_GITHUB_URL || social.href };
          case 'email':
            return { ...social, href: process.env.REACT_APP_EMAIL_LINK || social.href };
          case 'twitter':
            return { ...social, href: process.env.REACT_APP_TWITTER_URL || social.href };
          default:
            return social;
        }
      })
    },
    seo: {
      ...portfolioConfig.seo,
      title: process.env.REACT_APP_SITE_TITLE || portfolioConfig.seo.title,
      description: process.env.REACT_APP_SITE_DESCRIPTION || portfolioConfig.seo.description,
      keywords: process.env.REACT_APP_SITE_KEYWORDS || portfolioConfig.seo.keywords,
      author: process.env.REACT_APP_NAME || portfolioConfig.seo.author,
    }
  };

  return {
    ...portfolioConfig,
    ...envConfig,
    personalInfo: { ...portfolioConfig.personalInfo, ...envConfig.personalInfo },
    home: { ...portfolioConfig.home, ...envConfig.home },
    about: { ...portfolioConfig.about, ...envConfig.about },
    experience: { ...portfolioConfig.experience, ...envConfig.experience },
    contact: { ...portfolioConfig.contact, ...envConfig.contact },
    seo: { ...portfolioConfig.seo, ...envConfig.seo },
  };
};

// Function to get social icon component
export const getSocialIcon = (iconName) => {
  const iconMap = {
    linkedin: <i className="fab fa-linkedin-in"></i>,
    github: <i className="fab fa-github"></i>,
    email: <i className="fas fa-envelope"></i>,
    twitter: <i className="fab fa-twitter"></i>,
    instagram: <i className="fab fa-instagram"></i>,
    facebook: <i className="fab fa-facebook"></i>,
    youtube: <i className="fab fa-youtube"></i>,
    behance: <i className="fab fa-behance"></i>,
    dribbble: <i className="fab fa-dribbble"></i>,
  };
  
  return iconMap[iconName] || <i className="fas fa-link"></i>;
};

// Function to validate image paths
export const validateImagePath = (imagePath) => {
  if (!imagePath) return false;
  
  // Check if it's a valid URL or starts with /assets/
  return imagePath.startsWith('http') || imagePath.startsWith('/assets/') || imagePath.startsWith('./assets/');
};

// Function to get default image if path is invalid
export const getImagePath = (imagePath, defaultPath = '/assets/placeholder.png') => {
  return validateImagePath(imagePath) ? imagePath : defaultPath;
};
