import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { SceneCanvas } from '@/components/three/SceneCanvas'

export function Hero() {
  return (
    <section
      id="hero"
      className="section-padding flex flex-col gap-10 lg:flex-row lg:items-center"
    >
      <div className="flex-1 space-y-6">
        <motion.p
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-900/60 px-3 py-1 text-xs text-cyan-200 shadow-glow-soft"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          Available for freelance & remote roles
        </motion.p>
        <motion.h1
          className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Building immersive{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
            developer experiences
          </span>{' '}
          for the web.
        </motion.h1>
        <motion.p
          className="max-w-xl text-sm text-slate-300 sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
        >
          I&apos;m a frontend engineer crafting premium interfaces, performant
          3D visuals and delightful micro-interactions. I love turning complex
          ideas into intuitive, feel-good products.
        </motion.p>
        <motion.div
          className="flex flex-wrap items-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <Button
            size="lg"
            onClick={() =>
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Contact Me
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() =>
              document
                .getElementById('projects')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            View Projects
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() =>
              window.open('/resume.pdf', '_blank', 'noopener,noreferrer')
            }
          >
            Download Resume
          </Button>
        </motion.div>
      </div>
      <motion.div
        className="glass-panel relative h-72 flex-1 overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-900/80 shadow-glow-soft sm:h-80 lg:h-[420px]"
        initial={{ opacity: 0, scale: 0.9, x: 30 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <SceneCanvas mobileFallback />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
      </motion.div>
    </section>
  )
}

