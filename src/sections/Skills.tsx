import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import {
  Code2,
  Palette,
  Box,
  Zap,
  Database,
  Smartphone,
  Globe,
  Layers,
} from 'lucide-react'

interface Skill {
  name: string
  level: number
  icon: React.ComponentType<{ className?: string }>
  color: string
}

const skills: Skill[] = [
  { name: 'React & Next.js', level: 95, icon: Code2, color: 'from-cyan-400 to-sky-300' },
  { name: 'TypeScript', level: 90, icon: Code2, color: 'from-blue-400 to-indigo-300' },
  { name: 'UI/UX Design', level: 85, icon: Palette, color: 'from-purple-400 to-pink-300' },
  { name: 'Three.js & R3F', level: 80, icon: Box, color: 'from-indigo-400 to-purple-300' },
  { name: 'Performance', level: 88, icon: Zap, color: 'from-yellow-400 to-orange-300' },
  { name: 'Backend & APIs', level: 75, icon: Database, color: 'from-green-400 to-emerald-300' },
  { name: 'Mobile Dev', level: 70, icon: Smartphone, color: 'from-rose-400 to-pink-300' },
  { name: 'Web Standards', level: 92, icon: Globe, color: 'from-teal-400 to-cyan-300' },
]

const categories = [
  {
    title: 'Frontend',
    skills: ['React', 'Vue', 'Svelte', 'TypeScript', 'Tailwind CSS'],
    icon: Layers,
  },
  {
    title: '3D & Graphics',
    skills: ['Three.js', 'R3F', 'WebGL', 'GSAP', 'Framer Motion'],
    icon: Box,
  },
  {
    title: 'Tools & DevOps',
    skills: ['Vite', 'Webpack', 'Git', 'Docker', 'CI/CD'],
    icon: Zap,
  },
]

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <motion.div
        className="mb-6 flex items-center justify-between gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
          Skills & Expertise
        </h2>
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
          Tech Stack • Tools
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="space-y-6">
          <h3 className="text-sm font-medium text-slate-100">
            Core competencies
          </h3>
          <div className="space-y-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-slate-400" />
                      <span className="text-xs text-slate-200">{skill.name}</span>
                    </div>
                    <span className="text-xs text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="relative h-2 overflow-hidden rounded-full bg-slate-800">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </Card>

        <div className="space-y-6">
          {categories.map((category, catIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <Card className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-cyan-400" />
                    <h3 className="text-sm font-medium text-slate-100">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: catIndex * 0.1 + skillIndex * 0.05,
                        }}
                        className="rounded-lg border border-slate-700/50 bg-slate-800/50 px-3 py-1.5 text-xs text-slate-300 transition-colors hover:border-cyan-400/50 hover:bg-slate-800"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
