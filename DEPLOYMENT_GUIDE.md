# Konsensi Website - Deployment Guide

Deze guide helpt je met het volledig opzetten van GitHub en Vercel deployment voor de Konsensi website.

## ✅ Wat er al is gedaan

- ✅ Git repository geïnitialiseerd
- ✅ Code naar GitHub gepusht: https://github.com/rivaldorose/konsensi-website.git
- ✅ GitHub Actions workflow bestand aangemaakt (lokaal)

## 📋 Stappen voor volledige setup

### 1. GitHub Actions Workflow toevoegen

Je GitHub token heeft niet de `workflow` scope. Je hebt twee opties:

#### Optie A: Workflow via GitHub UI toevoegen (Aanbevolen)

1. Ga naar: https://github.com/rivaldorose/konsensi-website
2. Klik op "Add file" → "Create new file"
3. Maak het pad: `.github/workflows/deploy.yml`
4. Kopieer de inhoud van het bestand `.github/workflows/deploy.yml` (staat lokaal in je project)
5. Klik op "Commit new file"

#### Optie B: Token updaten met workflow scope

1. Ga naar: https://github.com/settings/tokens
2. Maak een nieuwe token met de `workflow` scope
3. Update de remote URL in je lokale repository:
   ```bash
   git remote set-url origin https://[NIEUWE_TOKEN]@github.com/rivaldorose/konsensi-website.git
   ```
4. Voeg de workflow toe:
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Add GitHub Actions workflow"
   git push
   ```

### 2. Vercel Project Aanmaken

1. **Log in op Vercel**
   - Ga naar: https://vercel.com
   - Log in met je GitHub account

2. **Nieuw Project Aanmaken**
   - Klik op "Add New..." → "Project"
   - Selecteer de repository: `rivaldorose/konsensi-website`
   - Klik op "Import"

3. **Project Configuratie**
   - **Framework Preset**: Vite (of detecteert automatisch)
   - **Root Directory**: `./` (standaard)
   - **Build Command**: `npm run build` (standaard)
   - **Output Directory**: `dist` (standaard)
   - **Install Command**: `npm install` (standaard)

4. **Environment Variables Toevoegen**
   
   Voeg de volgende environment variables toe in Vercel:
   
   - `VITE_SUPABASE_URL` - Je Supabase project URL
   - `VITE_SUPABASE_ANON_KEY` - Je Supabase anon key
   
   **Hoe toe te voegen:**
   - In het Vercel project dashboard, ga naar "Settings" → "Environment Variables"
   - Voeg elke variable toe voor alle environments (Production, Preview, Development)
   - Je kunt de waarden vinden in je Supabase dashboard: https://app.supabase.com/project/_/settings/api

5. **Deploy**
   - Klik op "Deploy"
   - Wacht tot de build klaar is
   - Je krijgt een URL zoals: `https://konsensi-website.vercel.app`

### 3. GitHub Secrets Configureren (voor GitHub Actions)

Als je GitHub Actions wilt gebruiken voor automatische deployments:

1. Ga naar: https://github.com/rivaldorose/konsensi-website/settings/secrets/actions
2. Klik op "New repository secret"
3. Voeg de volgende secrets toe:

   **Vercel Secrets:**
   - `VERCEL_TOKEN` - Vercel API token
     - Haal op via: https://vercel.com/account/tokens
   - `VERCEL_ORG_ID` - Vercel Organization ID
     - Vind in: Vercel Dashboard → Settings → General
   - `VERCEL_PROJECT_ID` - Vercel Project ID
     - Vind in: Vercel Project → Settings → General

   **Supabase Secrets (voor build):**
   - `VITE_SUPABASE_URL` - Je Supabase project URL
   - `VITE_SUPABASE_ANON_KEY` - Je Supabase anon key

### 4. Custom Domain (Optioneel)

1. In Vercel project dashboard, ga naar "Settings" → "Domains"
2. Voeg je custom domain toe
3. Volg de DNS instructies van Vercel

## 🔄 Automatische Deployments

Na setup worden deployments automatisch getriggerd bij:
- **Push naar `main` branch** → Production deployment
- **Pull Requests** → Preview deployment

## 📝 Environment Variables Overzicht

### Lokaal Development

Maak een `.env` bestand in de root van je project:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Vercel

Dezelfde variables moeten worden toegevoegd in Vercel dashboard (zie stap 2.4).

### GitHub Actions

Dezelfde variables moeten worden toegevoegd als GitHub Secrets (zie stap 3).

## 🛠️ Troubleshooting

### Build faalt in Vercel

- Controleer of alle environment variables zijn ingesteld
- Check de build logs in Vercel dashboard
- Test lokaal met `npm run build`

### GitHub Actions faalt

- Controleer of alle secrets zijn ingesteld
- Verifieer dat de Vercel token geldig is
- Check de workflow logs in GitHub Actions tab

### Supabase connectie problemen

- Verifieer dat de Supabase URL en key correct zijn
- Check of je Supabase project actief is
- Controleer CORS settings in Supabase

## 📚 Handige Links

- **GitHub Repository**: https://github.com/rivaldorose/konsensi-website
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Supabase Dashboard**: https://app.supabase.com
- **Vercel Documentation**: https://vercel.com/docs
- **GitHub Actions Documentation**: https://docs.github.com/en/actions

## ✅ Checklist

- [ ] GitHub Actions workflow toegevoegd (via UI of token update)
- [ ] Vercel project aangemaakt en gekoppeld
- [ ] Environment variables ingesteld in Vercel
- [ ] Eerste deployment succesvol
- [ ] GitHub Secrets ingesteld (voor GitHub Actions)
- [ ] Custom domain geconfigureerd (optioneel)
- [ ] Test deployment via GitHub Actions

## 🎉 Klaar!

Na het voltooien van deze stappen is je Konsensi website volledig geconfigureerd voor:
- ✅ Automatische deployments via Vercel
- ✅ CI/CD via GitHub Actions
- ✅ Preview deployments voor pull requests
- ✅ Production deployments voor main branch

