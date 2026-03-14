'use client'
import { useState } from 'react'
import { UI_DEMOS, findDemo } from '@/lib/ui-demos'

const EXAMPLES = UI_DEMOS.map(d => d.label)

export default function UIBuilder() {
  const [prompt, setPrompt] = useState('')
  const [html, setHtml] = useState('')
  const [loading, setLoading] = useState(false)
  const [showCode, setShowCode] = useState(false)
  const [currentPrompt, setCurrentPrompt] = useState('')

  const run = (p?: string) => {
    const text = (p ?? prompt).trim()
    if (!text || loading) return
    if (p) setPrompt(p)
    setLoading(true)
    setShowCode(false)
    setHtml('')
    setCurrentPrompt(text)
    // Simulate Claude "thinking" for realism
    const demo = findDemo(text)
    setTimeout(() => {
      setHtml(demo.html)
      setLoading(false)
    }, 1800)
  }

  return (
    <section id="ui-builder" className="py-28 px-6 max-w-6xl mx-auto">
      <div className="mb-10">
        <div className="flex items-center gap-4 mb-5">
          <span className="font-heading text-6xl text-lime/20 leading-none select-none">01</span>
          <div className="h-px flex-1 bg-bdr" />
          <span className="text-xs font-mono text-muted uppercase tracking-widest">Instant Generation</span>
        </div>
        <h2 className="font-heading text-4xl md:text-5xl text-txt mb-3">
          Instant <span className="text-lime">UI Builder</span>
        </h2>
        <p className="text-muted text-lg max-w-lg font-body">
          Describe any UI in plain English. Claude writes the HTML, CSS, and JS — rendered live.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-6">
        <div className="md:col-span-2 flex flex-col gap-4">
          <div className="neon-lime bg-surface rounded-2xl p-5 flex flex-col gap-4">
            <label className="text-xs font-mono text-muted">DESCRIBE YOUR UI</label>
            <textarea
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) run() }}
              placeholder="e.g. a neon countdown timer with glowing digits..."
              className="w-full h-28 bg-surface2 border border-bdr rounded-xl px-4 py-3 text-txt text-sm resize-none focus:outline-none focus:border-lime/50 transition-colors font-body placeholder:text-muted/50"
            />
            <button onClick={() => run()} disabled={loading || !prompt.trim()}
              className="w-full py-3 bg-lime text-bg font-heading rounded-xl text-sm hover:opacity-90 transition-all disabled:opacity-30 disabled:cursor-not-allowed">
              {loading ? '⚙ Building...' : '✦ Generate UI'}
            </button>
          </div>

          <div className="bg-surface rounded-2xl p-5 border border-bdr">
            <p className="text-xs font-mono text-muted mb-3 uppercase tracking-widest">Try an example</p>
            <div className="flex flex-col gap-2">
              {EXAMPLES.map(ex => (
                <button key={ex} onClick={() => run(ex)} disabled={loading}
                  className="text-left text-xs px-3 py-2.5 rounded-lg border border-bdr text-muted hover:border-lime/40 hover:text-txt hover:bg-lime/5 transition-all disabled:opacity-30 font-body">
                  <span className="text-lime/60 mr-2">→</span>{ex}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-3 flex flex-col neon-lime bg-surface rounded-2xl overflow-hidden min-h-[540px]">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-bdr bg-surface2 shrink-0">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-accent/60" />
              <div className="w-3 h-3 rounded-full bg-lime/60" />
              <div className="w-3 h-3 rounded-full bg-cyan/60" />
            </div>
            <div className="flex-1 mx-3 bg-bdr rounded px-3 py-1 text-xs text-muted font-mono truncate">
              {currentPrompt || 'claude-generated.html'}
            </div>
            {html && (
              <button onClick={() => setShowCode(v => !v)} className="text-xs font-mono text-muted hover:text-cyan transition-colors shrink-0">
                {showCode ? '👁 Preview' : '</> Code'}
              </button>
            )}
          </div>

          <div className="flex-1 relative">
            {loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-surface">
                <div className="w-10 h-10 border-2 border-lime border-t-transparent rounded-full animate-spin" />
                <p className="text-muted text-sm font-mono">Claude is coding…</p>
              </div>
            )}
            {!loading && !html && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted bg-surface">
                <div className="text-5xl opacity-30">✦</div>
                <p className="text-sm font-body">Your generated UI will appear here</p>
                <p className="text-xs opacity-50 font-mono">Cmd+Enter to generate</p>
              </div>
            )}
            {!loading && html && (
              showCode
                ? <pre className="h-full overflow-auto p-5 text-xs text-lime/70 font-mono leading-relaxed bg-bg/60">{html}</pre>
                : <iframe key={html.slice(0, 40)} srcDoc={html} className="w-full border-0" sandbox="allow-scripts" title="Generated UI" style={{ minHeight: '460px' }} />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
