# Quick Start - Konsensi Website Deployment

## 🚀 Snelle Setup (5 minuten)

### 1. GitHub Actions Workflow Toevoegen

Kopieer dit bestand naar GitHub:
- Pad: `.github/workflows/deploy.yml`
- Inhoud staat in: `.github/workflows/deploy.yml` (lokaal)

**Via GitHub UI:**
1. Ga naar: https://github.com/rivaldorose/konsensi-website
2. "Add file" → "Create new file"
3. Pad: `.github/workflows/deploy.yml`
4. Kopieer inhoud van lokaal bestand
5. Commit

### 2. Vercel Setup

1. **Import Project**
   - https://vercel.com → "Add New" → "Project"
   - Selecteer: `rivaldorose/konsensi-website`
   - Klik "Import"

2. **Environment Variables**
   - Settings → Environment Variables
   - Voeg toe:
     - `VITE_SUPABASE_URL`
     - `VITE_SUPABASE_ANON_KEY`

3. **Deploy**
   - Klik "Deploy"
   - Klaar! 🎉

### 3. GitHub Secrets (voor CI/CD)

Ga naar: https://github.com/rivaldorose/konsensi-website/settings/secrets/actions

Voeg toe:
- `VERCEL_TOKEN` (van https://vercel.com/account/tokens)
- `VERCEL_ORG_ID` (Vercel Settings → General)
- `VERCEL_PROJECT_ID` (Vercel Project → Settings → General)
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## 📋 Environment Variables

**Lokaal (.env):**
```env
VITE_SUPABASE_URL=your_url
VITE_SUPABASE_ANON_KEY=your_key
```

**Vercel:**
- Zelfde variables in dashboard

**GitHub Secrets:**
- Zelfde variables als secrets

## 🔗 Belangrijke Links

- **Repo**: https://github.com/rivaldorose/konsensi-website
- **Vercel**: https://vercel.com/dashboard
- **Supabase**: https://app.supabase.com

Voor volledige details, zie: `DEPLOYMENT_GUIDE.md`

