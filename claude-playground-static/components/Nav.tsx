'use client'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-bg/80 backdrop-blur-xl border-b border-bdr' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-violet flex items-center justify-center">
            <span className="text-white text-base">✦</span>
          </div>
          <span className="font-heading text-txt text-base tracking-wide">
            Claude<span className="text-accent">'s</span> Playground
          </span>
        </a>
        <div className="hidden md:flex items-center gap-7">
          {[['UI Builder', '#ui-builder'], ['Design Chameleon', '#design-chameleon'], ['Code Roaster', '#code-roaster']].map(([l, h]) => (
            <a key={l} href={h} className="text-muted hover:text-txt text-sm transition-colors">{l}</a>
          ))}
        </div>
        <a href="https://claude.ai" target="_blank" rel="noopener noreferrer"
          className="text-xs px-4 py-2 rounded-full border border-accent/50 text-accent hover:bg-accent hover:text-white transition-all">
          Try Claude →
        </a>
      </div>
    </nav>
  )
}
