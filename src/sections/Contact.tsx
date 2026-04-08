import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Github, Linkedin, Mail, Twitter, Send } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof formSchema>

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com', color: 'hover:text-slate-100' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com', color: 'hover:text-blue-400' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com', color: 'hover:text-sky-400' },
  { name: 'Email', icon: Mail, url: 'mailto:hello@example.com', color: 'hover:text-cyan-400' },
]

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log('Form submitted:', data)
      setSubmitStatus('success')
      reset()
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding">
      <motion.div
        className="mb-6 flex items-center justify-between gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
          Get In Touch
        </h2>
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
          Contact • Connect
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-[1.5fr,1fr]">
        <Card className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-100">
              Send a message
            </h3>
            <p className="text-sm text-slate-400">
              Have a project in mind or want to collaborate? Drop me a line!
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                {...register('name')}
                className={errors.name ? 'border-red-500/50 focus:ring-red-500/20' : ''}
              />
              {errors.name && (
                <p className="text-xs text-red-400">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                {...register('email')}
                className={errors.email ? 'border-red-500/50 focus:ring-red-500/20' : ''}
              />
              {errors.email && (
                <p className="text-xs text-red-400">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                {...register('message')}
                className={errors.message ? 'border-red-500/50 focus:ring-red-500/20' : ''}
              />
              {errors.message && (
                <p className="text-xs text-red-400">{errors.message.message}</p>
              )}
            </div>

            <Button type="submit" disabled={isSubmitting} size="lg" className="w-full">
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>

            {submitStatus === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-green-400"
              >
                Message sent successfully! I&apos;ll get back to you soon.
              </motion.p>
            )}

            {submitStatus === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-red-400"
              >
                Something went wrong. Please try again or reach out via email.
              </motion.p>
            )}
          </form>
        </Card>

        <Card className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-100">
              Connect with me
            </h3>
            <p className="text-sm text-slate-400">
              Follow my work and reach out on social platforms
            </p>
          </div>

          <div className="space-y-3">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ x: 4 }}
                  className={`flex items-center gap-3 rounded-xl border border-slate-700/50 bg-slate-800/30 p-4 text-slate-300 transition-colors ${social.color}`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-sm font-medium">{social.name}</span>
                </motion.a>
              )
            })}
          </div>

          <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-4">
            <p className="text-xs text-slate-400">
              <strong className="text-slate-300">Available for:</strong> Remote
              work, freelance projects, and full-time opportunities
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
