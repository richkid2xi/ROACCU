# ROAACCU - Co-operative Credit Union Website

A modern, fully responsive website for ROAACCU (a cooperative credit union) built with vanilla HTML5, CSS3, and JavaScript. The site features smooth scrolling navigation, interactive modals, carousel functionality, and beautiful animations.

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Git Setup & Upload](#git-setup--upload)
- [Vercel Deployment](#vercel-deployment)
- [Customization Guide](#customization-guide)
- [Browser Support](#browser-support)
- [License](#license)

---

## ✨ Features

### Core Functionality
- **Responsive Design** - Mobile-first approach with breakpoints at 480px, 720px, and 980px
- **Smooth Navigation** - Hash-based anchor links with CSS smooth scroll behavior
- **Interactive UI** - Hamburger menu, dropdown navigation, interactive modals
- **Carousel System** - Awards carousel with manual navigation controls
- **Product Modal** - Detailed product showcase with image gallery and enquiry form
- **Accordion FAQs** - Expandable FAQ section
- **Google Maps Integration** - Embedded map showing office location

### Visual Features
- **Scroll Reveal Animations** - Sections fade in as users scroll (IntersectionObserver API)
- **Hover Effects** - Interactive hover states on buttons, cards, and links
- **Custom Icons** - SVG-based social media icons (Facebook, Twitter)
- **Material Design Icons** - Google Material Symbols for UI elements
- **Responsive Images** - Logo assets for header and footer
- **Professional Typography** - Playfair Display for headings, Inter for body text

### Sections Included
1. **Hero Section** - Eye-catching welcome banner with CTA buttons
2. **About Us** - Organization mission and values
3. **Services** - Core service offerings
4. **Products** - Interactive product showcase with modal details
5. **Board of Directors** - Team member profiles with social links
6. **Awards & Recognition** - Carousel of company awards
7. **Contact Section** - Map + contact form side-by-side
8. **Footer** - Company info, quick links, social media

---

## 📁 Project Structure

```
ROAACCU/
├── index.html           # Main HTML file with all sections
├── styles.css           # Complete CSS styling (4000+ lines)
├── script.js            # JavaScript for interactivity
├── LICENSE.txt          # Proprietary license
├── README.md            # This file
└── assets/              # Image and icon assets
    ├── header-roaaccu-logo.png
    ├── footer-roaaccu-logo.png
    ├── hero-image.jpg
    ├── about-image.jpg
    └── ... (other product & gallery images)
```

### File Descriptions

**index.html (1,227 lines)**
- Complete semantic HTML5 structure
- Section IDs for smooth scroll navigation: `#hero`, `#about`, `#services`, `#products`, `#board`, `#contact`
- Accessibility features (ARIA labels, semantic tags)
- Google Fonts integration (Inter, Playfair Display, Material Symbols)

**styles.css (4,199 lines)**
- CSS custom properties for colors, shadows, spacing
- Mobile-first responsive design with 3 breakpoints
- Animation keyframes (fadeInUp, fadeInLeft, slideInRight)
- Button styles (.btn--primary, .btn--secondary, .btn--ghost)
- Component-based styling (.hero, .services, .products, .board, etc.)

**script.js**
- Hamburger menu toggle with smooth animations
- Navbar scroll behavior (sticky positioning, backdrop blur)
- Product modal open/close functionality
- Awards carousel navigation (prev/next, dot indicators)
- FAQ accordion toggle
- Scroll-reveal IntersectionObserver for animations
- Mobile menu scrolling support

---

## 🛠 Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Grid, Flexbox, Custom Properties, Media Queries, Animations
- **JavaScript (Vanilla)** - No frameworks or dependencies
- **Google Fonts** - Typography (Inter, Playfair Display)
- **Material Icons** - UI elements (Material Symbols Rounded)
- **Google Maps API** - Embedded location map
- **SVG** - Social media icons (Facebook, Twitter)

**No Build Tools Required** - This is a fully static site with no npm, webpack, or build process.

---

## 🚀 Getting Started

### Prerequisites
- A code editor (VS Code, Sublime Text, etc.)
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Git installed on your computer
- A GitHub account (for uploading)
- A Vercel account (for hosting)

### Local Development

1. **Clone or Download the Project**
   ```bash
   git clone <repository-url>
   cd ROAACCU
   ```

2. **Open in Browser**
   - Double-click `index.html` to open in your default browser, OR
   - Use a live server in your code editor (VS Code: Install "Live Server" extension)

3. **Edit Files**
   - Modify `index.html` to change content
   - Edit `styles.css` to update styling
   - Update `script.js` for functionality changes

4. **View Changes**
   - Save files and refresh the browser (F5 or Cmd+R)
   - If using Live Server, changes reload automatically

---

## 📤 Git Setup & Upload

### Step 1: Initialize Git Repository (First Time Only)

```bash
cd c:\Users\richa\ROACCU
git init
```

### Step 2: Configure Git User (First Time Only)

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Step 3: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click **New Repository** (green button, top right)
3. Repository name: `ROAACCU` (or your preferred name)
4. Description: "ROAACCU Co-operative Credit Union Website"
5. Choose **Private** or **Public**
6. **DO NOT** initialize with README, .gitignore, or License
7. Click **Create Repository**
8. Copy the repository URL (looks like: `https://github.com/yourusername/ROAACCU.git`)

### Step 4: Connect Local Repository to GitHub

```bash
# Add the remote repository
git remote add origin https://github.com/yourusername/ROAACCU.git

# Verify connection
git remote -v
```

### Step 5: Add and Commit Files

```bash
# Add all files to staging area
git add .

# Check status
git status

# Commit with message
git commit -m "Initial commit: ROAACCU website with all features"
```

### Step 6: Push to GitHub

```bash
# For first push, set upstream branch
git branch -M main
git push -u origin main

# For future updates, just use:
git push
```

### Making Updates Later

Every time you make changes:

```bash
# Add modified files
git add .

# Commit with descriptive message
git commit -m "Update: Fixed mobile button sizing"

# Push to GitHub
git push
```

### Common Git Commands

```bash
# Check changes since last commit
git status

# View commit history
git log --oneline

# View all changes in detail
git diff

# Undo last commit (keeps files)
git reset --soft HEAD~1

# View files tracked by git
git ls-files
```

---

## 🌐 Vercel Deployment

### Option 1: Deploy from GitHub (Recommended)

#### Step 1: Connect Vercel to GitHub

1. Go to [Vercel.com](https://vercel.com)
2. Sign up / Log in with GitHub
3. Click **Authorize** to connect your GitHub account

#### Step 2: Create New Project

1. Click **New Project** on Vercel dashboard
2. Click **Import Git Repository**
3. Paste your GitHub repository URL
4. Click **Continue**

#### Step 3: Configure Project

- **Project Name**: `ROAACCU` (auto-filled)
- **Framework**: Select **Other** (since it's vanilla HTML/CSS/JS)
- **Root Directory**: Leave as `.` (root)
- **Build Command**: Leave empty (not needed for static sites)
- **Output Directory**: Leave empty
- Click **Deploy**

#### Step 4: Wait for Deployment

- Vercel will automatically build and deploy
- You'll see a deployment progress screen
- Once complete, you'll get a live URL like: `https://roaaccu.vercel.app`

#### Step 5: View Your Site

- Click the URL to visit your live site
- Site is now publicly accessible
- Any `git push` to GitHub will trigger automatic redeployment

### Option 2: Deploy via ZIP Upload (Alternative)

1. Go to [Vercel.com](https://vercel.com)
2. Click **New Project**
3. Click **Upload** instead of importing Git
4. Select your entire `ROAACCU` folder
5. Click **Deploy**
6. Wait for deployment to complete

### After Deployment

- **Domain Setup**: Add custom domain in Vercel project settings
- **Environment Variables**: Add any secrets in Settings > Environment Variables
- **Analytics**: Enable Vercel Analytics in project settings
- **Automatic Deployments**: Every GitHub push automatically redeploys
- **Preview URLs**: Each branch gets a preview deployment

---

## 🎨 Customization Guide

### Change Colors

Edit [styles.css](styles.css#L1-L27) CSS custom properties:

```css
:root {
  --navy: #1b1f33;          /* Primary dark color */
  --green: #1f7a52;         /* Primary brand color */
  --white: #ffffff;         /* Background */
  --text: #232a36;          /* Text color */
  --gold: #d9a441;          /* Accent color */
}
```

### Change Typography

Modify fonts in [index.html](index.html#L8-L17), then update CSS:

```css
body {
  font-family: 'Inter', sans-serif;
}

h1, h2, h3 {
  font-family: 'Playfair Display', serif;
}
```

### Change Content

Edit [index.html](index.html) text sections:
- **Hero**: Lines 100-150
- **About**: Lines 200-250
- **Products**: Lines 500-800
- **Board Members**: Lines 869-1004
- **Contact**: Lines 1098-1147
- **Footer**: Lines 1148-1225

### Change Images

Replace files in `assets/` folder:
- Keep same filenames to avoid broken links
- Or update image paths in [index.html](index.html)

### Change Google Maps Location

Update coordinates in [index.html](index.html#L1125):
```html
<!-- Find this iframe and update coordinates -->
<iframe src="https://www.google.com/maps/embed?pb=...&3d4.899275...&4d-1.970367..."></iframe>
```

Get new coordinates from [Google Maps](https://maps.google.com)

---

## 🔧 Troubleshooting

### Vercel Deployments Not Updating
- Check GitHub sync is enabled in Vercel settings
- Try manual redeployment from Vercel dashboard
- Clear browser cache (Ctrl+Shift+Delete)

### Styles Not Loading
- Ensure `styles.css` is in root directory
- Check HTML link tag: `<link rel="stylesheet" href="styles.css" />`
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

### Images Not Showing
- Verify image paths: `assets/image-name.jpg`
- Check file exists in assets folder
- Use relative paths, not absolute paths

### Navigation Links Not Working
- Ensure section IDs match href anchors (e.g., `href="#products"` and `id="products"`)
- Check smooth scroll enabled in CSS: `scroll-behavior: smooth;`

### Mobile Menu Not Showing
- Test on mobile device or browser DevTools (F12 → Toggle device toolbar)
- Check hamburger button is clickable at 720px breakpoint

---

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📄 License

This project is protected under a **Proprietary License**. See [LICENSE.txt](LICENSE.txt) for details.

**All Rights Reserved** - Unauthorized copying, modification, or distribution without written permission is prohibited.

---

## 👥 Credits

**Design & Development**: Elitron@EITech CreaTives  
**Portfolio**: [https://elitron-portfolio.vercel.app/](https://elitron-portfolio.vercel.app/)

---

## 📞 Support

For issues or questions:
- Email: `roaaccugh@gmail.com`
- Office: [Your Office Address]
- Phone: [Your Phone Number]

---

## 🔄 Version History

- **v1.0** (Feb 2026) - Initial release
  - Complete website with all sections
  - Responsive design across all breakpoints
  - Smooth scroll navigation
  - Product modal and carousel functionality
  - Board member profiles
  - Contact form with Google Maps
  - Mobile-optimized buttons and menu

---

**Last Updated**: February 19, 2026
