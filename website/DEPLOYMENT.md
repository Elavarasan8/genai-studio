# GenAI Studio - Deployment Guide

## 📋 Pre-Deployment Checklist

Before deploying your GenAI Studio website, complete these steps:

### 1. Content Customization

- [ ] Replace all `genaistudio.com` with your actual domain
- [ ] Update contact email addresses
- [ ] Update phone numbers
- [ ] Update company address
- [ ] Update social media links
- [ ] Customize color scheme in `styles.css`
- [ ] Add your company logo and branding

### 2. Images Required

Create an `images/` folder with:

- [ ] `logo.png` (200x200px) - Company logo
- [ ] `favicon.png` - Favicon in multiple sizes (16x16, 32x32, 48x48)
- [ ] `icon-72x72.png` - PWA icon
- [ ] `icon-96x96.png` - PWA icon
- [ ] `icon-128x128.png` - PWA icon
- [ ] `icon-144x144.png` - PWA icon
- [ ] `icon-192x192.png` - PWA icon
- [ ] `icon-512x512.png` - PWA icon
- [ ] `og-image.jpg` (1200x630px) - Open Graph image
- [ ] `twitter-card.jpg` (1200x600px) - Twitter card image

### 3. SSL Certificate

- [ ] Obtain SSL certificate (Let's Encrypt, CloudFlare, or commercial)
- [ ] Install certificate on your server
- [ ] Verify HTTPS is working
- [ ] Update all URLs to use `https://`

### 4. Domain Configuration

- [ ] Point domain DNS to your server
- [ ] Configure DNS records (A, AAAA, CNAME)
- [ ] Set up www redirect (if desired)
- [ ] Verify domain propagation

## 🚀 Deployment Methods

### Method 1: Traditional Web Hosting (cPanel/FTP)

1. **Connect via FTP**
```
Host: ftp.yourdomain.com
Username: your_username
Password: your_password
Port: 21 (or 22 for SFTP)
```

2. **Upload Files**
- Upload all files from `website/` folder to `public_html/` or `www/`
- Ensure `.htaccess` is uploaded (enable "Show hidden files")
- Verify file permissions (644 for files, 755 for directories)

3. **Verify**
- Visit https://yourdomain.com
- Check all pages load correctly
- Test forms and links

### Method 2: Cloud Hosting (AWS, Azure, GCP)

#### AWS S3 + CloudFront

```bash
# Install AWS CLI
aws configure

# Create S3 bucket
aws s3 mb s3://yourdomain.com

# Enable static website hosting
aws s3 website s3://yourdomain.com --index-document index.html --error-document 404.html

# Upload files
aws s3 sync ./website/ s3://yourdomain.com --acl public-read

# Create CloudFront distribution (via AWS Console)
# Configure SSL certificate
# Update DNS to point to CloudFront
```

#### Azure Static Web Apps

```bash
# Install Azure CLI
az login

# Create resource group
az group create --name genai-studio --location eastus

# Create static web app
az staticwebapp create \
    --name genai-studio \
    --resource-group genai-studio \
    --source ./website \
    --location eastus \
    --branch main

# Configure custom domain and SSL
```

#### Google Cloud Storage + Cloud CDN

```bash
# Install gcloud CLI
gcloud init

# Create bucket
gsutil mb gs://yourdomain.com

# Upload files
gsutil -m cp -r ./website/* gs://yourdomain.com

# Make bucket public
gsutil iam ch allUsers:objectViewer gs://yourdomain.com

# Enable website configuration
gsutil web set -m index.html -e 404.html gs://yourdomain.com

# Set up Cloud CDN and SSL certificate
```

### Method 3: CDN / Netlify / Vercel

#### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
cd website
netlify deploy --prod

# Configure custom domain in Netlify dashboard
# SSL is automatic with Netlify
```

#### Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd website
vercel --prod

# Configure domain in Vercel dashboard
```

#### Cloudflare Pages

1. Log in to Cloudflare dashboard
2. Go to Pages
3. Create new project
4. Connect Git repository or upload files
5. Deploy
6. Configure custom domain
7. SSL is automatic

## 🔧 Post-Deployment Configuration

### 1. Verify SEO Setup

```bash
# Check robots.txt
curl https://yourdomain.com/robots.txt

# Check sitemap
curl https://yourdomain.com/sitemap.xml

# Check structured data
# Use: https://validator.schema.org/
```

### 2. Submit to Search Engines

**Google Search Console**
1. Go to https://search.google.com/search-console
2. Add property (your domain)
3. Verify ownership (DNS or HTML file)
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

**Bing Webmaster Tools**
1. Go to https://www.bing.com/webmasters
2. Add site
3. Verify ownership
4. Submit sitemap

### 3. Configure Analytics

**Google Analytics 4**
```html
<!-- Add to all pages before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 4. Set Up Contact Form Backend

The contact form needs a backend to function. Options:

**Option A: Formspree**
```html
<!-- In contact.html, update form tag -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option B: Netlify Forms**
```html
<!-- Add to form tag -->
<form name="contact" method="POST" data-netlify="true">
```

**Option C: Custom Backend**
Create a serverless function or API endpoint to handle form submissions.

### 5. Performance Optimization

**Test Performance**
- https://pagespeed.web.dev/
- https://www.webpagetest.org/
- https://tools.pingdom.com/

**Optimize Images**
```bash
# Use tools like:
npm install -g sharp-cli
sharp -i input.jpg -o output.webp
```

**Enable Compression**
Gzip/Brotli should be enabled (already in .htaccess for Apache)

### 6. Security Hardening

**Content Security Policy**
Already configured in .htaccess, but verify:
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https:;
```

**Security Headers Test**
https://securityheaders.com/

### 7. Monitoring Setup

**Uptime Monitoring**
- UptimeRobot: https://uptimerobot.com/
- Pingdom: https://www.pingdom.com/
- StatusCake: https://www.statuscake.com/

**Error Tracking**
- Sentry: https://sentry.io/
- Rollbar: https://rollbar.com/

## ✅ Validation Checklist

After deployment, verify:

- [ ] Site loads over HTTPS
- [ ] All pages accessible
- [ ] Navigation works correctly
- [ ] Forms submit properly
- [ ] Images display correctly
- [ ] Mobile responsive
- [ ] robots.txt accessible
- [ ] sitemap.xml accessible
- [ ] Structured data valid (use validator.schema.org)
- [ ] Open Graph tags working (use opengraph.xyz)
- [ ] Page speed score > 90 (use pagespeed.web.dev)
- [ ] Security headers configured (use securityheaders.com)
- [ ] Analytics tracking
- [ ] Search Console configured
- [ ] Bing Webmaster Tools configured

## 📊 Post-Launch Tasks

### Week 1
- [ ] Monitor analytics for errors
- [ ] Check Search Console for crawl errors
- [ ] Verify indexing status
- [ ] Test all forms and links
- [ ] Monitor uptime

### Week 2-4
- [ ] Analyze traffic sources
- [ ] Review performance metrics
- [ ] Check search rankings
- [ ] Gather user feedback
- [ ] Make necessary adjustments

### Monthly
- [ ] Review analytics reports
- [ ] Update content and blog
- [ ] Check for broken links
- [ ] Update sitemap if needed
- [ ] Refresh feed.xml with new content

## 🆘 Troubleshooting

### Site Not Loading
1. Check DNS propagation: https://dnschecker.org/
2. Verify server is running
3. Check SSL certificate validity
4. Review error logs

### Pages Not Indexing
1. Check robots.txt isn't blocking crawlers
2. Verify sitemap is submitted
3. Check for noindex meta tags
4. Review Search Console for errors

### Poor Performance
1. Enable compression (Gzip/Brotli)
2. Optimize images (WebP format)
3. Minimize CSS/JS
4. Enable browser caching
5. Use CDN

### Forms Not Working
1. Configure form backend (Formspree/Netlify Forms)
2. Check CORS settings
3. Verify email configuration
4. Test with browser console open

## 📞 Support

For deployment issues or questions:
- Email: support@genaistudio.com
- Documentation: https://genaistudio.com/docs

---

**Deployment Date:** _______________
**Deployed By:** _______________
**Server/Hosting:** _______________
**SSL Provider:** _______________

