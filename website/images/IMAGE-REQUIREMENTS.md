# 📸 Image Requirements Guide

## Required Images for GenAI Studio Website

This folder should contain all images used throughout the website.

---

## 🎯 Essential Images (Must Have)

### 1. Logo
**Filename:** `logo.png`
- **Size:** 200x200 pixels (or larger, will scale down)
- **Format:** PNG with transparent background
- **Usage:** Navigation bar, footer
- **Requirements:** 
  - Clear and legible
  - Works on both light and dark backgrounds
  - SVG format is even better if available

### 2. Favicon
**Filename:** `favicon.png`
- **Sizes needed:** 16x16, 32x32, 48x48 pixels
- **Format:** PNG or ICO
- **Usage:** Browser tab icon
- **Tip:** Use https://favicon.io/ to generate multiple sizes

### 3. Open Graph Image
**Filename:** `og-image.jpg`
- **Size:** 1200 x 630 pixels (exact)
- **Format:** JPG or PNG
- **Usage:** Facebook, LinkedIn, Slack, Discord previews
- **Content suggestions:**
  - Company logo
  - Tagline: "Enterprise Generative AI Platform"
  - Modern, professional design
  - Readable text at small sizes

### 4. Twitter Card Image
**Filename:** `twitter-card.jpg`
- **Size:** 1200 x 600 pixels (2:1 ratio)
- **Format:** JPG or PNG
- **Usage:** Twitter/X link previews
- **Content:** Similar to Open Graph image

---

## 📱 Progressive Web App Icons (Recommended)

For full PWA support, create these icon sizes:

```
icon-72x72.png     (72 x 72 pixels)
icon-96x96.png     (96 x 96 pixels)
icon-128x128.png   (128 x 128 pixels)
icon-144x144.png   (144 x 144 pixels)
icon-152x152.png   (152 x 152 pixels)
icon-192x192.png   (192 x 192 pixels)
icon-384x384.png   (384 x 384 pixels)
icon-512x512.png   (512 x 512 pixels)
```

**Format:** PNG
**Content:** Company logo or app icon
**Tip:** Use https://realfavicongenerator.net/ to generate all sizes at once

---

## 🎨 Optional Images (Enhance the site)

### Screenshots
**Filenames:** `screenshot1.png`, `screenshot2.png`
- **Size:** 1280 x 720 pixels (16:9 ratio)
- **Usage:** PWA app screenshots
- **Content:** Platform interface, dashboard views

### Additional Icons
**Filenames:** `dashboard-icon.png`, `new-icon.png`
- **Size:** 96 x 96 pixels
- **Usage:** PWA shortcuts
- **Content:** Relevant icons for actions

### Feature Images
For enhanced content pages:
- Hero images for each page
- Service illustrations
- Team photos
- Office photos
- Product screenshots

---

## 🛠️ Image Creation Tools

### Free Tools
- **Canva**: https://canva.com/ (Easy, templates available)
- **Figma**: https://figma.com/ (Professional design tool)
- **GIMP**: https://gimp.org/ (Open-source Photoshop alternative)
- **Photopea**: https://photopea.com/ (Browser-based image editor)

### Favicon Generators
- **Favicon.io**: https://favicon.io/
- **RealFaviconGenerator**: https://realfavicongenerator.net/
- **Favicon Generator**: https://www.favicon-generator.org/

### Icon Libraries (Free)
- **Font Awesome**: https://fontawesome.com/
- **Heroicons**: https://heroicons.com/
- **Material Icons**: https://fonts.google.com/icons
- **Feather Icons**: https://feathericons.com/

### Stock Photos (Free)
- **Unsplash**: https://unsplash.com/
- **Pexels**: https://pexels.com/
- **Pixabay**: https://pixabay.com/

---

## 📐 Image Optimization

Before uploading, optimize images for web:

### Compression Tools
- **TinyPNG**: https://tinypng.com/ (Lossless PNG/JPG compression)
- **Squoosh**: https://squoosh.app/ (Google's image optimizer)
- **ImageOptim**: https://imageoptim.com/ (Mac app)

### Command Line (Advanced)
```bash
# Convert to WebP (better compression)
cwebp -q 80 input.png -o output.webp

# Resize image
convert input.png -resize 1200x630 output.png

# Optimize PNG
optipng -o7 input.png
```

### Target File Sizes
- Logo: < 50 KB
- Favicon: < 10 KB
- OG Image: < 300 KB
- PWA Icons: < 50 KB each

---

## ✅ Quick Checklist

Before deployment, ensure you have:

- [ ] `logo.png` - Company logo (transparent background)
- [ ] `favicon.png` - Browser tab icon
- [ ] `og-image.jpg` - Social media preview image
- [ ] `twitter-card.jpg` - Twitter preview image
- [ ] PWA icons (all 8 sizes) - For app installation
- [ ] All images optimized for web (compressed)
- [ ] All images properly named (no spaces, lowercase)
- [ ] All images uploaded to `images/` folder

---

## 🎯 Brand Guidelines (Example)

When creating images, maintain consistent branding:

### Colors
- Primary: #4F46E5 (Indigo)
- Secondary: #10B981 (Green)
- Background: #FFFFFF (White)
- Text: #1F2937 (Dark Gray)

### Typography
- Headings: Bold, Modern Sans-serif
- Body: Clean, Readable Sans-serif

### Style
- Modern and professional
- Clean and minimal
- Technology-focused
- Corporate yet approachable

---

## 📊 Image Performance Tips

1. **Use WebP format** when possible (better compression)
2. **Lazy load images** below the fold
3. **Serve responsive images** (different sizes for different screens)
4. **Use CDN** for faster delivery
5. **Add proper alt text** for accessibility and SEO

---

## 🔍 Alt Text Guidelines

Every image needs descriptive alt text:

✅ **Good Examples:**
```html
<img src="logo.png" alt="GenAI Studio Logo - Enterprise AI Platform">
<img src="hero.jpg" alt="AI-powered dashboard showing analytics and insights">
<img src="team.jpg" alt="GenAI Studio team collaborating on AI solutions">
```

❌ **Bad Examples:**
```html
<img src="logo.png" alt="logo">
<img src="hero.jpg" alt="image">
<img src="team.jpg" alt="">
```

---

## 📞 Need Help?

If you need assistance creating images:
1. Hire a designer on Fiverr or Upwork
2. Use AI tools like Midjourney or DALL-E
3. Use pre-made templates from Canva
4. Contact the development team

---

## 🎨 Template Suggestion

For quick creation, search Canva for:
- "Tech Logo"
- "Social Media Banner Tech"
- "App Icon"
- "Favicon"

Filter by color scheme (purple/indigo) to match GenAI Studio branding.

---

**Once you've created all images, place them in this `images/` folder and verify they're referenced correctly in the HTML files.**

**Status:** ⚠️ Images Required Before Deployment

