# Audiovisual Post-Production Portfolio

A fully responsive, cinematic portfolio website designed for showcasing audiovisual post-production work. Built with pure HTML, CSS, and JavaScript - no frameworks, no build tools, ready for GitHub Pages.

## Features

- **Cinematic Dark Theme** - Minimalistic design with subtle neon accents (cyan, magenta, purple)
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - CSS-based micro-animations and transitions
- **Portfolio Gallery** - Grid layout with modal/lightbox for project details
- **Video Integration** - Embedded YouTube/Vimeo support for project showcases
- **Contact Form** - Client-side form with validation
- **SEO Optimized** - Semantic HTML structure

## Sections

1. **Hero** - Full-screen introduction with animated gradient text
2. **About** - Profile section with skills showcase
3. **Portfolio** - Project gallery with modal popups
4. **Contact** - Contact form and social media links
5. **Footer** - Copyright and GitHub link

## Customization Guide

### Update Your Information

1. **Personal Details** (in `index.html`):
   - Line 33: Replace "Your Name" with your actual name
   - Line 242: Update email address
   - Lines 246-277: Update social media links

2. **Project Portfolio** (in `script.js`):
   - Lines 4-57: Update the `projects` array with your actual projects
   - Replace video URLs with your YouTube/Vimeo embed links
   - Customize titles, descriptions, and tags

3. **Hero Background**:
   - **For Background Image**: Add `hero-background.jpg` to `assets/images/`
     - Recommended: 1920x1080 or higher resolution
     - Cinematic, dark, high-contrast images work best
     - See `assets/images/README.md` for detailed instructions
   
   - **For Background Video** (optional, more cinematic):
     - Add `hero-background.mp4` and `hero-background.webm` to `assets/videos/`
     - Keep under 5MB, 10-30 seconds, looping
     - Video hidden on mobile for performance
     - See `assets/videos/README.md` for conversion/compression tips
   
   - **Note**: The gradient background serves as a fallback until you add media

4. **Profile Image**:
   - Replace the SVG placeholder (lines 58-63 in `index.html`) with:
     ```html
     <img src="assets/images/profile.jpg" alt="Your Name">
     ```
   - Add your profile image to `assets/images/profile.jpg`

5. **Project Thumbnails**:
   - Add thumbnail images to `assets/images/`
   - Update portfolio items in `index.html` to use images:
     ```html
     <div class="thumbnail-placeholder" style="background-image: url('assets/images/project1.jpg')">
     ```

### Color Theme Customization

Edit CSS variables in `style.css` (lines 4-13):

```css
:root {
    --bg-dark: #0a0a0a;           /* Main background */
    --neon-cyan: #00f3ff;          /* Primary accent */
    --neon-magenta: #ff00ff;       /* Secondary accent */
    --neon-purple: #b066ff;        /* Tertiary accent */
}
```

## Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `portfolio` (or any name you prefer)
3. Make it public
4. Don't initialize with README (you already have one)

### Step 2: Upload Files

**Option A - Using GitHub Web Interface:**
1. Click "uploading an existing file"
2. Drag and drop all files:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
   - `assets/` folder (with any images)
3. Commit the files

**Option B - Using Git Command Line:**
```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository settings
2. Navigate to **Pages** in the left sidebar
3. Under **Source**, select `main` branch
4. Select `/ (root)` folder
5. Click **Save**

### Step 4: Access Your Site

Your portfolio will be live at:
```
https://yourusername.github.io/portfolio/
```

It may take a few minutes for the site to become available.

## Local Development

To run the portfolio locally:

1. **Using Python:**
   ```bash
   python -m http.server 5000
   ```
   Then visit: `http://localhost:5000`

2. **Using Node.js:**
   ```bash
   npx http-server -p 5000
   ```

3. **Using any static server** or simply open `index.html` directly in your browser

## File Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── style.css           # All styling
├── script.js           # JavaScript functionality
├── README.md           # This file
│
└── assets/
    └── images/         # Your images go here
        ├── profile.jpg
        ├── project1.jpg
        ├── project2.jpg
        └── ...
```

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Variables, Grid, Flexbox, Animations
- **Vanilla JavaScript** - ES6+ features
- **No dependencies** - Runs entirely client-side

## Features Checklist

- ✅ Responsive navigation with mobile hamburger menu
- ✅ Smooth scrolling between sections
- ✅ Hero section with gradient animations
- ✅ About section with skills grid
- ✅ Portfolio gallery with hover effects
- ✅ Modal/lightbox for project details
- ✅ Video embedding (YouTube/Vimeo)
- ✅ Contact form with validation
- ✅ Social media integration
- ✅ SEO-friendly structure
- ✅ Accessibility features
- ✅ Loading animations
- ✅ Intersection Observer for scroll animations

## Performance Tips

1. **Optimize Images**: Compress images before uploading
   - Use WebP format for better compression
   - Recommended max width: 1920px for backgrounds, 800px for thumbnails

2. **Lazy Loading**: Images load as they enter viewport (already implemented)

3. **Minification** (Optional): For production, you can minify:
   - CSS: Use [CSS Minifier](https://cssminifier.com/)
   - JS: Use [JavaScript Minifier](https://javascript-minifier.com/)

## License

This project is free to use for personal portfolios. Feel free to customize and make it your own!

## Support

If you encounter any issues or need customization help:
- Check the code comments for guidance
- All functionality is well-documented in the source files

---

**Ready to showcase your work?** Customize the content, add your projects, and deploy to GitHub Pages! 🚀
