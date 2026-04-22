# AI Forge Advantage — Cursor Terminal Setup

## Step 1: Open in Cursor
1. Open Cursor on your computer
2. Go to **File → Open Folder** and select this `aiforgeadvantage` folder
3. Press **Ctrl + `** to open the terminal at the bottom

---

## Step 2: Install Dependencies
Paste this into the terminal and press Enter:
```
pnpm install
```
> If you don't have pnpm, run this first: `npm install -g pnpm`

---

## Step 3: Start the Dev Server
```
pnpm dev
```
Then open your browser to: **http://localhost:3000**

---

## Step 4: Set Up Your Environment (Optional — for AI features)
In the left sidebar, right-click → **New File** → name it `.env.local`

Paste this inside:
```
OPENAI_API_KEY=sk-proj-YOUR_FULL_KEY_HERE
VITE_SITE_URL=https://aiforgeadvantage.com
```
Save with **Ctrl + S**, then restart the terminal with **Ctrl + C** and `pnpm dev`

---

## Step 5: Deploy to Vercel (Go Live)
Run these one at a time:
```
git init
git add .
git commit -m "Initial build — AI Forge Advantage"
```
Then:
1. Go to **vercel.com** → Add New Project → Import from GitHub
2. Connect this repo
3. Under **Settings → Environment Variables**, add your `OPENAI_API_KEY`
4. Under **Settings → Domains**, add `aiforgeadvantage.com`
5. Click **Deploy**

---

## Project Structure
```
aiforgeadvantage/
├── client/
│   ├── index.html          ← SEO meta tags, fonts, structured data
│   ├── public/
│   │   ├── robots.txt      ← Search engine crawl rules
│   │   └── sitemap.xml     ← Site map for Google
│   └── src/
│       ├── pages/
│       │   └── Home.tsx    ← Main page (assembles all sections)
│       ├── components/
│       │   ├── Navbar.tsx
│       │   ├── HeroSection.tsx
│       │   ├── StatsSection.tsx
│       │   ├── ServicesSection.tsx
│       │   ├── ChatbotDemo.tsx
│       │   ├── ProcessSection.tsx
│       │   ├── ScopeSection.tsx
│       │   ├── TestimonialsSection.tsx
│       │   ├── PricingSection.tsx
│       │   ├── LocalSection.tsx
│       │   ├── CTASection.tsx
│       │   ├── Footer.tsx
│       │   └── ForgeBot.tsx  ← Floating chat widget
│       └── index.css         ← Global styles & brand tokens
└── CURSOR_SETUP.md           ← This file
```

---

## Key Links Baked In
- **Calendly:** https://calendly.com/ai-advantage-freelance-consulting/30min
- **Phone:** (325) 389-1081
- **Email:** Ai.advantage.freelance.consulting@gmail.com
- **Domain:** https://aiforgeadvantage.com

---

## To Edit Content
- **Hero text** → `client/src/components/HeroSection.tsx`
- **Services** → `client/src/components/ServicesSection.tsx`
- **Pricing** → `client/src/components/PricingSection.tsx`
- **Testimonials** → `client/src/components/TestimonialsSection.tsx`
- **ForgeBot responses** → `client/src/components/ForgeBot.tsx` (the `getBotReply` function)
- **Colors/fonts** → `client/src/index.css`
