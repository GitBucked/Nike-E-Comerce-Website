# 👟 Shoe Store Landing — React + Vite + Tailwind

A sleek, responsive sneaker storefront built with **React**, **Vite**, and **Tailwind CSS**.  
Modular, reusable components power each section (Hero, Popular Products, Services, Special Offer, Reviews, Subscribe, Footer) so you can swap brands and content without touching layout.

---

## ✨ Features
- **Responsive** from mobile → desktop
- **Reusable UI**: buttons, nav, product/review/service cards
- **Data‑driven** content in `src/constants/index.js`
- **Fast dev**: Vite + LiveServer
- **Clean styles**: Tailwind utilities & sensible defaults

---

## 🧰 Tech Stack
- React 18
- Vite
- Tailwind CSS (+ PostCSS)
- ESLint (config included)

---

## 🚀 Getting Started

```bash
# 1) Install dependencies
npm install

# 2) Start the dev server (http://localhost:5173)
npm run dev

# 3) Build for production
npm run build

# 4) Preview the production build
npm run preview
```

> Node.js 18+ (LTS) recommended. npm ships with Node.

---

## 🗂 Project Structure

```
.
├─ public/
├─ src/
│  ├─ assets/
│  │  ├─ icons/
│  │  └─ images/
│  ├─ components/
│  │  ├─ Button.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ PopularProductCard.jsx
│  │  ├─ ReviewCard.jsx
│  │  ├─ ServiceCard.jsx
│  │  └─ ShoeCard.jsx
│  ├─ sections/
│  │  ├─ Hero.jsx
│  │  ├─ PopularProducts.jsx
│  │  ├─ Services.jsx
│  │  ├─ SpecialOffers.jsx
│  │  ├─ SuperQuality.jsx
│  │  ├─ CustomerReviews.jsx
│  │  └─ Footer.jsx
│  ├─ constants/
│  │  └─ index.js          # products, stats, nav links, copy
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ eslint.config.js
├─ postcss.config.js
├─ tailwind.config.js
├─ vite.config.js
└─ package.json
```

---

## 🛠 Customize

- **Branding / Images** → replace files in `src/assets/images` & `src/assets/icons`  
- **Content / Products** → edit arrays in `src/constants/index.js`  
  *(names, prices, ratings, image imports, stats, nav links)*
- **Theme** → tweak Tailwind config in `tailwind.config.js`  
- **SEO / Meta** → edit `index.html` (title, description, favicon)

---

## 🧪 Linting (optional)

```bash
npm run lint
```

---

## 🧯 Troubleshooting

- **Tailwind not applying?** Ensure `index.css` has Tailwind directives and `tailwind.config.js` includes:
  ```js
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"]
  ```
- **Images not showing?** Check the import path and file names in `src/assets/images`.
- **Port in use?** `npm run dev -- --port 5174`.

---

## 📝 Notes
- This project is for demo/educational purposes. Product names/brands/logos may be trademarks of their respective owners.
- Feel free to reuse this as a template for future product/brand landings.

## 📄 License
MIT

