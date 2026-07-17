# Om Patel — Portfolio

Personal portfolio of **Om Patel**, a **Software Engineer** with 3.7+ years building scalable, secure, cloud-native backend systems across manufacturing, telecom and digital-identity domains.

A fully custom, from-scratch build — no template. Themed around a **"secure access"** concept (decrypt-text reveals, a biometric fingerprint scanner, a magnetic cursor, a scroll-drawn timeline and a drifting aurora background).

🌐 **Live:** https://om781.github.io/om-patel-portfolio/

---

## 🧱 Tech stack

- **Vite** + **React 18**
- **Framer Motion** for animation
- Plain modern **CSS** with a token-based design system
- Deployed to **GitHub Pages** via GitHub Actions

## 🎨 Design system

| Token | Value |
|---|---|
| Base | Deep ink `#070A0F` |
| Accents | Secure emerald `#00E5A0` · electric cyan `#22D3EE` · signal violet `#8B7CF6` |
| Type | Space Grotesk (display) · Inter (body) · JetBrains Mono (mono) |

All content lives in a single file: [`src/data/content.js`](src/data/content.js). Edit it to update every section.

## 📁 Structure

```
index.html            → app shell + SEO/meta + fonts
src/
  main.jsx            → entry
  App.jsx             → composition + preloader gate
  data/content.js     → ALL content (single source of truth)
  styles/             → global tokens + per-section CSS
  components/         → Cursor, DecryptText, Fingerprint, Reveal, MagneticButton, …
  sections/           → Preloader, Nav, Hero, About, Expertise, Experience, Work, Contact, Footer
```

## 🛠 Run locally

```bash
npm install      # install dependencies
npm run dev      # start dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
npm run deploy   # build + publish to gh-pages
```

> Requires Node.js 18+.

---

© 2026 Om Patel — designed & engineered from scratch.
