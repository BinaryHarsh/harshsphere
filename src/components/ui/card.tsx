import * as React from 'react'
import { cn } from '@/lib/utils'

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'glass-panel rounded-3xl p-6 sm:p-8 border border-white/5 shadow-xl',
        className,
      )}
      {...props}
    />
  )
}

