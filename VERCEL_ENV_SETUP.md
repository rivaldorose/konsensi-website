# Vercel Environment Variables Setup

## 🔧 Probleem Oplossen

Als je de foutmelding krijgt:
```
Environment Variable "VITE_SUPABASE_URL" references Secret "supabase_url", which does not exist.
```

Dit betekent dat `vercel.json` naar secrets verwijst die niet bestaan.

## ✅ Oplossing

De `vercel.json` is aangepast om **geen secrets** meer te gebruiken. Environment variables worden nu direct uit het Vercel dashboard gelezen.

### Stap 1: Environment Variables Toevoegen in Vercel

1. Ga naar je Vercel project dashboard
2. Klik op **"Settings"** → **"Environment Variables"**
3. Voeg de volgende variables toe:

   **Variable 1:**
   - **Name:** `VITE_SUPABASE_URL`
   - **Value:** (je Supabase project URL)
   - **Environments:** ✅ Production, ✅ Preview, ✅ Development

   **Variable 2:**
   - **Name:** `VITE_SUPABASE_ANON_KEY`
   - **Value:** (je Supabase anon key)
   - **Environments:** ✅ Production, ✅ Preview, ✅ Development

4. Klik op **"Save"** voor elke variable

### Stap 2: Waar Vind Je Supabase Credentials?

1. Ga naar: https://app.supabase.com
2. Selecteer je project
3. Ga naar **"Settings"** → **"API"**
4. Kopieer:
   - **Project URL** → `VITE_SUPABASE_URL`
   - **anon/public key** → `VITE_SUPABASE_ANON_KEY`

### Stap 3: Redeploy

Na het toevoegen van de environment variables:

1. Ga naar **"Deployments"** tab in Vercel
2. Klik op de 3 dots (⋯) bij de laatste deployment
3. Klik op **"Redeploy"**
4. Of push een nieuwe commit naar GitHub (automatische redeploy)

## 📝 Verificatie

Na de redeploy zou je website moeten werken zonder errors. Check de build logs in Vercel om te verifiëren dat de variables correct worden gelezen.

## 🔄 Alternatief: Secrets Gebruiken (Geavanceerd)

Als je **wel** secrets wilt gebruiken in plaats van directe environment variables:

1. Ga naar Vercel project → **Settings** → **Environment Variables**
2. Klik op **"Add"** → **"Secret"**
3. Maak secrets aan met namen:
   - `supabase_url` (zonder VITE_ prefix)
   - `supabase_anon_key` (zonder VITE_ prefix)
4. Herstel de `vercel.json` naar de originele versie met `@` syntax

**Maar dit is niet nodig!** De huidige setup (directe environment variables) is eenvoudiger en werkt prima.

## 🆘 Troubleshooting

### Variables worden niet gelezen?
- Controleer of de namen **exact** overeenkomen: `VITE_SUPABASE_URL` en `VITE_SUPABASE_ANON_KEY`
- Verifieer dat variables zijn ingesteld voor **alle environments**
- Herstart deployment na het toevoegen van variables

### Build faalt nog steeds?
- Check de build logs in Vercel dashboard
- Verifieer dat Supabase credentials correct zijn
- Test lokaal met `.env` bestand eerst

### Lokaal testen?
Maak een `.env` bestand in de root:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

