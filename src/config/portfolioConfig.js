// Portfolio Configuration File
// Update this file with your personal information and content

export const portfolioConfig = {
  // Basic Information
  personalInfo: {
    name: "John Doe",
    title: "Frontend Developer",
    subtitle: "I build responsive web applications. A passionate graphic designer with 8+ years of experience crafting visual stories and user experiences.",
    email: "example@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY"
  },

  // Navigation
  navigation: [
    { path: 'home', label: 'Home' },
    { path: 'about', label: 'About' },
    { path: 'experience', label: 'Experience' },
    { path: 'portfolio', label: 'Portfolio' },
    { path: 'contact', label: 'Contact' },
  ],

  // Home Section
  home: {
    name: "John Doe",
    title: "Frontend Developer",
    primaryButton: "Resume",
    secondaryButton: "Portfolio",
    subtitle: "I build responsive web applications. A passionate graphic designer with 8+ years of experience crafting visual stories and user experiences.",
    backgroundImage: "/assets/Home-bg.png",
    resumeLink: "/assets/resume.pdf" // Place your resume in public/assets
  },

  // About Section
  about: {
    heading: "About Me",
    description: "I'm Jason Martin, a passionate graphic designer with 8+ years of experience crafting visual stories and user experiences. I love merging creativity with strategy.",
    backgroundImage: "/assets/About-bg.png"
  },

  // Experience Section
  experience: {
    softwareSkills: [
      { name: 'Photoshop', level: 90, icon: '🎨' },
      { name: 'Illustrator', level: 85, icon: '✏️' },
      { name: 'InDesign', level: 80, icon: '📄' },
      { name: 'Premiere', level: 70, icon: '🎬' },
      { name: 'After Effect', level: 75, icon: '✨' },
    ],
    backgroundImage: "/assets/experience-bg1.png",
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
  },

  // Portfolio Section
  portfolio: {
    heading: "My Projects",
    projects: [
      {
        title: "Portfolio Website",
        description: "A modern portfolio built with React and styled-components.",
        image: "/assets/project1.png",
        link: "https://your-portfolio-link.com",
        technologies: ["React", "CSS3", "JavaScript"]
      },
      {
        title: "E-commerce App",
        description: "A shopping app with cart and payment integration.",
        image: "/assets/project2.png",
        link: "https://ecommerce-link.com",
        technologies: ["React", "Node.js", "MongoDB"]
      },
      {
        title: "Landing Page",
        description: "Animated landing page using GSAP and scroll effects.",
        image: "/assets/project3.png",
        link: "https://landing-page-link.com",
        technologies: ["HTML5", "CSS3", "GSAP"]
      },
      {
        title: "Mobile App",
        description: "Cross-platform mobile application with native features.",
        image: "/assets/project4.png",
        link: "https://mobile-app-link.com",
        technologies: ["React Native", "Firebase", "Redux"]
      }
    ]
  },

  // Contact Section
  contact: {
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
      { 
        icon: "linkedin", 
        href: "https://linkedin.com/in/yourprofile",
        label: "LinkedIn"
      },
      { 
        icon: "github", 
        href: "https://github.com/yourusername",
        label: "GitHub"
      },
      { 
        icon: "email", 
        href: "mailto:example@example.com",
        label: "Email"
      },
      { 
        icon: "twitter", 
        href: "https://twitter.com/yourusername",
        label: "Twitter"
      }
    ]
  },

  // SEO and Meta Information
  seo: {
    title: "John Doe - Frontend Developer Portfolio",
    description: "Professional portfolio showcasing my work as a Frontend Developer with expertise in React, JavaScript, and modern web technologies.",
    keywords: "portfolio, frontend developer, react, javascript, web development",
    author: "John Doe",
    ogImage: "/assets/og-image.png"
  }
};

// Validation function to check if all required fields are present
export const validateConfig = (config) => {
  const requiredFields = [
    'personalInfo.name',
    'personalInfo.title',
    'home.name',
    'home.title',
    'about.heading',
    'about.description',
    'portfolio.heading',
    'portfolio.projects',
    'contact.subtitle'
  ];

  const missingFields = [];
  
  requiredFields.forEach(field => {
    const keys = field.split('.');
    let current = config;
    
    for (const key of keys) {
      if (!current || !current[key]) {
        missingFields.push(field);
        break;
      }
      current = current[key];
    }
  });

  return {
    isValid: missingFields.length === 0,
    missingFields
  };
};
