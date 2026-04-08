import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

interface Experience {
  id: string
  role: string
  company: string
  location: string
  period: string
  description: string[]
  tags: string[]
}

const experiences: Experience[] = [
  {
    id: '1',
    role: 'Senior Frontend Engineer',
    company: 'Tech Innovations Inc.',
    location: 'Remote',
    period: '2022 - Present',
    description: [
      'Led frontend architecture for multiple product lines, improving performance by 40%',
      'Built design system used across 15+ products, reducing development time by 30%',
      'Mentored team of 5 engineers on React best practices and performance optimization',
    ],
    tags: ['React', 'TypeScript', 'Three.js', 'Leadership'],
  },
  {
    id: '2',
    role: 'Frontend Developer',
    company: 'Creative Agency',
    location: 'San Francisco, CA',
    period: '2020 - 2022',
    description: [
      'Developed 20+ client websites with focus on animations and micro-interactions',
      'Collaborated with designers to implement pixel-perfect UI components',
      'Optimized sites for Core Web Vitals, achieving 95+ Lighthouse scores',
    ],
    tags: ['React', 'GSAP', 'WebGL', 'UI/UX'],
  },
  {
    id: '3',
    role: 'Junior Developer',
    company: 'Startup Hub',
    location: 'New York, NY',
    period: '2019 - 2020',
    description: [
      'Built responsive web applications using React and modern CSS',
      'Participated in code reviews and learned best practices',
      'Contributed to open-source projects and internal tooling',
    ],
    tags: ['React', 'JavaScript', 'CSS', 'Git'],
  },
]

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <motion.div
        className="mb-6 flex items-center justify-between gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
          Experience
        </h2>
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
          Career • Timeline
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/50 via-sky-400/30 to-transparent sm:left-8" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-16 sm:pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 top-2 h-4 w-4 rounded-full border-2 border-cyan-400 bg-slate-950 ring-4 ring-slate-950 sm:left-6" />

              <Card className="space-y-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-slate-100">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="h-4 w-4 text-slate-400" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-slate-400" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-slate-400" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + itemIndex * 0.05 }}
                      className="flex gap-3 text-sm text-slate-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
                      <span className="leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-slate-700/50 bg-slate-800/50 px-2.5 py-1 text-xs text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
