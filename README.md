# SPANDA — The Pulse of AI Cinema

**AI Creative Studio Portfolio Website**

## 📁 Project Structure

```
Portfolio-spanda/
├── index.html          # Main HTML file
├── styles.css          # All styles
├── main.js             # All JavaScript / interactivity
├── assets/             # Media assets (add your files here)
│   ├── hero-reel.mp4   # Hero section video reel
│   ├── logo.png        # Logo image (optional)
│   └── 1-commercial.mp4, 2-product.mp4, ...  # Portfolio videos
└── README.md
```

## 🚀 Features Included

- **Responsive Design** — Works on all screen sizes
- **Mobile Navigation** — Hamburger menu with overlay
- **Particle Animation** — Floating particles on hero section
- **Portfolio Grid** — 10 showcase items with category filter
- **Video Modal** — Click any card to view in fullscreen modal
- **Services Section** — 6 services with tags
- **Process Timeline** — 6-step interactive process
- **Testimonials** — 3 client reviews
- **About Section** — Animated stats counter
- **Pricing Section** — 3-tier pricing cards
- **Contact Form** — Validated form with WhatsApp integration
- **Scroll Animations** — Elements animate in as you scroll
- **Scroll-to-Top** — Button appears after scrolling

## 📹 Adding Videos

1. Create an `assets/` folder in the project root
2. Add your video files:
   - `hero-reel.mp4` — Plays in the hero section
   - For portfolio items: add video URL in `main.js` → `portfolioItems` array
3. Update the `video: ""` field in each portfolio item with the file path

## 🔗 Updating Contact Links

In `index.html`, update:
- **WhatsApp**: Replace `919999999999` with your actual WhatsApp number
- **Email**: Replace `hello@spanda.studio` with your email
- **Instagram**: Replace `spanda.studio` with your Instagram handle

## 🎨 Customization

Key CSS variables in `styles.css`:
```css
--accent: #7C8CFF;   /* Primary blue/purple */
--accent2: #56D6C2;  /* Teal accent */
--gold: #C9A96E;     /* Gold accent */
```

## 📱 Opening the Website

Simply open `index.html` in any modern browser. No build step required.

For live server (recommended):
```bash
# Using VS Code Live Server extension, or:
npx serve .
```
