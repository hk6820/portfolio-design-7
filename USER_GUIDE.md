# Portfolio Website User Guide

Welcome to your dynamic portfolio website! This guide will help you customize and deploy your portfolio with ease.

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Configuration Options](#configuration-options)
3. [Customizing Content](#customizing-content)
4. [Adding Images](#adding-images)
5. [Environment Variables](#environment-variables)
6. [Deployment](#deployment)
7. [Troubleshooting](#troubleshooting)
8. [Advanced Customization](#advanced-customization)

## 🚀 Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager
- Git (for version control)

### Installation

1. **Clone or download the project**
   ```bash
   git clone <your-repo-url>
   cd portfolio-design-7
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see your portfolio.

## ⚙️ Configuration Options

### Method 1: Configuration File (Recommended)

Edit `src/config/portfolioConfig.js` to customize your portfolio:

```javascript
export const portfolioConfig = {
  personalInfo: {
    name: "Your Name",
    title: "Your Title",
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    location: "Your City, Country"
  },
  // ... rest of configuration
};
```

### Method 2: Environment Variables

1. Copy `env.example` to `.env`
2. Update the values in `.env`:

```env
REACT_APP_NAME="Your Name"
REACT_APP_TITLE="Your Title"
REACT_APP_EMAIL="your.email@example.com"
# ... other variables
```

## 📝 Customizing Content

### 1. Personal Information

Update your basic information in the configuration:

```javascript
personalInfo: {
  name: "John Smith",
  title: "Full Stack Developer",
  email: "john@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA"
}
```

### 2. Home Section

Customize your hero section:

```javascript
home: {
  name: "John Smith",
  title: "Full Stack Developer",
  primaryButton: "Download Resume",
  secondaryButton: "View Portfolio",
  subtitle: "I create amazing web experiences...",
  backgroundImage: "/assets/Home-bg.png",
  resumeLink: "/assets/resume.pdf"
}
```

### 3. About Section

Update your about information:

```javascript
about: {
  heading: "About Me",
  description: "Your personal story and background...",
  backgroundImage: "/assets/About-bg.png"
}
```

### 4. Experience Section

Customize your skills and experience:

```javascript
experience: {
  softwareSkills: [
    { name: 'React', level: 95, icon: '⚛️' },
    { name: 'JavaScript', level: 90, icon: '🟨' },
    { name: 'Node.js', level: 85, icon: '🟢' },
    // Add more skills
  ],
  experience: [
    { year: '2020 - Present', company: 'Tech Company', role: 'Senior Developer' },
    // Add more experience
  ],
  education: {
    degree: 'Bachelor of Computer Science',
    institution: 'Your University',
  }
}
```

### 5. Portfolio Section

Add your projects:

```javascript
portfolio: {
  heading: "My Projects",
  projects: [
    {
      title: "E-commerce Website",
      description: "A full-stack e-commerce solution...",
      image: "/assets/project1.png",
      link: "https://your-project.com",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    // Add more projects
  ]
}
```

### 6. Contact Section

Update your contact information and social links:

```javascript
contact: {
  subtitle: "Let's work together!",
  name: "John Smith",
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
    // Add more social links
  ]
}
```

## 🖼️ Adding Images

### 1. Image Requirements

- **Format**: PNG, JPG, or WebP
- **Size**: Recommended 1200x800px for project images
- **Location**: Place all images in `public/assets/`

### 2. Required Images

Create these images and place them in `public/assets/`:

- `Home-bg.png` - Home section background
- `About-bg.png` - About section background
- `experience-bg1.png` - Experience section background
- `project1.png`, `project2.png`, etc. - Project images
- `resume.pdf` - Your resume file

### 3. Image Optimization

For better performance, optimize your images:

- Use tools like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
- Keep file sizes under 500KB
- Use WebP format when possible

## 🔧 Environment Variables

### Available Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `REACT_APP_NAME` | Your full name | "John Smith" |
| `REACT_APP_TITLE` | Your professional title | "Full Stack Developer" |
| `REACT_APP_EMAIL` | Your email address | "john@example.com" |
| `REACT_APP_PHONE` | Your phone number | "+1 (555) 123-4567" |
| `REACT_APP_LOCATION` | Your location | "San Francisco, CA" |
| `REACT_APP_LINKEDIN_URL` | LinkedIn profile URL | "https://linkedin.com/in/johnsmith" |
| `REACT_APP_GITHUB_URL` | GitHub profile URL | "https://github.com/johnsmith" |
| `REACT_APP_TWITTER_URL` | Twitter profile URL | "https://twitter.com/johnsmith" |
| `REACT_APP_EMAIL_LINK` | Email link | "mailto:john@example.com" |

### Setting Up Environment Variables

1. Copy `env.example` to `.env`
2. Update the values with your information
3. Restart the development server

## 🚀 Deployment

### Option 1: Netlify (Recommended)

1. **Build your project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `build`
   - Deploy!

3. **Environment Variables on Netlify**
   - Go to Site settings > Environment variables
   - Add your environment variables

### Option 2: Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Environment Variables**
   - Add environment variables in Vercel dashboard

### Option 3: GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     },
     "homepage": "https://yourusername.github.io/portfolio-design-7"
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## 🔍 Troubleshooting

### Common Issues

1. **Images not loading**
   - Check file paths in `public/assets/`
   - Ensure image names match exactly
   - Check file permissions

2. **Environment variables not working**
   - Restart the development server
   - Check variable names start with `REACT_APP_`
   - Verify `.env` file is in the root directory

3. **Build errors**
   - Run `npm install` to ensure all dependencies are installed
   - Check for syntax errors in configuration files
   - Clear node_modules and reinstall if needed

4. **Styling issues**
   - Check CSS file imports
   - Verify class names match
   - Clear browser cache

### Getting Help

- Check the browser console for error messages
- Review the configuration files for typos
- Ensure all required fields are filled

## 🎨 Advanced Customization

### 1. Custom Styling

- Edit CSS files in respective component folders
- Use CSS variables for consistent theming
- Add custom animations and transitions

### 2. Adding New Sections

1. Create a new component in `src/pages/`
2. Add it to the navigation in `portfolioConfig.js`
3. Include it in `App.js`

### 3. Custom Components

- Create reusable components in `src/components/`
- Use the configuration system for dynamic content
- Follow the existing component structure

### 4. SEO Optimization

Update the SEO section in `portfolioConfig.js`:

```javascript
seo: {
  title: "Your Name - Your Title",
  description: "Your professional description...",
  keywords: "portfolio, developer, your skills",
  author: "Your Name",
  ogImage: "/assets/og-image.png"
}
```

## 📱 Mobile Optimization

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔒 Security Best Practices

1. **Never commit sensitive information**
   - Use environment variables for sensitive data
   - Add `.env` to `.gitignore`

2. **Validate user inputs**
   - Sanitize any user-generated content
   - Use HTTPS in production

3. **Keep dependencies updated**
   - Regularly run `npm audit`
   - Update packages when security patches are available

## 📊 Performance Tips

1. **Optimize images**
   - Use appropriate image sizes
   - Implement lazy loading (already included)

2. **Minimize bundle size**
   - Remove unused dependencies
   - Use dynamic imports for large components

3. **Enable compression**
   - Configure gzip compression on your server
   - Use a CDN for static assets

## 🎯 Next Steps

1. **Customize your content** using the configuration file
2. **Add your images** to the assets folder
3. **Test thoroughly** on different devices
4. **Deploy** to your preferred platform
5. **Share** your portfolio with the world!

---

## 📞 Support

If you need help or have questions:

1. Check this guide first
2. Review the configuration files
3. Check the browser console for errors
4. Create an issue in the repository

Happy coding! 🚀
