# 3D Portfolio

A modern, interactive 3D portfolio website built with React, Three.js, and GSAP. This project showcases creative web development skills through immersive 3D experiences and smooth animations.

## Overview

This portfolio features fully interactive 3D models and scenes, demonstrating the power of WebGL and modern web technologies. Built as a learning project to master Three.js and React Three Fiber, it combines stunning visuals with performant code.

### Key Features

- **Interactive 3D Models** - Explore detailed 3D scenes powered by Three.js
- **Smooth Animations** - GSAP-powered transitions and scroll-based animations
- **Responsive Design** - Optimized experience across all device sizes
- **Post-Processing Effects** - Custom visual effects for enhanced aesthetics
- **Email Integration** - Contact form powered by EmailJS
- **Modern UI/UX** - Clean interface built with Tailwind CSS

## Tech Stack

- **Frontend Framework:** React 19
- **3D Rendering:** Three.js + React Three Fiber + React Three Drei
- **Animation:** GSAP (GreenSock Animation Platform)
- **Styling:** Tailwind CSS 4
- **Build Tool:** Vite
- **Email Service:** EmailJS

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
portfolio/
├── public/              # Static assets
│   ├── images/         # Image assets
│   ├── models/         # 3D model files (.glb)
│   └── textures/       # Texture files
├── src/
│   ├── components/     # React components
│   │   └── HeroModels/ # 3D model components
│   ├── constants/      # Configuration and constants
│   └── sections/       # Page sections
├── package.json
└── vite.config.js
```

## Learning Journey

This project was created as a hands-on approach to learning:

- Three.js fundamentals and 3D rendering concepts
- React Three Fiber ecosystem and best practices
- WebGL optimization techniques
- Modern animation patterns with GSAP
- Building performant 3D web experiences

### Inspiration

This portfolio draws inspiration from creative coding tutorials by:
- [JavaScript Mastery - Build a Mind-Bending 3D Portfolio](https://www.youtube.com/watch?v=kt0FrkQgw8w)
- [JavaScript Mastery - React Three.js Tutorial](https://www.youtube.com/watch?v=0fYi8SGA20k)

## Performance Optimizations

- Optimized 3D model files (using `-transformed.glb` variants)
- Lazy loading of heavy assets
- Efficient render loop management
- Responsive model complexity based on device capabilities

## Browser Support

Works best on modern browsers with WebGL 2.0 support:
- Chrome 90+
- Firefox 88+
- Safari 15+
- Edge 90+

## Deployment

Build the project for production:

```bash
npm run build
```

The `dist` folder will contain optimized static files ready for deployment to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## Contributing

This is a personal portfolio project, but suggestions and feedback are welcome! Feel free to open an issue if you notice any bugs or have ideas for improvements.

## License

This project is open source and available under the MIT License.

## Contact

For inquiries or collaboration opportunities, please use the contact form on the live site.

---

Built with passion and Three.js
