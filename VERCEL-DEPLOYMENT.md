# 🚀 Vercel Deployment Instructions

## ⚠️ IMPORTANT: Root Directory Configuration

Since your React app is in the `react-website` subdirectory, you need to configure Vercel's **Root Directory** setting.

## 📝 Deployment Steps

### Option 1: Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**: https://vercel.com/dashboard
2. **Import Project**: 
   - Click "Add New..." → "Project"
   - Select your GitHub repo: `Elavarasan8/genai-studio`
3. **Configure Build Settings**:
   - **Framework Preset**: Create React App
   - **Root Directory**: `react-website` ⚠️ **IMPORTANT!**
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `build` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)
4. **Click "Deploy"**

### Option 2: Vercel CLI

```bash
# From project root
cd react-website
npm install -g vercel
vercel

# When prompted:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No
# - What's your project's name? genai-studio
# - In which directory is your code located? ./ (you're already in react-website)
# - Want to override settings? No
```

### Option 3: Using vercel.json (Alternative)

If the above doesn't work, create a `vercel.json` in the **root** directory:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "react-website/package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "build"
      }
    }
  ]
}
```

## ✅ Expected Result

After successful deployment, verify these files are accessible:

- ✅ `https://your-site.vercel.app/`
- ✅ `https://your-site.vercel.app/robots.txt`
- ✅ `https://your-site.vercel.app/ai.txt`
- ✅ `https://your-site.vercel.app/knowledge.json`
- ✅ `https://your-site.vercel.app/.well-known/ai-plugin.json`
- ✅ `https://your-site.vercel.app/sitemap.xml`

## 🧪 Test with ChatGPT

After deployment:
```
"Visit https://your-site.vercel.app and tell me about Visionet GenAI Studio"
```

## 🐛 Troubleshooting

### Build still fails?
1. Check that **Root Directory** is set to `react-website`
2. Make sure `package.json` doesn't have react-snap in postbuild
3. Clear Vercel cache and redeploy

### Files not found (404)?
1. Check Output Directory is set to `build`
2. Verify vercel.json rewrites are working
3. Check browser console for errors

## 📞 Need Help?
- Check build logs in Vercel dashboard
- Create GitHub issue with error details

