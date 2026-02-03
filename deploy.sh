#!/bin/bash

# Deployment Script for GitHub Pages
# This script deploys the React app to GitHub Pages
# Only deploys from the master branch

echo "🚀 Starting deployment to GitHub Pages..."

# Step 0: Check if we're on the master branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$CURRENT_BRANCH" != "master" ]; then
    echo "❌ Error: Deployment can only be done from the master branch!"
    echo "📍 Current branch: $CURRENT_BRANCH"
    echo ""
    echo "📋 Deployment Workflow:"
    echo "   1. Create a Pull Request to merge '$CURRENT_BRANCH' into 'master'"
    echo "   2. Review and merge the PR"
    echo "   3. Switch to master: git checkout master"
    echo "   4. Pull latest changes: git pull origin master"
    echo "   5. Run deployment: ./deploy.sh"
    echo ""
    exit 1
fi

echo "✅ Branch check passed: deploying from master"
echo ""

# Step 1: Install dependencies if needed
echo "📦 Checking dependencies..."
if [ ! -d "client/node_modules" ]; then
    echo "Installing client dependencies..."
    cd client && npm install && cd ..
fi

# Step 2: Build and deploy the React app
echo "🔨 Building and deploying React app..."
npm run deploy

# Step 3: Check deployment status
if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo "📍 Your site will be available at: https://ghanashyamkhanal.com"
    echo "⏳ Note: It may take a few minutes for changes to appear."
    echo ""
    echo "⚠️  IMPORTANT: Make sure GitHub Pages is configured correctly:"
    echo "   1. Go to: https://github.com/khanalg44/khanalg44.github.io/settings/pages"
    echo "   2. Under 'Source', select 'gh-pages' branch"
    echo "   3. Select '/ (root)' folder"
    echo "   4. Click 'Save'"
else
    echo "❌ Deployment failed. Please check the error messages above."
    exit 1
fi
