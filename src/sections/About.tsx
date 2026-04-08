import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

export function About() {
  return (
    <section id="about" className="section-padding pt-0">
      <motion.div
        className="mb-6 flex items-center justify-between gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
          About Me
        </h2>
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
          Story • Profile
        </p>
      </motion.div>
      <motion.div
        className="grid gap-6 lg:grid-cols-[2fr,1.5fr]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <Card>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-[0.95rem]">
            I&apos;m a frontend specialist focused on high-fidelity product
            experiences. I design and build modern interfaces with strong
            attention to typography, motion, and real-world performance. My
            background combines engineering, visual design, and UX thinking,
            giving me a full-stack perspective on what makes interfaces feel
            premium and trustworthy.
          </p>
          <div className="mt-6 grid gap-4 text-xs text-slate-300 sm:grid-cols-3">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
                Focus
              </p>
              <p className="mt-1">Creative frontend, design systems, 3D UI</p>
            </div>
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
                Strengths
              </p>
              <p className="mt-1">Animation, UX polish, performance</p>
            </div>
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
                Location
              </p>
              <p className="mt-1">Remote • Open to global teams</p>
            </div>
          </div>
        </Card>
        <Card className="space-y-4">
          <h3 className="text-sm font-medium text-slate-100">
            Quick skill snapshot
          </h3>
          <div className="space-y-3 text-xs text-slate-300">
            <div className="flex items-center justify-between">
              <span>Frontend engineering</span>
              <span className="text-slate-400">Advanced</span>
            </div>
            <div className="flex h-1.5 overflow-hidden rounded-full bg-slate-800">
              <div className="w-11/12 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300" />
            </div>
            <div className="flex items-center justify-between">
              <span>UI/UX & product thinking</span>
              <span className="text-slate-400">Advanced</span>
            </div>
            <div className="flex h-1.5 overflow-hidden rounded-full bg-slate-800">
              <div className="w-10/12 rounded-full bg-gradient-to-r from-sky-400 to-indigo-300" />
            </div>
            <div className="flex items-center justify-between">
              <span>3D & creative coding</span>
              <span className="text-slate-400">Intermediate</span>
            </div>
            <div className="flex h-1.5 overflow-hidden rounded-full bg-slate-800">
              <div className="w-8/12 rounded-full bg-gradient-to-r from-indigo-400 to-purple-300" />
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  )
}

