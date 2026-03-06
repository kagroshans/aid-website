# CLAUDE.md — Alternative Investing Doctor

Instructions for Claude Code when working on this repository.

---

## Project Overview

Jekyll site for alternativeinvestingdoctor.com. Physician-focused content on mortgage note investing. Built for GitHub Pages — no local build required.

**Owner:** Dr. Keith G.
**Sibling site:** freedomnotecapital.com (FNC)

---

## Brand

### Colors
| Role | Name | Hex |
|------|------|-----|
| Primary | Navy | `#001F3E` |
| Accent | Gold | `#FFC354` |
| Background | White | `#FFFFFF` |
| Alt Section BG | Off-white | `#F8F7F4` |
| Body Text | Near-black | `#1A1A1A` |
| Muted Text | Gray | `#6B7280` |

All colors defined as CSS custom properties in `assets/css/styles.css`. Never hardcode hex values in HTML.

### Typography
- **Headings:** Playfair Display (Google Fonts)
- **Body:** Source Sans 3 (Google Fonts)
- Never substitute Inter, Roboto, Arial, or system fonts

### Design Rules
- Navy for: hero, navbar, footer, newsletter section
- Gold for: CTA buttons, hover states, underline accents only
- Left-align all body text — never center paragraphs
- Generous whitespace — finance brand, not retail
- No stock photos
- Mobile-first: base styles for mobile, `@media (min-width: 768px)` for desktop

---

## Logo

| File | Use |
|------|-----|
| `assets/images/aid-logo-light.png` | Navbar on white/off-white backgrounds |
| `assets/images/aid-logo-dark.png` | Navbar/footer on navy backgrounds |

Always set logo with `height: 50px; width: auto`. Never set a fixed width.

---

## File Structure

```
aid-website/
├── CLAUDE.md
├── README.md
├── _config.yml
├── _layouts/
│   ├── default.html
│   ├── page.html
│   └── post.html
├── _includes/
│   ├── navbar.html
│   └── footer.html
├── _posts/
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   └── images/
│       ├── aid-logo-light.png
│       └── aid-logo-dark.png
├── index.html
├── about.html
├── blog.html
├── newsletter.html
└── CNAME
```

---

## GoHighLevel Form Embed

The email capture form is a GoHighLevel embed. Placeholder in HTML:

```html
<!-- GHL FORM EMBED HERE -->
```

When the owner provides the embed code, replace this comment. The embed goes in:
- `index.html` — newsletter/checklist section (`id="checklist"`)
- `newsletter.html` — full newsletter signup page

Do not modify the GHL embed code. Drop it in as-is.

---

## Deployment

Push to `main`. GitHub Pages builds automatically.

```bash
git add .
git commit -m "message"
git push origin main
```

The `CNAME` file in the repo root must contain:
```
alternativeinvestingdoctor.com
```

---

## Adding Blog Posts

File naming: `_posts/YYYY-MM-DD-post-title.md`

Required front matter:
```yaml
---
layout: post
title: "Title Here"
date: YYYY-MM-DD
author: Dr. Keith G.
tags: [notes, investing]
excerpt: "One sentence shown on blog index."
---
```

---

## Page Sections (index.html)

| Section | Background | ID/Notes |
|---------|------------|----------|
| Navbar | Navy | Sticky, hamburger mobile |
| Hero | Navy | Rotating tagline via JS |
| Pain Points | White | 9 cards, 3x3 grid |
| Offer | Off-white | |
| Credibility | White | 3 cards |
| 3 Steps | Off-white | |
| Newsletter | Navy | `id="checklist"` — GHL embed |
| Footer | Navy | Logo, social links, disclaimer |

---

## Social / Contact

| Platform | Handle / URL |
|----------|-------------|
| YouTube | @AlternativeInvestingDoctor |
| LinkedIn | (owner to provide) |
| Facebook Group | facebook.com/groups/physiciansnoteinvestingcircle |
| Email | alternativeinvestingdoctor@gmail.com |

---

## Do Not

- Do not change font families
- Do not hardcode colors in HTML — use CSS custom properties
- Do not add stock photos
- Do not center-align paragraph text
- Do not modify GHL embed code
- Do not commit directly to any branch other than `main`
- Do not add unnecessary dependencies or npm packages
