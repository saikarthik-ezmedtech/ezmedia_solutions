# EZ Media Solutions

A stunning, modern website built with React, Tailwind CSS, and Framer Motion featuring smooth animations and responsive design.

## Features

- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎨 **Beautiful Design** - Modern UI with gradient effects and smooth animations
- 📱 **Fully Responsive** - Looks great on all devices
- 🚀 **Smooth Animations** - Powered by Framer Motion
- 🎯 **SEO Ready** - Optimized for search engines
- 🌈 **Customizable** - Easy to customize colors and content

## Tech Stack

- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library
- **Vite** - Next generation frontend tooling
- **React Icons** - Popular icon library

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Navigation bar with scroll effects
│   ├── Hero.jsx        # Hero section with animations
│   ├── Features.jsx    # Features showcase
│   ├── Services.jsx    # Services section
│   ├── Stats.jsx       # Statistics and testimonials
│   ├── CTA.jsx         # Call-to-action section
│   └── Footer.jsx      # Footer with links and newsletter
├── App.jsx             # Main app component
├── main.jsx            # App entry point
└── index.css           # Global styles and Tailwind imports
```

## Customization

### Colors

Edit the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      },
    },
  },
}
```

### Content

Update the content in each component file located in `src/components/`.

### Animations

All animations are powered by Framer Motion. You can customize them by modifying the `motion` props in each component.

## License

MIT License - feel free to use this project for your own purposes.

## Support

For support, email hello@ezmedia.com or open an issue in the repository.

---

Made with ❤️ by EZ Media Solutions
