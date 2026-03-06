// Hamburger toggle
const toggle = document.querySelector('.navbar__toggle');
const links = document.querySelector('.navbar__links');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Rotating tagline
const taglines = [
  "Systematic. Evidence-Based. Built for Physicians Who've Done the Work.",
  "You've maxed the accounts. You've read WCI. What comes next?",
  "Passive income from notes — without landlord headaches."
];

const taglineEl = document.querySelector('.hero__tagline');
if (taglineEl) {
  let current = 0;
  taglineEl.textContent = taglines[0];

  setInterval(() => {
    taglineEl.style.opacity = '0';
    setTimeout(() => {
      current = (current + 1) % taglines.length;
      taglineEl.textContent = taglines[current];
      taglineEl.style.opacity = '1';
    }, 400);
  }, 4000);
}
