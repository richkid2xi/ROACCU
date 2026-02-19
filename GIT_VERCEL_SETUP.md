# Git & Vercel Setup - Step by Step Guide

This guide walks you through uploading your ROAACCU website to GitHub and deploying it on Vercel.

---

## 📋 Prerequisites

Before starting, you need:
1. **Git** installed - [Download Git](https://git-scm.com/download/win)
2. **GitHub Account** - [Sign up at GitHub.com](https://github.com/signup)
3. **Vercel Account** - [Sign up at Vercel.com](https://vercel.com/signup)

### Check if Git is Installed

Open PowerShell and type:
```powershell
git --version
```

If you see a version number, Git is installed. If not, download and install it.

---

## Part 1: Git Setup & GitHub Upload

### Step 1: Open PowerShell in Your Project Folder

1. Navigate to your ROAACCU folder:
```powershell
cd c:\Users\richa\ROACCU
```

2. Verify you see the project files:
```powershell
ls
```

You should see: `index.html`, `styles.css`, `script.js`, `assets/`, `LICENSE.txt`, `README.md`

### Step 2: Initialize Git Repository

Run this command ONCE (only first time):
```powershell
git init
```

Output: `Initialized empty Git repository in c:\Users\richa\ROACCU\.git`

### Step 3: Configure Git User (First Time Only)

```powershell
git config --global user.name "Your Full Name"
git config --global user.email "your.email@gmail.com"
```

**Example:**
```powershell
git config --global user.name "Richa Doe"
git config --global user.email "richa.doe@example.com"
```

### Step 4: Create a GitHub Repository

1. Go to **[GitHub.com](https://github.com)** and log in
2. Click the **+** icon (top right) → **New repository**
3. Fill in:
   - **Repository name**: `ROAACCU`
   - **Description**: `ROAACCU Co-operative Credit Union Website`
   - **Visibility**: Choose **Public** (so Vercel can access it) or **Private**
   - **Skip**: Don't initialize with README, .gitignore, or License
4. Click **Create repository**

### Step 5: Copy Your Repository URL

After creating, you'll see a screen with your repository URL:
- It looks like: `https://github.com/yourusername/ROAACCU.git`
- Copy this URL (you'll need it in the next step)

### Step 6: Connect Local Repository to GitHub

Back in PowerShell, run:
```powershell
git remote add origin https://github.com/yourusername/ROAACCU.git
```

**Replace** `yourusername` with your actual GitHub username.

### Step 7: Add All Files

```powershell
git add .
```

Check what's being added:
```powershell
git status
```

You should see all files marked as "new file"

### Step 8: Create First Commit

```powershell
git commit -m "Initial commit: ROAACCU website with all features"
```

### Step 9: Push to GitHub

For the first push, run:
```powershell
git branch -M main
git push -u origin main
```

Enter your GitHub username and password when prompted.

### Step 10: Verify on GitHub

1. Go to your GitHub repository URL: `https://github.com/yourusername/ROAACCU`
2. You should see all your files uploaded!

---

## Making Updates Later

Every time you make changes to your website:

```powershell
# 1. Check changes
git status

# 2. Add files
git add .

# 3. Commit with message
git commit -m "Update: Feature description"

# 4. Push to GitHub
git push
```

**Example:**
```powershell
git add .
git commit -m "Update: Fixed mobile button sizing"
git push
```

---

## Common Git Issues & Solutions

### Issue: "Authentication failed"
**Solution**: 
- Use a **GitHub Personal Access Token** instead of password
- Go to GitHub Settings → Developer settings → Personal access tokens
- Generate new token with `repo` scope
- Use token as password when prompted

### Issue: "Permission denied (publickey)"
**Solution**:
- Set up SSH keys: [GitHub SSH Guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)
- Or use HTTPS with personal access token (easier)

### Issue: "Nothing to commit"
**Solution**:
```powershell
git status  # Check if files are modified
git add .   # Make sure to add files first
```

---

## Part 2: Vercel Deployment

### Option 1: Deploy from GitHub (Automatic Updates)

#### Step 1: Connect Vercel to GitHub

1. Go to **[Vercel.com](https://vercel.com)** and log in
2. Click **New Project**
3. Click **Continue with GitHub**
4. Click **Authorize Vercel** to allow Vercel to access your GitHub account

#### Step 2: Import Your Repository

1. On Vercel, click **New Project** again
2. Click **Import Git Repository**
3. Paste your GitHub URL: `https://github.com/yourusername/ROAACCU`
4. Click **Continue**

#### Step 3: Configure Project

**Framework Preset**: Select **Other** (since it's vanilla HTML/CSS/JS)

Leave these as default:
- **Project Name**: `ROAACCU`
- **Root Directory**: `.`
- **Build Command**: (empty)
- **Output Directory**: (empty)

Click **Deploy**

#### Step 4: Wait for Deployment

Vercel will:
1. Clone your GitHub repository
2. Build and optimize your files
3. Deploy to their servers

You'll see a progress screen. Once it says "✓ Deployment complete", you're done!

#### Step 5: Get Your Live URL

You'll see your site URL like: `https://roaaccu.vercel.app`

Click it to view your live website! 🎉

---

### Option 2: Manual Upload (Without Git)

If you prefer not to use Git:

1. Go to **[Vercel.com](https://vercel.com)**
2. Click **New Project**
3. Click **Upload** (not "Import Git Repository")
4. Select your entire `ROAACCU` folder
5. Click **Deploy**

⚠️ **Note**: Manual updates require re-uploading each time

---

### Option 3: Deploy via Drag & Drop

Some services allow drag-and-drop deployment:
1. Select all files in ROAACCU folder
2. Drag and drop onto Vercel dashboard
3. Wait for deployment

---

## After Deployment

### Automatic Updates (If Using GitHub)

Every time you push to GitHub:
```powershell
git push
```

Vercel automatically redeploys your site! No manual updates needed.

### Custom Domain

1. In Vercel dashboard, go to your project
2. Click **Settings** → **Domains**
3. Enter your custom domain: `www.roaaccu.com`
4. Follow DNS setup instructions

### Environment Variables (If Needed)

1. Project **Settings** → **Environment Variables**
2. Add any secret keys or API tokens
3. Redeploy project

### View Analytics

1. Go to Vercel project dashboard
2. Click **Analytics** to see visitor stats
3. Monitor performance and errors

---

## Testing Before Deployment

### Test Locally

Before deploying to Vercel, test locally:

1. Open `index.html` in browser (double-click file)
2. Test all features:
   - Click navigation links
   - Check responsive design (F12 → Toggle device toolbar)
   - Open product modals
   - Try carousel navigation
   - Submit contact form
   - Check Google Maps loads

### Test on Mobile

1. Find your computer's IP address:
```powershell
ipconfig
# Look for "IPv4 Address" (e.g., 192.168.1.100)
```

2. On mobile phone, go to: `http://192.168.1.100:5500` (if using Live Server with port 5500)
3. Test all functionality on mobile

---

## Vercel Domains & URLs

### Free Vercel Domain
- Automatic: `projectname.vercel.app`
- Example: `roaaccu.vercel.app`
- Always HTTPS
- No special DNS setup needed

### Custom Domain (Optional)
- Buy domain from: GoDaddy, Namecheap, Google Domains, etc.
- Update DNS to point to Vercel (Vercel provides instructions)
- Example: `www.roaaccu.com`

---

## Troubleshooting Vercel Deployments

### Site shows 404 error

**Solution**: 
- Make sure `index.html` is in root directory (not in a subfolder)
- Vercel automatically serves `index.html` as homepage

### Images not showing

**Solution**:
- Verify images are in `assets/` folder
- Use relative paths: `assets/image.jpg`
- Not absolute paths: `/home/user/assets/image.jpg`

### Styles not applied

**Solution**:
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+Shift+R on Windows, Cmd+Shift+R on Mac)
- Check CSS file loads: Open DevTools (F12) → Network tab

### Changes not reflecting

**Solution**:
- Wait a few seconds for Vercel to redeploy
- Check GitHub shows your latest commits
- Check Vercel dashboard for deployment status
- Verify you did `git push` (not just `git add` and `git commit`)

### Vercel not recognizing GitHub changes

**Solution**:
- In Vercel project settings, check Git integration is connected
- Go to GitHub repo settings and check Vercel has access
- Manually trigger redeployment in Vercel dashboard

---

## Quick Reference Commands

### Git Commands
```powershell
# View status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your message"

# Push to GitHub
git push

# View commit history
git log --oneline

# See what changed
git diff
```

### Navigate & Check
```powershell
# Change to project folder
cd c:\Users\richa\ROACCU

# List files
ls

# Confirm Git is initialized
ls -la  # Should see .git folder
```

---

## Contact & Support

- **GitHub Docs**: [https://docs.github.com](https://docs.github.com)
- **Vercel Docs**: [https://vercel.com/docs](https://vercel.com/docs)
- **Git Guide**: [https://git-scm.com/book](https://git-scm.com/book)

---

**Created**: February 19, 2026
