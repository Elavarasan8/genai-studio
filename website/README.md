# GenAI Studio Website

A fully SEO and AEO (Agent Engine Optimization) optimized website for GenAI Studio - an enterprise Generative AI platform.

## 🌟 Features

This website is built with comprehensive optimization for both traditional search engines (Google, Bing) and AI-powered search systems (ChatGPT, Gemini, Perplexity, Claude).

### ✅ SEO Optimization

- **Meta Tags**: Comprehensive meta tags on all pages including title, description, keywords
- **Open Graph Tags**: Social media optimization for Facebook, LinkedIn
- **Twitter Cards**: Optimized previews for Twitter/X
- **Semantic HTML**: Proper HTML5 semantic structure
- **Alt Text**: All images include descriptive alt text
- **Canonical URLs**: Prevent duplicate content issues
- **Sitemap**: XML sitemap for search engine crawling
- **Robots.txt**: Proper crawler directives

### 🤖 AEO (Agent Engine Optimization)

- **JSON-LD Schema**: Structured data on every page (Organization, WebSite, FAQPage, Service, etc.)
- **siteinfo.json**: Machine-readable organization information for AI agents
- **manifest.json**: PWA manifest for enhanced discoverability
- **RSS Feed**: Content feed for AI crawlers and aggregators
- **FAQ Schema**: Direct answers for AI-generated responses
- **Semantic Content**: Clear, structured content optimized for AI understanding

### 🔍 Discovery Files

```
website/
├── robots.txt          # Crawler directives (allows all AI bots)
├── sitemap.xml         # Site structure for indexing
├── siteinfo.json       # AI-readable organization data
├── manifest.json       # PWA configuration
└── feed.xml           # RSS feed for content updates
```

### 📄 Pages Included

1. **index.html** - Homepage with hero, capabilities, features, use cases
2. **about.html** - About page with mission, values, and team info
3. **services.html** - Detailed services page with all offerings
4. **contact.html** - Contact page with form and multiple contact methods
5. **styles.css** - Modern, responsive CSS styling

### 🧩 Structured Data Types

Each page includes appropriate schema.org structured data:

- **Organization Schema**: Company information, contact details, social links
- **WebSite Schema**: Site-level information with search action
- **FAQPage Schema**: Common questions and answers
- **Service Schema**: Detailed service offerings
- **SoftwareApplication Schema**: Platform information
- **ContactPage Schema**: Contact information
- **AboutPage Schema**: Company background

## 🚀 Getting Started

### Prerequisites

- A web server (Apache, Nginx, or any static hosting service)
- HTTPS certificate (required for production)
- Domain name

### Installation

1. **Clone or download this repository**

```bash
cd website/
```

2. **Update Configuration**

Edit the following files to match your domain:

- `robots.txt` - Update sitemap URLs
- `sitemap.xml` - Replace `https://genaistudio.com` with your domain
- `siteinfo.json` - Update contact information and URLs
- All HTML files - Update canonical URLs and Open Graph URLs

3. **Add Images**

Create an `images/` directory and add:
- `logo.png` - Company logo
- `favicon.png` - Favicon (16x16, 32x32, 48x48)
- `icon-*.png` - PWA icons (72x72, 96x96, 128x128, 144x144, 192x192, 512x512)
- `og-image.jpg` - Open Graph image (1200x630)
- `twitter-card.jpg` - Twitter card image (1200x600)

4. **Deploy to Web Server**

Upload all files to your web server's root directory.

### Local Testing

For local testing, you can use Python's built-in server:

```bash
cd website/
python -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## 📋 Customization Checklist

Before going live, update the following:

- [ ] Replace all instances of `genaistudio.com` with your actual domain
- [ ] Update contact information in `siteinfo.json`
- [ ] Update email addresses in all HTML files
- [ ] Update phone numbers in `contact.html` and `siteinfo.json`
- [ ] Update company address in `contact.html` and `siteinfo.json`
- [ ] Add real company logo and images
- [ ] Update social media links in `siteinfo.json`
- [ ] Customize color scheme in `styles.css` (`:root` variables)
- [ ] Update copyright year in footer
- [ ] Set up SSL/HTTPS certificate
- [ ] Configure form submission endpoint in `contact.html`
- [ ] Add Google Analytics or other tracking (optional)
- [ ] Verify all links work correctly

## 🔧 Technical Details

### CSS Variables

The site uses CSS custom properties for easy theming:

```css
--primary-color: #4F46E5;
--secondary-color: #10B981;
--text-primary: #1F2937;
/* ... and more */
```

Edit these in `styles.css` to match your brand colors.

### Responsive Design

The site is fully responsive with breakpoints at:
- 768px (tablets)
- 480px (mobile)

### Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤖 AI Crawler Support

This website explicitly allows all major AI crawlers:

- **GPTBot** (OpenAI/ChatGPT)
- **ChatGPT-User** (ChatGPT web search)
- **Google-Extended** (Google Gemini)
- **CCBot** (Common Crawl)
- **anthropic-ai** (Claude)
- **Claude-Web** (Claude web search)
- **PerplexityBot** (Perplexity AI)
- **Bingbot** (Microsoft Bing/Copilot)
- **Googlebot** (Google Search)

All crawlers are explicitly allowed in `robots.txt`.

## 📊 SEO Best Practices Implemented

1. ✅ **Semantic HTML5** structure
2. ✅ **Mobile-first responsive** design
3. ✅ **Fast loading** (minimal CSS, no external dependencies)
4. ✅ **Accessible** (ARIA labels, semantic tags, focus states)
5. ✅ **Schema.org structured data** on every page
6. ✅ **Open Graph** and **Twitter Card** meta tags
7. ✅ **XML sitemap** with priority and change frequency
8. ✅ **Robots.txt** with proper directives
9. ✅ **Canonical URLs** to prevent duplication
10. ✅ **Alt text** for all images
11. ✅ **Descriptive page titles** (unique for each page)
12. ✅ **Meta descriptions** (unique, keyword-rich)
13. ✅ **H1-H6 heading hierarchy**
14. ✅ **Internal linking** structure
15. ✅ **RSS feed** for content updates

## 🎯 AEO (Agent Engine Optimization) Features

1. ✅ **JSON-LD structured data** for machine reading
2. ✅ **siteinfo.json** for AI agent understanding
3. ✅ **FAQ schema** for direct AI answers
4. ✅ **Clear content hierarchy** for AI parsing
5. ✅ **Descriptive headings** and subheadings
6. ✅ **Semantic HTML** for context understanding
7. ✅ **RSS feed** for content discovery
8. ✅ **Explicit crawler permissions** in robots.txt
9. ✅ **Schema.org vocabulary** throughout
10. ✅ **Contact information** in multiple formats

## 📈 Monitoring & Analytics

### Recommended Tools

1. **Google Search Console** - Monitor search performance
2. **Bing Webmaster Tools** - Bing search visibility
3. **Google Analytics** - Traffic and user behavior
4. **Lighthouse** - Performance and SEO audits
5. **Schema Markup Validator** - Verify structured data

### Testing Your SEO

```bash
# Test structured data
https://validator.schema.org/

# Test Open Graph tags
https://www.opengraph.xyz/

# Test Twitter Cards
https://cards-dev.twitter.com/validator

# Test robots.txt
https://yourdomain.com/robots.txt

# Test sitemap
https://yourdomain.com/sitemap.xml
```

## 🔐 Security Considerations

1. **Enable HTTPS** - Required for production
2. **Configure CSP** - Content Security Policy headers
3. **Set security headers** - X-Frame-Options, X-Content-Type-Options
4. **Form validation** - Add backend validation for contact form
5. **Rate limiting** - Protect contact form from spam
6. **Input sanitization** - Sanitize all user inputs
7. **CORS policy** - Configure appropriate CORS headers

## 📝 Content Updates

To keep AI systems updated:

1. **Update feed.xml** when adding new content
2. **Update sitemap.xml** with new pages
3. **Update lastmod dates** in sitemap
4. **Keep structured data current**
5. **Maintain consistent schema** across pages

## 🆘 Support & Resources

### Documentation

- [Schema.org Documentation](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [JSON-LD Specification](https://json-ld.org/)
- [RSS 2.0 Specification](https://www.rssboard.org/rss-specification)

### Validation Tools

- [Schema Markup Validator](https://validator.schema.org/)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Open Graph Debugger](https://www.opengraph.xyz/)
- [W3C HTML Validator](https://validator.w3.org/)

## 📄 License

This website template is provided as-is for GenAI Studio.

## 🤝 Contributing

For issues or improvements, please contact the development team.

---

**Built with ❤️ for optimal discoverability by both humans and AI systems**

Last Updated: October 30, 2025

