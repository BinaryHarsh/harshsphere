# 🚀 Modern 3D Developer Portfolio

A modern, responsive, 3D-animated developer portfolio website built with React, TypeScript, Three.js, and Framer Motion.

## ✨ Features

- **3D Animations**: Interactive 3D scenes using React Three Fiber
- **Smooth Animations**: Framer Motion for delightful micro-interactions
- **Modern UI**: shadcn/ui components with glassmorphism effects
- **Dark/Light Mode**: Toggleable theme with smooth transitions
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Performance Optimized**: Code-split, lazy-loaded, and optimized for low-end devices
- **Type-Safe**: Full TypeScript support throughout

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS
- **shadcn/ui** - Component library
- **Three.js** - 3D graphics
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for R3F
- **Framer Motion** - Animation library
- **React Hook Form** - Form handling
- **Zod** - Schema validation

## 📦 Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 🏗️ Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
app/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   └── textarea.tsx
│   │   ├── layout.tsx        # Main layout with navigation
│   │   ├── theme-provider.tsx # Theme context provider
│   │   ├── theme-toggle.tsx   # Dark/light mode toggle
│   │   └── three/
│   │       └── SceneCanvas.tsx # 3D scene component
│   ├── sections/
│   │   ├── Hero.tsx          # Hero section with 3D canvas
│   │   ├── About.tsx         # About me section
│   │   ├── Skills.tsx        # Skills showcase
│   │   ├── Projects.tsx      # Project portfolio
│   │   ├── Experience.tsx   # Work experience timeline
│   │   └── Contact.tsx      # Contact form
│   ├── lib/
│   │   └── utils.ts          # Utility functions
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles
├── public/                   # Static assets
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── vite.config.ts
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/sections/Hero.tsx`):
   - Update name, role, and tagline
   - Modify CTA button links

2. **About Section** (`src/sections/About.tsx`):
   - Edit bio text
   - Update skills and location

3. **Skills Section** (`src/sections/Skills.tsx`):
   - Modify skill list and proficiency levels
   - Update tech stack categories

4. **Projects Section** (`src/sections/Projects.tsx`):
   - Replace with your actual projects
   - Update GitHub and live demo links

5. **Experience Section** (`src/sections/Experience.tsx`):
   - Add your work experience
   - Update roles, companies, and descriptions

6. **Contact Section** (`src/sections/Contact.tsx`):
   - Update social media links
   - Configure form submission endpoint
   - Update email address

### Theme Customization

Edit `src/index.css` to customize colors:
- Dark mode colors are in `:root`
- Light mode colors are in `.light`

### 3D Scene Customization

Modify `src/components/three/SceneCanvas.tsx` to:
- Change the 3D object (currently an icosahedron)
- Adjust lighting and camera position
- Add more 3D elements

## 🚀 Deployment

### Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Vite and configure build settings

### Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Deploy!

### Other Platforms

Any static hosting service that supports Node.js builds will work. Just run `npm run build` and serve the `dist` directory.

## 📝 Notes

- The 3D scene automatically falls back to a CSS animation on mobile devices for better performance
- Form submission in the Contact section currently logs to console - integrate with your backend API
- Resume download link points to `/resume.pdf` - add your resume file to the `public` folder
- All animations respect `prefers-reduced-motion` for accessibility

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

MIT License - feel free to use this for your own portfolio.

---

Built with ❤️ using React, Three.js, and modern web technologies.
