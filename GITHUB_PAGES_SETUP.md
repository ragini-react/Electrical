# GitHub Pages Deployment Guide

## Setup Instructions

Your website is configured to deploy to GitHub Pages at:
**https://ragini-react.github.io/Electrical/**

### Step 1: Configure GitHub Pages

1. Go to your repository: https://github.com/ragini-react/Electrical
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/out` ← **IMPORTANT: Select /out folder**
4. Click **Save**

### Step 2: Rebuild and Push

```bash
# Rebuild with correct basePath
npm run build

# Commit and push
git add .
git commit -m "Configure for GitHub Pages"
git push
```

### Step 3: Wait for Deployment

- GitHub will automatically deploy your site
- Check the **Actions** tab to see deployment progress
- Your site will be live at: https://ragini-react.github.io/Electrical/

## Configuration Details

### next.config.ts
```typescript
{
  output: 'export',           // Static export
  distDir: 'out',            // Build to /out folder
  basePath: '/Electrical',   // GitHub Pages subfolder
  images: {
    unoptimized: true,       // Required for static export
  },
}
```

### Why basePath?

GitHub Pages serves your site at `/Electrical/` (repository name), so we need to configure Next.js to use this base path for all links and assets.

## Troubleshooting

### If site doesn't load:
1. Check GitHub Pages settings (Settings → Pages)
2. Ensure `/out` folder is selected
3. Wait 2-3 minutes after pushing
4. Clear browser cache

### If CSS/JS doesn't load:
- Verify `basePath: '/Electrical'` is in next.config.ts
- Rebuild: `npm run build`
- Push changes: `git push`

## Alternative: Root Domain

If you want to use a custom domain or root path:
1. Remove `basePath` from next.config.ts
2. Use a custom domain in GitHub Pages settings
3. Or deploy to a different hosting service (Vercel, Netlify)
