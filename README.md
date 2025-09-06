# 👟 Shoe Store Landing — React + Vite + Tailwind

A sleek, responsive sneaker storefront built with **React**, **Vite**, and **Tailwind CSS**.  
Modular, reusable components power each section (Hero, Popular Products, Services, Special Offer, Reviews, Subscribe, Footer).

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

## 📄 License
MIT

