# Overview

This is a static portfolio website for showcasing audiovisual post-production work. Built with vanilla HTML, CSS, and JavaScript, it features a cinematic dark theme with neon accents and is optimized for GitHub Pages deployment. The site uses a single-page layout with smooth scrolling navigation and includes sections for hero introduction, about/skills, project portfolio with modal galleries, and contact information.

## Recent Changes (November 23, 2025)

- **Initial Build Complete**: Created full portfolio website with all required sections
- **Hero Background Support**: Added full-screen background image and video support with proper layering and fallbacks
- **Responsive Design**: Implemented mobile-first design with hamburger navigation and video hiding on mobile for performance
- **Documentation**: Created comprehensive README files for deployment and customization guidance
- **Asset Structure**: Organized folder structure with detailed instructions for adding hero backgrounds, profile images, and project thumbnails

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Single-Page Application (SPA) Pattern**: Uses vanilla JavaScript with hash-based navigation for smooth scrolling between sections (#home, #about, #portfolio, #contact). No frameworks or build tools required - pure HTML/CSS/JS for maximum simplicity and GitHub Pages compatibility.

**Responsive Design**: Mobile-first CSS approach using media queries. Hero video is hidden on mobile devices for performance optimization, falling back to static background images.

**Component Structure**:
- Fixed navigation bar with hamburger menu for mobile
- Hero section with layered backgrounds (video → image → gradient fallback)
- Project gallery with modal/lightbox system
- Client-side contact form with validation

## Hero Background System

The hero section supports multiple background layers with intelligent fallbacks:

1. **Video Layer** (z-index: 1) - Full-screen background video (MP4/WebM), hidden on mobile
2. **Image Layer** (z-index: 0) - Background image fallback when video unavailable
3. **Gradient Layer** (hero background) - Ultimate fallback when no media assets present
4. **Effects Layer** (z-index: 2) - Animated radial gradients for cinematic feel
5. **Overlay Layer** (z-index: 3) - Darkening overlay for text readability
6. **Content Layer** (z-index: 4) - Hero text and call-to-action button

Users can add their own media by placing files in:
- `assets/images/hero-background.jpg` for background image
- `assets/videos/hero-background.mp4` and `hero-background.webm` for background video

## Styling Approach

**CSS Variables System**: Centralized theme management using CSS custom properties for colors (dark backgrounds, neon accents in cyan/magenta/purple) and transition speeds. Enables easy theme customization without touching individual component styles.

**Animation Strategy**: Pure CSS animations and transitions (no JavaScript animation libraries). Micro-animations for hover states, scroll indicators, and modal interactions keep the site performant while maintaining cinematic feel.

**Z-Index Hierarchy**:
- Navigation: 1000 (fixed, always on top)
- Modal: 2000 (overlay content)
- Hero layers: 0-4 (video, overlays, content)
- Standard content: default stacking

## Data Management

**Static Data Store**: Project portfolio stored as JavaScript array of objects in `script.js`. Each project contains:
- Title, description, and tags
- Video embed URL (YouTube/Vimeo)
- Unique ID for modal targeting

This approach requires manual updates but eliminates database dependencies and keeps deployment simple.

## Media Asset Strategy

**Lazy Loading Design**: Hero background supports multiple formats with graceful degradation:
1. Background video (MP4/WebM) - hidden on mobile
2. Background image (JPG/WebP fallback)
3. CSS gradient (ultimate fallback)

Assets stored in organized folders (`assets/images/`, `assets/videos/`) with README files providing specifications and compression guidelines.

## File Structure

```
portfolio/
├── index.html              # Main HTML structure
├── style.css               # All styling with CSS variables
├── script.js               # Vanilla JavaScript for interactivity
├── README.md               # Deployment and customization guide
├── .gitignore             # Git ignore patterns
├── replit.md              # This file - project documentation
└── assets/
    ├── images/
    │   └── README.md      # Image specifications and instructions
    └── videos/
        └── README.md      # Video specifications and instructions
```

# External Dependencies

**No Runtime Dependencies**: The project intentionally avoids npm packages, frameworks, or build tools to maintain simplicity and ensure GitHub Pages compatibility.

**Third-Party Integrations**:
- **Video Embedding**: YouTube/Vimeo embed URLs for project showcases (no API keys required, uses standard iframe embeds)
- **Font System**: System fonts only (Segoe UI fallback stack) - no Google Fonts or external typography

**Hosting Platform**: Designed specifically for GitHub Pages static hosting. No server-side processing, databases, or backend services required.

**Browser Compatibility**: Relies on modern CSS features (CSS Grid, CSS Variables, CSS Animations) - targets evergreen browsers with graceful degradation for older browsers through fallback backgrounds and progressive enhancement.

# Deployment Instructions

## For GitHub Pages:
1. Create a new GitHub repository
2. Upload all files (index.html, style.css, script.js, README.md, assets/)
3. Enable GitHub Pages in repository settings (Settings → Pages → Source: main branch)
4. Site will be live at: `https://username.github.io/repository-name/`

## For Other Static Hosts:
This website works with any static file hosting service:
- Netlify (drag and drop deployment)
- Vercel (import from Git)
- Cloudflare Pages
- Any web server with static file serving

# Customization Checklist

Users should customize the following before deployment:
- [ ] Update "Your Name" in hero section (index.html line 46)
- [ ] Replace email address (index.html line 242)
- [ ] Update social media links (index.html lines 246-277)
- [ ] Add project data in script.js (lines 4-57)
- [ ] Add hero background image to assets/images/
- [ ] (Optional) Add hero background video to assets/videos/
- [ ] (Optional) Add profile image to assets/images/
- [ ] (Optional) Add project thumbnail images to assets/images/
- [ ] (Optional) Customize color theme via CSS variables

# Testing Status

✅ All functionality tested and working:
- Navigation with smooth scrolling
- Mobile hamburger menu
- Hero section with gradient fallback
- About section with skills grid
- Portfolio gallery with hover effects
- Modal/lightbox for project details
- Contact form with validation
- Responsive design across viewports
- Browser console shows expected 404s for optional media assets (not errors)
