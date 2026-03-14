# ✦ Claude's Playground

An interactive Next.js showcase with **3 live demos** of Claude's capabilities.
**No API key needed. No terminal setup required.**

1. **Instant UI Builder** — Describe a UI, see it rendered live (6 pre-built demos)
2. **Design Chameleon** — One product card in 6 wildly different visual styles
3. **Code Roaster 🔥** — Savage-but-helpful code review with real fixes

---

## 🚀 Deploy to Vercel — No Code Required

### Step 1: Upload to GitHub
1. Go to [github.com](https://github.com) and sign in (or create a free account)
2. Click the **+** button → **New repository**
3. Name it `claude-playground`, keep it public, click **Create repository**
4. Drag and drop the unzipped `claude-playground` folder contents into the repository page
5. Click **Commit changes**

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account
2. Click **Add New → Project**
3. Find and select your `claude-playground` repository
4. Click **Deploy** — that's it!

Vercel automatically detects Next.js and handles everything else. Your site will be live at a URL like `claude-playground-xxx.vercel.app` in about 60 seconds.

---

## 📁 Project Structure

```
claude-playground/
├── app/
│   ├── globals.css        # Dark neon theme + animations
│   ├── layout.tsx         # Google Fonts (Righteous, DM Sans, JetBrains Mono)
│   └── page.tsx           # Assembles all sections
├── components/
│   ├── Nav.tsx            # Sticky navigation
│   ├── Hero.tsx           # Animated hero with rotating words
│   ├── UIBuilder.tsx      # Demo 1: UI generation
│   ├── DesignChameleon.tsx # Demo 2: Style transformation
│   └── CodeRoaster.tsx    # Demo 3: Code roasting
└── lib/
    ├── ui-demos.ts        # 6 pre-built UI demos (timer, music player, etc.)
    ├── design-demos.ts    # 6 design style transformations
    └── roast-demos.ts     # 3 code roast samples
```

---

## 🎨 Design System

Dark neon palette with custom fonts:
- **Righteous** — headings
- **DM Sans** — body text  
- **JetBrains Mono** — code

Colors: Pink `#f72585` · Lime `#b5ff39` · Cyan `#4cc9f0` · Violet `#7209b7`

---

No environment variables needed. No API keys. Just upload and deploy.
