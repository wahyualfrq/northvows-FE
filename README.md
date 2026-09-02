# 🌟 NorthVows — Solusi Tugas & Project Mahasiswa

> Website landing page modern, profesional, dan responsif untuk platform layanan tugas akademik, PPT presentasi, desain UI/UX, web development, coding/machine learning, CV ATS, hingga digital source code premium.

![React](https://img.shields.io/badge/React-18.2-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.1-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css)
![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-0.344-F59E0B)

---

## 📌 Features & Highlights

- ⚡ **React 18 + Vite**: Performa load super cepat dengan HMR (Hot Module Replacement) instant.
- 🎨 **100% Tailwind CSS Utility**: Desain piksel presisi dengan custom palette (`#0A2EFF`, `#001A72`, `#2F5BFF`), typography `Plus Jakarta Sans`, dan efek shadow kustom.
- 📱 **Fully Responsive Layout**: Tampilan sempurna di perangkat Desktop, Tablet, hingga Smartphone.
- 📂 **Configurable Data Architecture**: Seluruh konten layanan, portofolio, produk digital, testimoni, dan FAQ dipisahkan ke dalam file JavaScript modular (`src/data/`).
- 🧩 **Modular React Components**:
  - `Navbar`: Header melayang dengan scroll shadow & menu dropdown responsif.
  - `HeroSection`: Banner utama dengan 3D fanned project cards deck.
  - `TrustMetricsSection`: 4 kolom statistik pencapaian & rating kepuasan.
  - `ServicesSection`: Grid 6 layanan unggulan.
  - `PortfolioSection`: Filter tab kategori interaktif (`Semua`, `Website`, `UI/UX`, `PPT & Deck`, `Coding`).
  - `PortfolioModal`: Modal detail inspector project dengan navigasi keyboard (`Esc`) & click-outside close.
  - `ProductsSection`: Katalog produk digital & starter kit source code dengan WhatsApp link generator.
  - `HowItWorksSection`: Timeline 5 tahapan pengerjaan transparan.
  - `TestimonialsSection`: Interactive orbiting avatar switcher dengan quote fading effect.
  - `WhyUsSection`: Showcase keunggulan layanan & garansi 100%.
  - `FaqSection`: Accordion tanya jawab interaktif.
  - `ContactSection`: Form pesanan dengan auto-redirect pesan WhatsApp & toast notification.
  - `Footer`: Deep navy bottom bar lengkap dengan tautan navigasi dan sosial media.

---

## 📁 Directory Structure

```
northvows/
 ├─ public/
 ├─ src/
 │   ├─ assets/
 │   ├─ components/
 │   │   ├─ Navbar.jsx
 │   │   ├─ Footer.jsx
 │   │   ├─ ServiceCard.jsx
 │   │   ├─ PortfolioCard.jsx
 │   │   ├─ ProductCard.jsx
 │   │   ├─ FaqItem.jsx
 │   │   ├─ PortfolioModal.jsx
 │   │   └─ Toast.jsx
 │   ├─ data/
 │   │   ├─ servicesData.js
 │   │   ├─ portfolioData.js
 │   │   ├─ productsData.js
 │   │   ├─ testimonialsData.js
 │   │   ├─ faqData.js
 │   │   ├─ trustMetricsData.js
 │   │   ├─ howItWorksData.js
 │   │   └─ whyUsData.js
 │   ├─ pages/
 │   │   └─ Home.jsx
 │   ├─ sections/
 │   │   ├─ HeroSection.jsx
 │   │   ├─ TrustMetricsSection.jsx
 │   │   ├─ ServicesSection.jsx
 │   │   ├─ PortfolioSection.jsx
 │   │   ├─ ProductsSection.jsx
 │   │   ├─ HowItWorksSection.jsx
 │   │   ├─ TestimonialsSection.jsx
 │   │   ├─ WhyUsSection.jsx
 │   │   ├─ FaqSection.jsx
 │   │   ├─ ContactSection.jsx
 │   │   └─ CtaSection.jsx
 │   ├─ App.jsx
 │   ├─ index.css
 │   └─ main.jsx
 ├─ .gitignore
 ├─ index.html
 ├─ package.json
 ├─ postcss.config.js
 ├─ tailwind.config.js
 └─ vite.config.js
```

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js `v18.x` atau lebih baru
- npm `v9.x` atau lebih baru

### Installation

1. **Clone repository**
   ```bash
   git clone https://github.com/wahyualfrq/northvows-FE.git
   cd northvows-FE
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan development server**
   ```bash
   npm run dev
   ```

4. **Build untuk production**
   ```bash
   npm run build
   ```

---

## 🌐 Deployment

Project ini sudah dioptimalkan untuk deployment instan ke **Vercel**, **Netlify**, atau platform static hosting lainnya.

---

© 2026 **NorthVows**. All rights reserved. Designed with precision for Indonesian Students.
