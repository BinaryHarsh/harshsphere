import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, X } from 'lucide-react'

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  github?: string
  live?: string
  image?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    id: '1',
    title: '3D Product Configurator',
    description:
      'Interactive 3D product customization tool built with React Three Fiber',
    longDescription:
      'A fully interactive 3D product configurator that allows users to customize products in real-time. Built with React Three Fiber, featuring smooth animations, material customization, and export capabilities.',
    tags: ['React', 'Three.js', 'R3F', 'TypeScript'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    id: '2',
    title: 'Design System Library',
    description:
      'Comprehensive component library with Storybook and design tokens',
    longDescription:
      'A complete design system with reusable components, comprehensive documentation, and design tokens. Includes dark mode support, accessibility features, and responsive layouts.',
    tags: ['React', 'TypeScript', 'Storybook', 'Tailwind'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    id: '3',
    title: 'Performance Dashboard',
    description:
      'Real-time analytics dashboard with WebGL visualizations',
    longDescription:
      'A high-performance analytics dashboard featuring real-time data visualization using WebGL. Optimized for handling large datasets with smooth 60fps animations.',
    tags: ['React', 'WebGL', 'D3.js', 'TypeScript'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    id: '4',
    title: 'E-commerce Platform',
    description:
      'Modern e-commerce platform with advanced filtering and search',
    longDescription:
      'A full-featured e-commerce platform with advanced product filtering, search functionality, cart management, and checkout flow. Built with performance and UX in mind.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  const selected = projects.find((p) => p.id === selectedProject)

  return (
    <section id="projects" className="section-padding">
      <motion.div
        className="mb-6 flex items-center justify-between gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
          Featured Projects
        </h2>
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
          Work • Portfolio
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="group"
          >
            <Card
              className="relative h-full cursor-pointer space-y-4 overflow-hidden transition-all duration-300 hover:border-cyan-400/30"
              onClick={() => setSelectedProject(project.id)}
            >
              {project.featured && (
                <div className="absolute right-4 top-4 rounded-full border border-cyan-400/50 bg-cyan-400/10 px-2 py-1 text-xs text-cyan-300">
                  Featured
                </div>
              )}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-slate-100">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-slate-700/50 bg-slate-800/50 px-2 py-1 text-xs text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 pt-2">
                  {project.github && (
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(project.github, '_blank', 'noopener,noreferrer')
                      }}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  )}
                  {project.live && (
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(project.live, '_blank', 'noopener,noreferrer')
                      }}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl p-6 sm:p-8"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-slate-100"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="space-y-4 pr-8">
                <h2 className="text-2xl font-semibold text-slate-100">
                  {selected.title}
                </h2>
                <p className="text-sm leading-relaxed text-slate-300">
                  {selected.longDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-slate-700/50 bg-slate-800/50 px-3 py-1.5 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-4">
                  {selected.github && (
                    <Button
                      onClick={() =>
                        window.open(selected.github, '_blank', 'noopener,noreferrer')
                      }
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                  )}
                  {selected.live && (
                    <Button
                      variant="outline"
                      onClick={() =>
                        window.open(selected.live, '_blank', 'noopener,noreferrer')
                      }
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
