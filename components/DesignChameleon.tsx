'use client'
import { useState } from 'react'
import { DESIGN_DEMOS } from '@/lib/design-demos'

const VIBES = [
  { id: 'synthwave', emoji: '🌆', label: 'Synthwave', desc: 'Neon grids & retro-future glow' },
  { id: 'bauhaus', emoji: '⬡', label: 'Bauhaus', desc: 'Bold geometry, primary colors' },
  { id: 'cottagecore', emoji: '🌸', label: 'Cottagecore', desc: 'Soft pastels & floral warmth' },
  { id: 'cyberpunk', emoji: '⚡', label: 'Cyberpunk', desc: 'Dark, glitch, brutal neon' },
  { id: 'memphis', emoji: '🔺', label: 'Memphis', desc: 'Wild 80s shapes & pop chaos' },
  { id: 'brutalist', emoji: '▓', label: 'Brutalist', desc: 'Raw, thick borders, no-mercy' },
]

const PRODUCT = { name: 'Cosmic Headphones X', price: '$299', rating: '4.8', reviews: '2,847', tagline: 'Hear everything. Feel nothing else.', badge: 'Bestseller' }

export default function DesignChameleon() {
  const [active, setActive] = useState<string | null>(null)
  const [loading, setLoading] = useState<string | null>(null)
  const [html, setHtml] = useState('')

  const pick = (vibeId: string) => {
    if (loading) return
    setLoading(vibeId)
    setHtml('')
    setTimeout(() => {
      setHtml(DESIGN_DEMOS[vibeId] ?? '')
      setActive(vibeId)
      setLoading(null)
    }, 1600)
  }

  const activeVibe = VIBES.find(v => v.id === active)

  return (
    <section id="design-chameleon" className="py-28 px-6 max-w-6xl mx-auto">
      <div className="mb-10">
        <div className="flex items-center gap-4 mb-5">
          <span className="font-heading text-6xl text-accent/20 leading-none select-none">02</span>
          <div className="h-px flex-1 bg-bdr" />
          <span className="text-xs font-mono text-muted uppercase tracking-widest">Style Transformer</span>
        </div>
        <h2 className="font-heading text-4xl md:text-5xl text-txt mb-3">
          Design <span className="text-accent">Chameleon</span>
        </h2>
        <p className="text-muted text-lg max-w-lg font-body">
          One product. Six wildly different aesthetics. Click a style and watch Claude transform the entire card.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-xs font-mono text-muted uppercase tracking-widest mb-4">Choose a style</p>
            <div className="grid grid-cols-2 gap-3">
              {VIBES.map(vibe => {
                const isLoading = loading === vibe.id
                const isActive = active === vibe.id && !loading
                return (
                  <button key={vibe.id} onClick={() => pick(vibe.id)} disabled={!!loading}
                    className={`relative text-left p-4 rounded-xl border transition-all duration-200 overflow-hidden disabled:opacity-50 ${
                      isActive ? 'border-accent/70 bg-accent/10 text-txt' : 'border-bdr bg-surface text-muted hover:border-accent/30 hover:text-txt hover:bg-surface2'
                    }`}>
                    <div className="font-heading text-sm mb-0.5">{vibe.emoji} {vibe.label}</div>
                    <div className="text-xs opacity-60 font-body">{vibe.desc}</div>
                    {isLoading && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-bdr overflow-hidden"><div className="h-full shimmer-bar" /></div>}
                  </button>
                )
              })}
            </div>
          </div>
          <div className="bg-surface border border-bdr rounded-2xl p-5">
            <p className="text-xs font-mono text-muted uppercase tracking-widest mb-4">Original content</p>
            <div className="flex flex-col gap-1.5">
              <span className="inline-block self-start text-xs px-2 py-0.5 bg-lime/15 text-lime rounded font-mono">{PRODUCT.badge}</span>
              <p className="font-heading text-xl text-txt">{PRODUCT.name}</p>
              <p className="font-mono text-accent text-lg">{PRODUCT.price}</p>
              <p className="text-sm text-muted">⭐ {PRODUCT.rating} · {PRODUCT.reviews} reviews</p>
              <p className="text-xs text-muted/60 italic mt-1">"{PRODUCT.tagline}"</p>
            </div>
          </div>
        </div>

        <div className="neon-accent bg-surface rounded-2xl overflow-hidden flex flex-col min-h-[540px]">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-bdr bg-surface2 shrink-0">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-accent/60" />
              <div className="w-3 h-3 rounded-full bg-lime/60" />
              <div className="w-3 h-3 rounded-full bg-cyan/60" />
            </div>
            <span className="text-xs font-mono text-muted ml-2">{activeVibe ? `${activeVibe.id}-design.html` : 'pick-a-style.html'}</span>
          </div>
          <div className="flex-1 relative bg-surface2">
            {loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-10 h-10 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                <p className="text-muted text-sm font-mono">Redesigning in {VIBES.find(v => v.id === loading)?.label} style…</p>
              </div>
            )}
            {!loading && !html && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted">
                <div className="text-5xl">🎨</div>
                <p className="text-sm font-body">Pick a style to see the transformation</p>
              </div>
            )}
            {!loading && html && (
              <iframe key={active} srcDoc={html} className="w-full border-0" sandbox="allow-scripts" title="Design preview" style={{ height: '540px' }} />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
