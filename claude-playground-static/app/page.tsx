import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import UIBuilder from '@/components/UIBuilder'
import DesignChameleon from '@/components/DesignChameleon'
import CodeRoaster from '@/components/CodeRoaster'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="max-w-6xl mx-auto px-6"><div className="h-px bg-gradient-to-r from-transparent via-bdr to-transparent" /></div>
        <UIBuilder />
        <div className="max-w-6xl mx-auto px-6"><div className="h-px bg-gradient-to-r from-transparent via-bdr to-transparent" /></div>
        <DesignChameleon />
        <div className="max-w-6xl mx-auto px-6"><div className="h-px bg-gradient-to-r from-transparent via-bdr to-transparent" /></div>
        <CodeRoaster />
      </main>
      <footer className="border-t border-bdr py-12 px-6 mt-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-accent to-violet flex items-center justify-center">
              <span className="text-white text-xs">✦</span>
            </div>
            <span className="text-muted font-body">Built to showcase <a href="https://anthropic.com" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline">Claude by Anthropic</a></span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://docs.anthropic.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-txt transition-colors font-body">API Docs</a>
            <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-txt transition-colors font-body">Try Claude</a>
          </div>
        </div>
      </footer>
    </>
  )
}
