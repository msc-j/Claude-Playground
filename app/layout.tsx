import type { Metadata } from 'next'
import { Righteous, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const righteous = Righteous({ weight: '400', subsets: ['latin'], variable: '--font-righteous' })
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' })

export const metadata: Metadata = {
  title: "Claude's Playground — Live AI Demos",
  description: 'Watch Claude build interactive UIs, transform visual styles, and roast your code.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${righteous.variable} ${dmSans.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  )
}
