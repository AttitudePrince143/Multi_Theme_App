# 🌈 Multi-Theme Switcher React App

A responsive React + TypeScript application with a dynamic **multi-theme switcher**. It features three distinct visual themes, smooth page transitions, and mobile-friendly layouts — all styled with **Tailwind CSS** and animated using **Framer Motion**.

🔗 **Live Demo**: [https://attitudeprince143.github.io/Multi_Theme_App/](https://attitudeprince143.github.io/Multi_Theme_App/)

---

## 🚀 Features

### 🎨 Theme Switching
- **Theme 1**: Minimal Light UI with a clean sans-serif font.
- **Theme 2**: Dark mode with a sidebar layout and serif font.
- **Theme 3**: Vibrant card-based UI with playful `Pacifico` font.

Themes change:
- Backgrounds
- Fonts
- Layouts
- Animations
- Colors

🔁 Theme persists via `localStorage` and is managed globally using the Context API.

---

### 🧠 Architecture & Tech Stack

- ⚛️ **React 18** + **TypeScript**
- 🎨 **Tailwind CSS**
- 🎬 **Framer Motion** for animations
- 🔄 **React Router v6**
- 🔧 **Vite** for blazing-fast dev + build
- 🧩 **Styled Components**
- 📦 **Deployed to GitHub Pages**

---

## 📄 Pages

- `/` — **Home**: Welcome screen with demo UI elements.
- `/about` — **About**: Describes the app and its features.
- `/contact` — **Contact**: Dummy form styled per theme.

---

## 📱 Responsiveness

- Mobile-first design using Tailwind’s grid/flex utilities.
- Theme 2 includes a **sidebar with slide animation and overlay** on mobile.
- Theme switcher is accessible in all themes.

---

## 🛠️ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/AttitudePrince143/Multi_Theme_App.git
cd Multi_Theme_App
2. Install Dependencies
bash
Copy
Edit
npm install
3. Start Development Server
bash
Copy
Edit
npm run dev
Then visit: http://localhost:5173

📦 Build for Production
bash
Copy
Edit
npm run build
To preview:

bash
Copy
Edit
npm run preview
🌍 GitHub Pages Deployment
Already configured in package.json:

json
Copy
Edit
"homepage": "https://attitudeprince143.github.io/Multi_Theme_App/",
"scripts": {
  "deploy": "vite build && gh-pages -d dist --repo=https://github.com/AttitudePrince143/Multi_Theme_App.git --branch=gh-pages"
}
Deploy with:
bash
Copy
Edit
npm run deploy
🧪 Folder Structure
pgsql
Copy
Edit
├── src/
│   ├── components/
│   ├── pages/
│   ├── theme/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
├── package.json
├── tailwind.config.js
├── tsconfig.json
📸 Screenshots
(You can add screenshots here using GitHub's drag & drop or Markdown syntax.)

👨‍💻 Author
Syed Adil
Full- Stack Web Developer | React Enthusiast
GitHub Profile

📜 License
This project is licensed under the MIT License.

vbnet
Copy
Edit

Let me know if you'd like me to:
- Add screenshot templates
- Include badges (like build size, license, etc.)
- Include links to other projects from your `Unified_Mentor` repo

This README meets professional and assessment-ready standards. ✅