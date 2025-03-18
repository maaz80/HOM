
#  Responsive React Landing Page — House of Marktech

A beautifully designed and interactive landing page built with **React.js** and **Tailwind CSS**, crafted for high-impact user experience and developer scalability.

---

##  Folder Structure

```
src/
│
├── components/
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── Pricing.jsx
│   ├── Users.jsx
│   ├── ContactForm.jsx
│   └── Navbar.jsx
│
├── hooks/
│   └── useDebounce.js
│
└── App.jsx
```

---

##  Features

-  Fully responsive layout (mobile → desktop)
-  Hero section with background video & typing text animation
-  Smart services cards with icons and animated effects
-  Interactive pricing plans with professional styling
-  Dynamic user directory from external API + search + avatars
-  Animated contact form with toast notifications and glassmorphism
-  Fixed navbar with smooth-scroll and section anchors

---

##  Tech Stack

- React.js (SPA Architecture)
- Tailwind CSS (modern utility-first styling)
- Framer Motion (animations)
- React Hot Toast (form notification feedback)
- Dicebear Avatars API (user profile icons)

---

##  Setup Instructions

1. Clone this repo:
```bash
git clone https://github.com/your-repo-url.git
cd your-project-folder
```

2. Install dependencies:
```bash
npm install
```

3. Run the app locally:
```bash
npm start
```

---

##  API Integration

- `https://jsonplaceholder.typicode.com/users` — Dummy user list API (Users section)

---

##  Notes

- All sections are scroll-linked using `id` anchors
- Smooth scroll is enabled via global style
- Responsive with Tailwind breakpoints & adaptive components
- Toast alerts are shown on form submit (customizable)

---

##  Author

Made by Maaz Shakeel 

