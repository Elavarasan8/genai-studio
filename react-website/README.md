# GenAI Studio - React Website

Modern, responsive React application for Visionet GenAI Studio with full SEO and AEO optimization.

## 🚀 Features

- ⚛️ Built with **React 18** and **React Router v6**
- 🎨 Modern UI with **CSS animations** and gradients
- 📱 **Fully responsive** design
- 🔍 **SEO optimized** with React Helmet Async
- 🤖 **AEO ready** with structured data (JSON-LD)
- ⚡ Fast performance and optimized bundle size
- 🎯 Clean component architecture

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 🏗️ Project Structure

```
react-website/
├── public/
│   ├── index.html
│   ├── logo.png
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── manifest.json
│   ├── siteinfo.json
│   ├── knowledge.json
│   └── feed.xml
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   └── SEO.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Services.js
│   │   ├── Solutions.js
│   │   └── Contact.js
│   ├── styles/
│   │   └── App.css
│   ├── App.js
│   └── index.js
└── package.json
```

## 🎯 Available Scripts

- `npm start` - Run development server on http://localhost:3000
- `npm run build` - Create production build
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (one-way operation)

## 🌐 Pages

- **Home** (`/`) - Platform overview with features and benefits
- **About** (`/about`) - Company mission, values, and team
- **Services** (`/services`) - Platform services and offerings
- **Solutions** (`/solutions`) - Industry-specific solutions
- **Contact** (`/contact`) - Contact form and office locations

## 🔍 SEO & AEO Features

- React Helmet Async for dynamic meta tags
- JSON-LD structured data on all pages
- Open Graph and Twitter Card tags
- Canonical URLs
- robots.txt and sitemap.xml
- siteinfo.json for AI agents
- RSS feed (feed.xml)
- knowledge.json for AI crawlers

## 🚀 Deployment

### Netlify
```bash
npm run build
# Deploy the 'build' folder to Netlify
```

### Vercel
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
npm install gh-pages --save-dev
# Add to package.json:
"homepage": "https://yourusername.github.io/repo-name",
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
# Deploy:
npm run deploy
```

## 🎨 Customization

### Update Content
- Edit page components in `src/pages/`
- Modify navigation in `src/components/Navbar.js`
- Update footer in `src/components/Footer.js`

### Styling
- Main styles in `src/styles/App.css`
- CSS variables for easy theming
- Responsive breakpoints at 768px and 480px

### SEO
- Update meta tags in each page component using the SEO component
- Modify structured data in page files
- Update public/siteinfo.json for company information

## 📄 License

Copyright © 2025 Visionet Systems. All rights reserved.

## 🤝 Support

For questions or support, contact: info@visionetsystems.com

