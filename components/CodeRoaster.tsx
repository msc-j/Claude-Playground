'use client'
import { useState } from 'react'
import { DEFAULT_CODE, ROAST_SAMPLES, findRoast } from '@/lib/roast-demos'

function RoastDisplay({ content }: { content: string }) {
  const parts = content.split(/(```[\s\S]*?```)/g)
  return (
    <div className="space-y-4">
      {parts.map((part, i) => {
        if (part.startsWith('```')) {
          const lang = part.match(/^```(\w+)?/)?.[1] ?? ''
          const code = part.replace(/^```\w*\n?/, '').replace(/\n?```$/, '')
          return (
            <div key={i}>
              {lang && <div className="flex items-center gap-2 px-4 py-2 bg-surface2 rounded-t-xl border border-bdr border-b-0"><span className="w-2 h-2 rounded-full bg-lime/60" /><span className="text-xs font-mono text-muted">{lang}</span></div>}
              <pre className={`bg-bg/80 ${lang ? 'rounded-b-xl rounded-tr-xl' : 'rounded-xl'} border border-bdr p-4 text-lime/80 font-mono text-xs leading-relaxed overflow-auto`}>{code}</pre>
            </div>
          )
        }
        return (
          <div key={i} className="space-y-2">
            {part.split('\n').map((line, j) => {
              if (!line.trim()) return <div key={j} className="h-1" />
              if (line.startsWith('🔥')) return <h3 key={j} className="font-heading text-accent text-lg mt-4">{line}</h3>
              if (line.startsWith('💡')) return <h3 key={j} className="font-heading text-lime text-lg mt-4">{line}</h3>
              if (line.startsWith('✨')) return <h3 key={j} className="font-heading text-cyan text-lg mt-4">{line}</h3>
              if (line.match(/^[-•]\s/)) return (
                <p key={j} className="text-muted text-sm pl-4 font-body leading-relaxed flex gap-2">
                  <span className="text-accent/50 shrink-0">→</span><span>{line.replace(/^[-•]\s/, '')}</span>
                </p>
              )
              return <p key={j} className="text-muted text-sm leading-relaxed font-body" dangerouslySetInnerHTML={{ __html: line.replace(/`([^`]+)`/g, '<code class="text-lime/80 bg-lime/10 px-1 rounded font-mono text-xs">$1</code>').replace(/\*\*(.+?)\*\*/g, '<strong class="text-txt">$1</strong>') }} />
            })}
          </div>
        )
      })}
    </div>
  )
}

export default function CodeRoaster() {
  const [code, setCode] = useState(DEFAULT_CODE)
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const handleRoast = () => {
    if (!code.trim() || loading) return
    setLoading(true)
    setResult('')
    const entry = findRoast(code)
    setTimeout(() => {
      setResult(entry.roast)
      setLoading(false)
    }, 2000)
  }

  return (
    <section id="code-roaster" className="py-28 px-6 max-w-6xl mx-auto">
      <div className="mb-10">
        <div className="flex items-center gap-4 mb-5">
          <span className="font-heading text-6xl text-cyan/20 leading-none select-none">03</span>
          <div className="h-px flex-1 bg-bdr" />
          <span className="text-xs font-mono text-muted uppercase tracking-widest">Brutal Honesty</span>
        </div>
        <h2 className="font-heading text-4xl md:text-5xl text-txt mb-3">
          Code <span className="text-cyan">Roaster</span> <span className="text-2xl">🔥</span>
        </h2>
        <p className="text-muted text-lg max-w-lg font-body">
          Paste any code. Claude roasts it with wit — then shows the fix. Try the 3 built-in samples or paste your own.
        </p>
      </div>

      {/* Sample switcher */}
      <div className="flex gap-3 mb-5 flex-wrap">
        {ROAST_SAMPLES.map((s, i) => (
          <button key={i} onClick={() => { setCode(s.code); setResult('') }}
            className="text-xs px-3 py-1.5 rounded-lg border border-bdr text-muted hover:border-cyan/40 hover:text-cyan transition-all font-mono">
            Sample {i + 1}: {s.keywords.slice(0, 2).join(' + ')}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="neon-cyan bg-surface rounded-2xl overflow-hidden flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 border-b border-bdr bg-surface2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-accent/60" />
              <div className="w-3 h-3 rounded-full bg-lime/60" />
              <div className="w-3 h-3 rounded-full bg-cyan/60" />
            </div>
            <span className="text-xs font-mono text-muted">your-code.js</span>
          </div>
          <textarea value={code} onChange={e => setCode(e.target.value)}
            className="flex-1 bg-transparent px-5 py-4 text-lime/80 font-mono text-sm resize-none focus:outline-none leading-relaxed min-h-[300px]"
            placeholder="// Paste your code here..." spellCheck={false} />
          <div className="p-4 border-t border-bdr bg-surface2">
            <button onClick={handleRoast} disabled={loading || !code.trim()}
              className="w-full py-3.5 bg-gradient-to-r from-accent to-violet text-white font-heading rounded-xl text-base hover:opacity-90 transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-lg shadow-accent/15">
              {loading ? '🔥 Roasting...' : '🔥 ROAST MY CODE'}
            </button>
          </div>
        </div>

        <div className="neon-cyan bg-surface rounded-2xl overflow-hidden flex flex-col min-h-[450px]">
          <div className="px-4 py-3 border-b border-bdr bg-surface2">
            <span className="text-xs font-mono text-muted">roast-result.md</span>
          </div>
          <div className="flex-1 p-6 overflow-auto">
            {loading && (
              <div className="h-full flex flex-col items-center justify-center gap-4">
                <div className="text-5xl animate-bounce">🔥</div>
                <p className="text-muted text-sm font-mono">Sharpening claws…</p>
              </div>
            )}
            {!loading && !result && (
              <div className="h-full flex flex-col items-center justify-center gap-3 text-muted">
                <div className="text-5xl">😤</div>
                <p className="text-sm font-body">Your roast will appear here</p>
                <p className="text-xs opacity-50 font-mono">No code is safe</p>
              </div>
            )}
            {!loading && result && <RoastDisplay content={result} />}
          </div>
        </div>
      </div>
    </section>
  )
}
