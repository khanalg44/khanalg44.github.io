# Deployment Instructions for GitHub Pages

## Quick Deploy
Run the deployment script:
```bash
./deploy.sh
```

## Manual Deployment Steps

### 1. Build and Deploy
From the project root, run:
```bash
npm run deploy
```

This will automatically:
- Build the React production bundle
- Deploy to the `gh-pages` branch

### 2. Configure GitHub Pages Settings

**IMPORTANT:** You must configure GitHub to serve from the `gh-pages` branch:

1. Go to your repository settings: https://github.com/khanalg44/khanalg44.github.io/settings/pages

2. Under "Source":
   - Select **Branch: `gh-pages`**
   - Select **Folder: `/ (root)`**
   - Click **Save**

3. Wait 1-2 minutes for GitHub to build and deploy

4. Visit your site: https://khanalg44.github.io

### 3. Verify Deployment
Check that the `gh-pages` branch was updated:
```bash
git fetch origin
git log origin/gh-pages -1
```

## Troubleshooting

### Issue: Seeing README.md instead of the app
**Solution:** Make sure GitHub Pages source is set to `gh-pages` branch (not `master` or `main`)

### Issue: 404 errors on routes
**Solution:** The `404.html` file handles client-side routing. Make sure it was deployed.

### Issue: Deployment fails
**Solution:** 
```bash
# Clean and reinstall dependencies
cd client
rm -rf node_modules build
npm install
cd ..
npm run deploy
```

## Updating Content

After making changes to your React app:

```bash
# 1. Make your changes in the code
# 2. Test locally
npm run dev

# 3. Deploy to GitHub Pages
npm run deploy

# 4. (Optional) Commit your source code changes
git add .
git commit -m "Update content"
git push origin dev
```

## Important Notes

- The `gh-pages` branch is automatically managed by the `gh-pages` package
- Your source code stays in the `dev` or `master` branch
- The built files are deployed to the `gh-pages` branch
- Never manually edit files in the `gh-pages` branch

## Site URL
Your deployed site: **https://khanalg44.github.io**
