# Quick Setup Guide

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## Installation Steps

1. **Navigate to the app directory:**
   ```bash
   cd app
   ```

2. **Install all dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   The terminal will show a local URL (usually `http://localhost:5173`)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## First Steps After Setup

1. **Customize your information:**
   - Edit `src/sections/Hero.tsx` - Update name, role, tagline
   - Edit `src/sections/About.tsx` - Update bio and skills
   - Edit `src/sections/Projects.tsx` - Add your projects
   - Edit `src/sections/Experience.tsx` - Add your work history
   - Edit `src/sections/Contact.tsx` - Update social links and email

2. **Add your resume:**
   - Place your resume PDF in the `public` folder as `resume.pdf`
   - Or update the resume link in `Hero.tsx`

3. **Configure form submission:**
   - Update the form handler in `src/sections/Contact.tsx`
   - Connect to your backend API or form service

4. **Customize colors:**
   - Edit `src/index.css` for theme colors
   - Edit `tailwind.config.ts` for additional design tokens

## Troubleshooting

**Port already in use:**
```bash
npm run dev -- --port 3000
```

**Build errors:**
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`

**TypeScript errors:**
- Run `npm run build` to see all type errors
- Ensure all imports use the `@/` alias correctly

## Next Steps

- Deploy to Vercel, Netlify, or your preferred hosting
- Add your own 3D models or animations
- Customize the design to match your brand
- Add analytics and SEO meta tags
