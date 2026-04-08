import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Text', 'ui-sans-serif', 'sans-serif'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
      },
      backgroundImage: {
        'radial-soft':
          'radial-gradient(circle at top, rgba(56,189,248,0.25), transparent 60%), radial-gradient(circle at bottom, rgba(129,140,248,0.2), transparent 55%)',
      },
      boxShadow: {
        'glow-soft': '0 0 40px rgba(56,189,248,0.35)',
      },
    },
  },
  plugins: [],
}

export default config

