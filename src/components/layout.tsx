import type { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
] as const

type SectionId = (typeof navItems)[number]['id']

interface LayoutProps extends PropsWithChildren {
  activeSection: SectionId
  onNavigate: (id: SectionId) => void
}

export function Layout({ activeSection, onNavigate, children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground bg-radial-soft">
      <div className="pointer-events-none fixed inset-0 opacity-60 mix-blend-screen blur-3xl" />
      <header className="sticky top-0 z-30 backdrop-blur-xl border-b border-slate-800/80 dark:border-slate-800/80 border-slate-200/50 bg-background/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-8 lg:px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-300 ring-2 ring-cyan-400/50">
              <span className="text-lg font-semibold">H</span>
            </div>
            <div className="hidden flex-col sm:flex">
              <span className="text-sm font-medium tracking-tight">
                Harsh Sphere
              </span>
              <span className="text-xs text-slate-400">
                Frontend • 3D • Interfaces
              </span>
            </div>
          </div>
          <nav className="hidden items-center gap-1 rounded-full border border-slate-800/80 dark:border-slate-800/80 border-slate-200/50 bg-slate-900/60 dark:bg-slate-900/60 bg-slate-100/60 px-2 py-1 text-xs sm:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={cn(
                  'relative rounded-full px-3 py-1.5 transition-colors text-slate-300 dark:text-slate-300 text-slate-600 hover:text-slate-50 dark:hover:text-slate-50 hover:text-slate-900',
                )}
              >
                {activeSection === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-slate-100/10 dark:bg-slate-100/10 bg-slate-900/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="mx-auto flex max-w-6xl flex-col gap-12 pb-24 pt-8 sm:gap-16 sm:pt-10 lg:gap-20 lg:pt-12">
        {children}
      </main>
    </div>
  )
}

