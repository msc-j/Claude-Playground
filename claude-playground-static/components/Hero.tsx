'use client'
import { useEffect, useState } from 'react'

const WORDS = ['Components', 'Interfaces', 'Designs', 'Experiences', 'Magic ✦']

export default function Hero() {
  const [idx, setIdx] = useState(0)
  const [vis, setVis] = useState(true)

  useEffect(() => {
    const t = setInterval(() => {
      setVis(false)
      setTimeout(() => { setIdx(i => (i + 1) % WORDS.length); setVis(true) }, 350)
    }, 2200)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden dot-grid pt-20">
      <div className="absolute top-1/4 left-1/5 w-72 h-72 rounded-full bg-accent/8 blur-3xl animate-float pointer-events-none" style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-violet/8 blur-3xl animate-float pointer-events-none" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-cyan/8 blur-3xl animate-float pointer-events-none" style={{ animationDelay: '4s' }} />
      {[
        { style: 'top-36 left-12 w-6 h-6 border-2 border-lime/40 rotate-45', delay: '1s' },
        { style: 'top-52 right-20 w-4 h-4 rounded-full bg-accent/50', delay: '3s' },
        { style: 'bottom-52 left-28 w-8 h-8 border-2 border-cyan/40 rounded-full', delay: '0.5s' },
        { style: 'bottom-36 right-36 w-5 h-5 border-2 border-violet/50 rotate-12', delay: '2.5s' },
        { style: 'top-1/2 left-10 w-3 h-3 bg-lime/40 rounded-full', delay: '1.5s' },
      ].map(({ style, delay }, i) => (
        <div key={i} className={`absolute ${style} animate-float pointer-events-none`} style={{ animationDelay: delay }} />
      ))}

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-bdr bg-surface mb-10 text-sm text-muted">
          <span className="w-2 h-2 rounded-full bg-lime animate-pulse-glow" />
          Three live interactive demos — all inside this page
        </div>
        <h1 className="font-heading leading-tight mb-6">
          <span className="text-txt block text-6xl md:text-8xl">Claude</span>
          <span className="text-gradient-rainbow block text-6xl md:text-8xl">Builds</span>
          <span className="block text-6xl md:text-8xl text-lime transition-all duration-300"
            style={{ opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(-10px)' }}>
            {WORDS[idx]}
          </span>
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-xl mx-auto mb-12 leading-relaxed font-body">
          Three demos. Watch Claude generate full UIs, shapeshift visual styles,
          and mercilessly roast code — instantly.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a href="#ui-builder" className="px-8 py-4 bg-accent text-white font-heading rounded-full text-base hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-accent/20">
            See It In Action ↓
          </a>
          <a href="https://claude.ai" target="_blank" rel="noopener noreferrer"
            className="px-8 py-4 border border-bdr text-muted rounded-full text-base hover:border-cyan/50 hover:text-cyan transition-all">
            Try Claude Free →
          </a>
        </div>
        <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
          {[['< 2s', 'Fake load time'], ['6', 'Design styles'], ['3', 'Live demos']].map(([v, l]) => (
            <div key={l} className="text-center">
              <div className="font-heading text-3xl text-accent mb-1">{v}</div>
              <div className="text-xs text-muted">{l}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted/40 animate-pulse-glow">
        <div className="text-xs tracking-widest uppercase font-mono">scroll</div>
        <div className="w-px h-6 bg-muted/30" />
      </div>
    </section>
  )
}
