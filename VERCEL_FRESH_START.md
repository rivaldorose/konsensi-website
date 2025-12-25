# Vercel Fresh Start - Stap voor Stap

Je hebt alle Konsensi projecten verwijderd uit Vercel. Perfect! Nu gaan we het project opnieuw importeren en **correct** configureren.

## 🚀 Stap-voor-Stap Setup

### Stap 1: Verifieer GitHub Repository

Controleer dat je code op GitHub staat:
- Repository: https://github.com/rivaldorose/konsensi-website
- Branch: `main`
- `vercel.json` heeft **GEEN** `env` sectie met `@` references

### Stap 2: Log in op Vercel

1. Ga naar: https://vercel.com
2. Log in met je GitHub account
3. Zorg dat je toegang hebt tot de repository `rivaldorose/konsensi-website`

### Stap 3: Import Project

1. Klik op **"Add New..."** → **"Project"**
2. Je ziet een lijst met GitHub repositories
3. Zoek en selecteer: **`rivaldorose/konsensi-website`**
4. Klik op **"Import"**

### Stap 4: Configureer Project (BELANGRIJK!)

**Framework Preset:**
- Vercel detecteert automatisch: **Vite** ✅
- Laat dit staan zoals het is

**Root Directory:**
- Laat staan: `./` (standaard)

**Build & Development Settings:**
- **Framework Preset:** Vite (automatisch)
- **Build Command:** `npm run build` (automatisch)
- **Output Directory:** `dist` (automatisch)
- **Install Command:** `npm install` (automatisch)

**⚠️ BELANGRIJK: Klik NOG NIET op "Deploy"!**

### Stap 5: Voeg Environment Variables Toe (VOORDAT JE DEPLOYT!)

**Dit is cruciaal - doe dit VOORDAT je de eerste deployment doet!**

1. Scroll naar beneden naar **"Environment Variables"** sectie
2. Klik op **"Add"** → **"Plain Text"** (NIET Secret!)

**Variable 1:**
- **Name:** `VITE_SUPABASE_URL`
- **Value:** (je Supabase project URL)
  - Haal op via: https://app.supabase.com → Project → Settings → API → Project URL
- **Environments:** 
  - ✅ Production
  - ✅ Preview
  - ✅ Development
- Klik **"Add"**

**Variable 2:**
- **Name:** `VITE_SUPABASE_ANON_KEY`
- **Value:** (je Supabase anon key)
  - Haal op via: https://app.supabase.com → Project → Settings → API → anon/public key
- **Environments:**
  - ✅ Production
  - ✅ Preview
  - ✅ Development
- Klik **"Add"**

### Stap 6: Deploy!

Nu kun je veilig deployen:

1. Scroll naar beneden
2. Klik op **"Deploy"**
3. Wacht tot de build klaar is (~2-3 minuten)
4. Je krijgt een URL zoals: `https://konsensi-website.vercel.app`

## ✅ Verificatie

Na de deployment:

1. **Check Build Logs:**
   - Ga naar Deployments tab
   - Klik op de deployment
   - Scroll naar "Build Logs"
   - Er zouden **GEEN** errors moeten zijn over missing secrets

2. **Test de Website:**
   - Open de deployment URL
   - Check of de website laadt zonder errors
   - Test functionaliteit (als Supabase is geconfigureerd)

## 🔑 Supabase Credentials Ophalen

Als je nog geen Supabase project hebt:

1. Ga naar: https://app.supabase.com
2. Klik **"New Project"**
3. Vul in:
   - **Name:** `konsensi-website`
   - **Database Password:** (kies een sterk wachtwoord)
   - **Region:** `West EU (Ireland)` of dichtstbijzijnde
4. Wacht tot project is aangemaakt (~2 minuten)
5. Ga naar **Settings** → **API**
6. Kopieer:
   - **Project URL** → `VITE_SUPABASE_URL`
   - **anon/public key** → `VITE_SUPABASE_ANON_KEY`

## 📋 Checklist

- [ ] GitHub repository bestaat en is up-to-date
- [ ] `vercel.json` heeft GEEN `env` sectie met `@` references
- [ ] Vercel account is aangemaakt en ingelogd
- [ ] Project is geïmporteerd vanuit GitHub
- [ ] Environment variables zijn toegevoegd **VOORDAT** eerste deployment
- [ ] Variables zijn toegevoegd als **Plain Text** (niet Secret)
- [ ] Variables heten exact: `VITE_SUPABASE_URL` en `VITE_SUPABASE_ANON_KEY`
- [ ] Variables zijn ingesteld voor Production, Preview, en Development
- [ ] Eerste deployment is succesvol
- [ ] Geen errors in build logs
- [ ] Website werkt correct

## 🆘 Troubleshooting

### "Repository not found"
- Check of je ingelogd bent met het juiste GitHub account
- Verifieer dat repository `rivaldorose/konsensi-website` bestaat
- Check GitHub permissions in Vercel

### "Build failed"
- Check build logs voor specifieke errors
- Verifieer dat `package.json` correct is
- Check of alle dependencies kunnen worden geïnstalleerd

### "Environment variables not found"
- Verifieer dat variables zijn toegevoegd **VOORDAT** deployment
- Check of namen exact overeenkomen (case-sensitive)
- Redeploy na het toevoegen van variables

### Website werkt maar Supabase errors
- Check of Supabase credentials correct zijn
- Verifieer dat Supabase project actief is
- Check CORS settings in Supabase

## 🎉 Na Succesvolle Deployment

Na een succesvolle deployment:

1. **Automatische Deployments:**
   - Elke push naar `main` branch → Production deployment
   - Pull requests → Preview deployment

2. **Custom Domain (optioneel):**
   - Ga naar Settings → Domains
   - Voeg je custom domain toe
   - Volg DNS instructies

3. **Monitoring:**
   - Check Analytics tab voor traffic
   - Monitor Logs voor errors
   - Check Speed Insights voor performance

## 📚 Handige Links

- **Vercel Dashboard:** https://vercel.com/dashboard
- **GitHub Repository:** https://github.com/rivaldorose/konsensi-website
- **Supabase Dashboard:** https://app.supabase.com
- **Vercel Docs:** https://vercel.com/docs

## 💡 Belangrijkste Tip

**Voeg ALTIJD environment variables toe VOORDAT je de eerste deployment doet!**

Dit voorkomt errors en zorgt voor een soepele setup.

