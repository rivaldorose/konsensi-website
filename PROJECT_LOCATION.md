# Konsensi Website - Project Locatie & Configuratie

## 📍 Project Locatie

**Volledige pad:**
```
/Users/rivaldomacandrew/Desktop/konsensi apps/konsensi-8f180590
```

**Kort pad (vanaf Desktop):**
```
Desktop/konsensi apps/konsensi-8f180590
```

## 🔗 GitHub Repository

**Repository URL:**
```
https://github.com/rivaldorose/konsensi-website.git
```

**Remote configuratie:**
```bash
origin  https://github.com/rivaldorose/konsensi-website.git (fetch)
origin  https://github.com/rivaldorose/konsensi-website.git (push)
```

**Branch:**
- `main` (actieve branch)

## 📁 Belangrijke Bestanden & Mappen

### Configuratie Bestanden
- `package.json` - Dependencies en scripts
- `vite.config.js` - Vite build configuratie
- `vercel.json` - Vercel deployment configuratie
- `tailwind.config.js` - Tailwind CSS configuratie
- `.gitignore` - Git ignore regels

### Documentatie
- `README.md` - Project overzicht
- `DEPLOYMENT_GUIDE.md` - Volledige deployment instructies
- `QUICK_START.md` - Snelle setup guide
- `SUPABASE_SETUP.md` - Supabase backend setup
- `VERCEL_SETUP.md` - Vercel specifieke setup
- `GITHUB_SETUP.md` - GitHub setup (indien aanwezig)

### Source Code
- `src/` - Alle source code
  - `src/pages/` - React pagina's
  - `src/components/` - React componenten
  - `src/lib/` - Utilities (supabase.js, utils.js)
  - `src/api/` - API clients
  - `src/services/` - Service layers

### Git & CI/CD
- `.git/` - Git repository data
- `.github/workflows/` - GitHub Actions workflows
  - `deploy.yml` - Deployment workflow (lokaal, nog niet gepusht)

## 🚀 Snel Starten

### Terminal Commands

**Naar project navigeren:**
```bash
cd "/Users/rivaldomacandrew/Desktop/konsensi apps/konsensi-8f180590"
```

**Of korter:**
```bash
cd ~/Desktop/konsensi\ apps/konsensi-8f180590
```

**Development server starten:**
```bash
npm install  # Eerste keer
npm run dev
```

**Build maken:**
```bash
npm run build
```

**Git status checken:**
```bash
git status
```

**Naar GitHub pushen:**
```bash
git add .
git commit -m "Beschrijving van wijzigingen"
git push
```

## 🔑 Environment Variables

**Lokaal `.env` bestand nodig:**
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**Locatie:** Root van project (niet gecommit in git)

## 📊 Project Status

✅ **Voltooid:**
- Git repository geïnitialiseerd
- Code naar GitHub gepusht
- Deployment documentatie aangemaakt
- Supabase setup guide aangemaakt

⚠️ **Nog te doen:**
- GitHub Actions workflow toevoegen (via GitHub UI)
- Supabase project aanmaken en configureren
- Vercel project koppelen
- Environment variables instellen

## 🗺️ Project Structuur

```
konsensi-8f180590/
├── .git/                    # Git repository
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions (lokaal)
├── src/
│   ├── api/                 # API clients
│   ├── components/          # React componenten
│   ├── lib/                 # Utilities (supabase.js)
│   ├── pages/               # React pagina's
│   ├── services/            # Service layers
│   └── utils/               # Helper functions
├── .gitignore
├── package.json
├── vercel.json
├── vite.config.js
└── [documentatie bestanden]
```

## 💡 Handige Commands

**Project openen in VS Code:**
```bash
code "/Users/rivaldomacandrew/Desktop/konsensi apps/konsensi-8f180590"
```

**Project openen in Finder:**
```bash
open "/Users/rivaldomacandrew/Desktop/konsensi apps/konsensi-8f180590"
```

**Git log bekijken:**
```bash
git log --oneline
```

**Remote repository info:**
```bash
git remote -v
```

## 🔗 Externe Links

- **GitHub**: https://github.com/rivaldorose/konsensi-website
- **Vercel**: (na setup beschikbaar)
- **Supabase**: (na setup beschikbaar)

## 📝 Notities

- Project naam: `konsensi-website`
- Framework: Vite + React
- Styling: Tailwind CSS
- Backend: Supabase
- Deployment: Vercel
- CI/CD: GitHub Actions

