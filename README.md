# Personal Portfolio Website

## Overview

This is a personal portfolio website built using React. It showcases projects, skills, and provides contact information. The website is styled with CSS and uses React state management for interactive elements like navigation menus and hover effects.

## Live Link

[Check out the live website.](https://portfolio-git-sprint-12-luke-bowman-dev.vercel.app/)

## Features

- **Responsive Design**: The website adapts to different screen sizes.
- **Interactive Navigation**: A toggleable navigation menu for mobile devices.
- **Hover Effects**: Smooth image transitions on hover for links and social media icons.
- **Project Showcase**: Displays projects with descriptions, GitHub links, and live URLs.
- **Skill List**: Organized list of skills categorized by technology areas.
- **Contact Information**: Email, location, resume download, and social media links.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **CSS**: Styling for the website.
- **GitHub Actions**: Continuous integration for deployment.
- **Vercel**: Hosting platform for the website.

## Setup Instructions

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Development Server**:

   ```bash
   npm start
   ```

   This will start the development server and open the website in your default browser.

## Deployment

The website is automatically deployed using GitHub Actions and hosted on Vercel. Any changes pushed to the `main` branch will trigger a deployment.

### GitHub Actions Workflow

The workflow is defined in `.github/workflows/ci.yml` and includes steps for building and deploying the website.

## Directory Structure

```
/src
  /components
    /App
      // App Component + Style
    /Header
      // Header Component + Style
    /Hero
      // Hero Component + Style
    /Projects
      // Projects Component + Style
    /ProjectCard
      // ProjectCard Component + Style
    /Skills
      // Skills Component + Style
    /Footer
      // Footer Component + Style
    /Contact
      // Contact Component + Style
  /assets
    // Images and other assets
  /data
    profile.ts
    projects.ts
    skills.ts
  types.ts
.gitignore
package.json
README.md
tsconfig.json
```
