# Alternative Investing Doctor

Website for [alternativeinvestingdoctor.com](https://alternativeinvestingdoctor.com) — physician perspectives on mortgage note investing.

Built with Jekyll, hosted on GitHub Pages.

---

## Tech Stack

| Component | Choice |
|-----------|--------|
| Framework | Jekyll (GitHub Pages native) |
| Hosting | GitHub Pages |
| Domain | Namecheap DNS → GitHub Pages |
| Email / CRM | GoHighLevel |
| Version control | Git |

---

## Local Development

> Local preview is optional — GitHub auto-builds on every push to `main`.

If you want to preview locally:

```bash
gem install bundler jekyll
bundle install
bundle exec jekyll serve
# Visit http://localhost:4000
```

---

## Deployment

Push to `main` — GitHub Pages builds automatically. No manual build step required.

```bash
git add .
git commit -m "your message"
git push origin main
```

Changes are live within ~60 seconds.

---

## Adding a Blog Post

1. Create a file in `_posts/` following this naming convention:

```
_posts/YYYY-MM-DD-your-post-title.md
```

2. Add front matter at the top:

```yaml
---
layout: post
title: "Your Post Title"
date: 2026-03-05
author: Dr. Keith G.
tags: [notes, investing, passive income]
excerpt: "One sentence summary shown on the blog index."
---

Your post content in Markdown starts here.
```

3. Push to `main`. Done.

---

## File Structure

```
aid-website/
├── _config.yml           # Site settings
├── _layouts/
│   ├── default.html      # Base template (navbar + footer)
│   ├── page.html         # Static pages
│   └── post.html         # Blog post template
├── _includes/
│   ├── navbar.html
│   └── footer.html
├── _posts/               # Blog posts (Markdown)
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   └── images/
│       ├── aid-logo-light.png   # Use on white/off-white backgrounds
│       └── aid-logo-dark.png    # Use on navy backgrounds
├── index.html            # Home page
├── about.html
├── blog.html             # Post index
└── newsletter.html
```

---

## DNS Setup (Namecheap)

```
A Record  @  185.199.108.153
A Record  @  185.199.109.153
A Record  @  185.199.110.153
A Record  @  185.199.111.153
CNAME     www  YOUR-GITHUB-USERNAME.github.io.
```

Add a `CNAME` file to the repo root containing:
```
alternativeinvestingdoctor.com
```

DNS propagation can take up to an hour. Check status at [dnschecker.org](https://dnschecker.org).

---

## Related

- **Freedom Note Capital:** [freedomnotecapital.com](https://freedomnotecapital.com) — sibling brand, same owner
- **YouTube:** [@AlternativeInvestingDoctor](https://youtube.com/@AlternativeInvestingDoctor)
- **Facebook Group:** [physiciansnoteinvestingcircle](https://facebook.com/groups/physiciansnoteinvestingcircle)
