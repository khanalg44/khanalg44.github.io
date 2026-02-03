# Deployment Instructions for GitHub Pages

## Deployment Workflow

**IMPORTANT:** Deployments to GitHub Pages only happen from the `master` branch.

### From Development Branch (e.g., `dev`)

1. **Make your changes** in the development branch
   ```bash
   git checkout dev
   # Make your changes
   git add .
   git commit -m "Your changes"
   git push origin dev
   ```

2. **Create a Pull Request** on GitHub
   - Go to: https://github.com/khanalg44/khanalg44.github.io/compare
   - Base: `master` ← Compare: `dev`
   - Review changes and create PR

3. **Review and Merge** the PR into master

4. **Deploy from master**
   ```bash
   git checkout master
   git pull origin master
   ./deploy.sh
   ```

## Quick Deploy (from master branch only)
Run the deployment script:
```bash
./deploy.sh
```

The script will automatically check that you're on the `master` branch before deploying.

## Manual Deployment Steps

### 1. Ensure You're on Master Branch
```bash
git checkout master
git pull origin master
```

### 2. Build and Deploy
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

4. Visit your site: https://ghanashyamkhanal.com (or https://khanalg44.github.io)

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
# 1. Make your changes in the dev branch
git checkout dev
# ... make changes ...

# 2. Test locally
npm run dev

# 3. Commit and push to dev
git add .
git commit -m "Update content"
git push origin dev

# 4. Create PR on GitHub to merge dev → master

# 5. After PR is merged, deploy from master
git checkout master
git pull origin master
./deploy.sh
```

## Important Notes

- The `gh-pages` branch is automatically managed by the `gh-pages` package
- Your source code stays in the `dev` or `master` branch
- The built files are deployed to the `gh-pages` branch
- Never manually edit files in the `gh-pages` branch

## Site URL
Your deployed site: **https://ghanashyamkhanal.com**

## Custom Domain Configuration

Your site is configured to use the custom domain `ghanashyamkhanal.com`. 

### DNS Configuration (Already Done)
Make sure your DNS provider has these records:
- **A Records** pointing to GitHub Pages IPs:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153
- **CNAME Record** (optional): `www` pointing to `khanalg44.github.io`

### GitHub Settings
In your repository settings (https://github.com/khanalg44/khanalg44.github.io/settings/pages):
1. Under "Custom domain", enter: `ghanashyamkhanal.com`
2. Check "Enforce HTTPS" (after DNS propagates)
3. The CNAME file will be automatically preserved during deployments
