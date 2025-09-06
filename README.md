Repo description

Shoe Store Landing – React + Vite + Tailwind

A clean, responsive landing page for a sneaker store. Built with React, Vite, and Tailwind CSS using modular sections (Hero, Popular Products, Services, Special Offer, Reviews, Subscribe, Footer). Designed to be a reusable starter for future marketing pages.

✨ Features

Mobile-first responsive layout

Reusable components (cards, buttons, navbar)

Centralized product/content data via src/constants/index.js

Fast dev build with Vite, Tailwind utility styling

Easily swap images/brand without touching layout

Tech Stack

React 18, Vite

Tailwind CSS, PostCSS

ESLint (config included)

Prerequisites

Node.js 18+ (LTS recommended)

npm (bundled with Node)

🚀 Getting Started

# install deps
npm install

# start dev server (http://localhost:5173 by default)
npm run dev

# production build
npm run build

# preview production build
npm run preview

Customization

Branding / Images: replace files in src/assets/images and src/assets/icons.

Content / Products: edit arrays and text in src/constants/index.js
(e.g., product name, price, rating, image import).

Colors / Theme: tweak Tailwind theme in tailwind.config.js.

SEO / Meta: edit index.html (title, description, favicon).

🧪 Linting

🛠 Troubleshooting

Tailwind styles not applying: ensure index.css imports Tailwind directives and that tailwind.config.js content paths include ./index.html and ./src/**/*.{js,jsx,ts,tsx}.

Images not showing: confirm correct import path and that the file exists in src/assets/images.

Port in use: Vite will prompt to use a different port or start with npm run dev -- --port 5174.

📄 Notes

This project is for educational/demo use. Product names/brands/logos may be trademarks of their respective owners.

Feel free to fork or use as a template for future landings.

📜 License

MIT
