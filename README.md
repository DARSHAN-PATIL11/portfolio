# 3D Interactive Portfolio Website

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vercel Status](https://img.shields.io/badge/Vercel-Deployed-brightgreen)](https://d4rsh11.vercel.app)
[![React](https://img.shields.io/badge/React-17.0.2-blue)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-0.149.0-orange)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.0.0-blueviolet)](https://vitejs.dev/)

An immersive 3D personal portfolio showcasing my journey as a software engineering student, built with modern web technologies to deliver a unique and engaging user experience.

## Overview

I am Darshan, a software engineering student from India. This portfolio demonstrates my technical and creative skills through a 3D animated interface. The site was designed to be both visually engaging and informative, providing insight into my skills, projects, and contact details.

## Live Demo

Experience the live version at: [https://d4rsh11.vercel.app](https://d4rsh11.vercel.app)

## Features

- Interactive 3D Environment with custom Three.js implementation
- Responsive design optimized for all device sizes
- Performance-optimized with efficient resource management
- Clean, intuitive user interface with smooth transitions
- Detailed project showcase with descriptions and links
- Global content delivery through Vercel's CDN

## Technologies Used

- **Frontend Framework**: React.js
- **3D Rendering**: Three.js with custom shaders
- **Styling**: Tailwind CSS for responsive design
- **Build Tool**: Vite for fast development and optimized production builds
- **Deployment**: Vercel continuous deployment
- **JavaScript**: ES6+ features

## Project Structure

```
portfolio/
├── public/                # Static assets (models, images, etc.)
├── src/                   # Source code
│   ├── assets/            # 3D models, textures, and images
│   ├── components/        # Reusable UI components
│   │   ├── canvas/        # Three.js canvas components
│   │   ├── sections/      # Main page sections
│   │   └── ui/            # UI elements (buttons, cards, etc.)
│   ├── constants/         # Configuration files and constants
│   ├── utils/             # Helper functions and utilities
│   ├── hooks/             # Custom React hooks
│   ├── App.jsx            # Root component
│   └── main.jsx           # Entry point
├── index.html             # HTML entry point
├── package.json           # Project metadata and dependencies
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── vite.config.js         # Vite bundler settings
├── vercel.json            # Vercel deployment configuration
└── README.md              # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/DARSHAN-PATIL11/portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Build for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Deployment

This project is deployed using [Vercel](https://vercel.com). The site automatically rebuilds and deploys on every push to the `main` branch.

To deploy your own instance:

1. Fork this repository
2. Create a Vercel account if you don't have one
3. Import your forked repository
4. Follow the setup instructions
5. Deploy

## Customization

To customize this portfolio for your own use:

1. Replace personal information in `src/constants/index.js`
2. Update 3D models in `src/assets/`
3. Modify project data in the projects section
4. Adjust the color scheme and styling through the Tailwind configuration

## Performance Considerations

The 3D rendering is optimized for modern browsers but can be resource-intensive on older devices. The site includes fallback options and performance optimizations to ensure a smooth experience across different hardware configurations.

## Browser Compatibility

The portfolio is compatible with:
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or collaboration opportunities, please reach out through the contact form on the portfolio website.
