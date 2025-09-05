// Configuration validation utilities
import { validateConfig } from '../config/portfolioConfig';

// Error messages for different validation failures
export const VALIDATION_ERRORS = {
  MISSING_FIELD: 'Required field is missing',
  INVALID_EMAIL: 'Invalid email format',
  INVALID_URL: 'Invalid URL format',
  INVALID_IMAGE_PATH: 'Invalid image path',
  INVALID_LEVEL: 'Skill level must be between 0 and 100',
  EMPTY_ARRAY: 'Array cannot be empty',
  INVALID_SOCIAL_ICON: 'Invalid social media icon'
};

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// URL validation regex
const URL_REGEX = /^https?:\/\/.+/;

// Valid social media icons
const VALID_SOCIAL_ICONS = [
  'linkedin', 'github', 'email', 'twitter', 'instagram', 
  'facebook', 'youtube', 'behance', 'dribbble'
];

// Validation functions
export const validateEmail = (email) => {
  return EMAIL_REGEX.test(email);
};

export const validateUrl = (url) => {
  return URL_REGEX.test(url);
};

export const validateImagePath = (path) => {
  if (!path) return false;
  return path.startsWith('/assets/') || path.startsWith('http') || path.startsWith('./assets/');
};

export const validateSkillLevel = (level) => {
  return typeof level === 'number' && level >= 0 && level <= 100;
};

export const validateSocialIcon = (icon) => {
  return VALID_SOCIAL_ICONS.includes(icon);
};

// Comprehensive validation function
export const validatePortfolioConfig = (config) => {
  const errors = [];
  const warnings = [];

  // Basic validation
  const basicValidation = validateConfig(config);
  if (!basicValidation.isValid) {
    errors.push(...basicValidation.missingFields.map(field => ({
      field,
      message: VALIDATION_ERRORS.MISSING_FIELD
    })));
  }

  // Personal info validation
  if (config.personalInfo?.email && !validateEmail(config.personalInfo.email)) {
    errors.push({
      field: 'personalInfo.email',
      message: VALIDATION_ERRORS.INVALID_EMAIL
    });
  }

  // Experience validation
  if (config.experience?.softwareSkills) {
    config.experience.softwareSkills.forEach((skill, index) => {
      if (!validateSkillLevel(skill.level)) {
        errors.push({
          field: `experience.softwareSkills[${index}].level`,
          message: VALIDATION_ERRORS.INVALID_LEVEL
        });
      }
    });
  }

  if (config.experience?.languages) {
    config.experience.languages.forEach((lang, index) => {
      if (!validateSkillLevel(lang.level)) {
        errors.push({
          field: `experience.languages[${index}].level`,
          message: VALIDATION_ERRORS.INVALID_LEVEL
        });
      }
    });
  }

  // Portfolio validation
  if (config.portfolio?.projects) {
    config.portfolio.projects.forEach((project, index) => {
      if (project.image && !validateImagePath(project.image)) {
        warnings.push({
          field: `portfolio.projects[${index}].image`,
          message: VALIDATION_ERRORS.INVALID_IMAGE_PATH
        });
      }
      
      if (project.link && !validateUrl(project.link)) {
        errors.push({
          field: `portfolio.projects[${index}].link`,
          message: VALIDATION_ERRORS.INVALID_URL
        });
      }
    });
  }

  // Contact validation
  if (config.contact?.socials) {
    config.contact.socials.forEach((social, index) => {
      if (social.icon && !validateSocialIcon(social.icon)) {
        errors.push({
          field: `contact.socials[${index}].icon`,
          message: VALIDATION_ERRORS.INVALID_SOCIAL_ICON
        });
      }
      
      if (social.href && !validateUrl(social.href) && !social.href.startsWith('mailto:')) {
        errors.push({
          field: `contact.socials[${index}].href`,
          message: VALIDATION_ERRORS.INVALID_URL
        });
      }
    });
  }

  // Background images validation
  const backgroundImages = [
    { field: 'home.backgroundImage', value: config.home?.backgroundImage },
    { field: 'about.backgroundImage', value: config.about?.backgroundImage },
    { field: 'experience.backgroundImage', value: config.experience?.backgroundImage }
  ];

  backgroundImages.forEach(({ field, value }) => {
    if (value && !validateImagePath(value)) {
      warnings.push({
        field,
        message: VALIDATION_ERRORS.INVALID_IMAGE_PATH
      });
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
};

// Function to display validation results in console
export const logValidationResults = (validationResult) => {
  if (validationResult.isValid) {
    console.log('✅ Portfolio configuration is valid!');
  } else {
    console.error('❌ Portfolio configuration has errors:');
    validationResult.errors.forEach(error => {
      console.error(`  - ${error.field}: ${error.message}`);
    });
  }

  if (validationResult.warnings.length > 0) {
    console.warn('⚠️ Portfolio configuration warnings:');
    validationResult.warnings.forEach(warning => {
      console.warn(`  - ${warning.field}: ${warning.message}`);
    });
  }
};

// Function to get default values for missing fields
export const getDefaultValues = () => ({
  personalInfo: {
    name: "Your Name",
    title: "Your Title",
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    location: "Your City, Country"
  },
  home: {
    name: "Your Name",
    title: "Your Title",
    primaryButton: "Resume",
    secondaryButton: "Portfolio",
    subtitle: "Your professional subtitle...",
    backgroundImage: "/assets/Home-bg.png",
    resumeLink: "/assets/resume.pdf"
  },
  about: {
    heading: "About Me",
    description: "Your personal description...",
    backgroundImage: "/assets/About-bg.png"
  },
  experience: {
    softwareSkills: [
      { name: 'Skill 1', level: 80, icon: '🔧' },
      { name: 'Skill 2', level: 70, icon: '⚡' }
    ],
    languages: [
      { name: 'English', level: 95 },
      { name: 'Spanish', level: 80 }
    ],
    personalSkills: ['Skill 1', 'Skill 2', 'Skill 3'],
    experience: [
      { year: '2020 - Present', company: 'Your Company', role: 'Your Role' }
    ],
    education: {
      degree: 'Your Degree',
      institution: 'Your Institution'
    },
    whatICanDo: ['Service 1', 'Service 2', 'Service 3'],
    designSkills: ['Skill 1', 'Skill 2', 'Skill 3'],
    hobbies: [
      { label: 'Hobby 1', icon: '🎯' },
      { label: 'Hobby 2', icon: '📚' }
    ]
  },
  portfolio: {
    heading: "My Projects",
    projects: [
      {
        title: "Project 1",
        description: "Project description...",
        image: "/assets/project1.png",
        link: "https://your-project.com",
        technologies: ["React", "JavaScript"]
      }
    ]
  },
  contact: {
    subtitle: "Get in touch!",
    name: "Your Name",
    navLinks: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Contact", href: "#contact" }
    ],
    socials: [
      { icon: "linkedin", href: "https://linkedin.com", label: "LinkedIn" },
      { icon: "github", href: "https://github.com", label: "GitHub" },
      { icon: "email", href: "mailto:your.email@example.com", label: "Email" }
    ]
  }
});
