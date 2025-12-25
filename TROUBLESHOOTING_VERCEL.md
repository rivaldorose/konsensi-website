# Troubleshooting Vercel Environment Variables

## ❌ Foutmelding blijft bestaan

Als je nog steeds deze fout krijgt:
```
Environment Variable "VITE_SUPABASE_URL" references Secret "supabase_url", which does not exist.
```

## 🔍 Stap-voor-stap Oplossing

### Stap 1: Verifieer vercel.json

De `vercel.json` moet **GEEN** `env` sectie hebben met `@` references.

**Correcte vercel.json:**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**Foutieve vercel.json (heeft dit NIET):**
```json
{
  "env": {
    "VITE_SUPABASE_URL": "@supabase_url",  // ❌ VERWIJDER DIT
    "VITE_SUPABASE_ANON_KEY": "@supabase_anon_key"  // ❌ VERWIJDER DIT
  }
}
```

### Stap 2: Verifieer Environment Variables in Vercel

1. Ga naar: **Vercel Dashboard** → **Je Project** → **Settings** → **Environment Variables**

2. Check of deze **exact** bestaan:
   - ✅ `VITE_SUPABASE_URL` (met VITE_ prefix!)
   - ✅ `VITE_SUPABASE_ANON_KEY` (met VITE_ prefix!)

3. Check of ze zijn ingesteld voor **alle environments**:
   - ✅ Production
   - ✅ Preview  
   - ✅ Development

### Stap 3: Verwijder Oude Deployment Cache

1. Ga naar **Deployments** tab
2. Klik op de **3 dots (⋯)** bij de laatste deployment
3. Klik op **"Cancel"** als deze nog bezig is
4. Klik op **"Redeploy"** bij een oude deployment

### Stap 4: Forceer Nieuwe Deployment

**Optie A: Via GitHub Push**
```bash
cd "/Users/rivaldomacandrew/Desktop/konsensi apps/konsensi-8f180590"
# Maak een kleine wijziging
echo "# Updated" >> README.md
git add README.md
git commit -m "Trigger redeploy"
git push
```

**Optie B: Via Vercel Dashboard**
1. Ga naar **Deployments**
2. Klik op **"Redeploy"** bij de laatste deployment
3. Selecteer **"Use existing Build Cache"** = **OFF**
4. Klik **"Redeploy"**

### Stap 5: Check Build Logs

1. Ga naar **Deployments** → **Klik op de deployment**
2. Scroll naar **"Build Logs"**
3. Zoek naar errors over environment variables
4. Check of de variables worden gelezen

## 🔧 Alternatieve Oplossingen

### Oplossing 1: Verwijder vercel.json Tijdelijk

Als niets werkt, verwijder tijdelijk de `env` sectie volledig:

1. Verwijder `vercel.json` tijdelijk
2. Voeg environment variables toe in Vercel dashboard
3. Deploy opnieuw
4. Vercel detecteert automatisch Vite configuratie

### Oplossing 2: Gebruik Vercel CLI

```bash
# Installeer Vercel CLI
npm i -g vercel

# Login
vercel login

# Link project
cd "/Users/rivaldomacandrew/Desktop/konsensi apps/konsensi-8f180590"
vercel link

# Set environment variables
vercel env add VITE_SUPABASE_URL
vercel env add VITE_SUPABASE_ANON_KEY

# Deploy
vercel --prod
```

### Oplossing 3: Check Project Settings

1. Ga naar **Settings** → **General**
2. Check **"Build & Development Settings"**
3. Verifieer:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

## 🐛 Veelvoorkomende Problemen

### Probleem 1: Variables Bestaan Maar Werken Niet
**Oplossing:** 
- Check of namen **exact** overeenkomen (case-sensitive!)
- Verifieer dat ze voor **alle environments** zijn ingesteld
- Redeploy na het toevoegen

### Probleem 2: Oude Configuratie in Cache
**Oplossing:**
- Forceer nieuwe deployment zonder cache
- Verwijder `.vercel` folder lokaal (als die bestaat)
- Push nieuwe commit naar GitHub

### Probleem 3: vercel.json Wordt Niet Gelezen
**Oplossing:**
- Check of `vercel.json` in de **root** van je project staat
- Verifieer dat het bestand correct JSON is (geen syntax errors)
- Check of het bestand is gecommit en gepusht naar GitHub

## ✅ Verificatie Checklist

- [ ] `vercel.json` heeft GEEN `env` sectie met `@` references
- [ ] Environment variables bestaan in Vercel dashboard
- [ ] Variables hebben exacte namen: `VITE_SUPABASE_URL` en `VITE_SUPABASE_ANON_KEY`
- [ ] Variables zijn ingesteld voor Production, Preview, en Development
- [ ] Nieuwe deployment is getriggerd
- [ ] Build logs tonen geen errors over missing secrets
- [ ] Website werkt zonder errors

## 🆘 Als Niets Werkt

1. **Verwijder project uit Vercel** (Settings → Danger Zone → Delete Project)
2. **Import opnieuw** vanuit GitHub
3. **Voeg environment variables toe** voordat je de eerste deployment doet
4. **Deploy**

Dit reset alle configuratie en start opnieuw.

