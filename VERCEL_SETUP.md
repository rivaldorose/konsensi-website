# Vercel Deployment Setup voor Konsensi Website

Deze guide helpt je bij het deployen van de Konsensi Website naar Vercel.

## Stap 1: Vercel Account Aanmaken

1. Ga naar [vercel.com](https://vercel.com)
2. Klik op **Sign Up**
3. Log in met je GitHub account (aanbevolen voor automatische deployments)

## Stap 2: Project Importeren

1. In je Vercel dashboard, klik op **Add New Project**
2. Selecteer je GitHub repository (`konsensi-website`)
3. Vercel detecteert automatisch dat het een Vite project is

## Stap 3: Project Configuratie

Vercel detecteert automatisch de volgende instellingen:
- **Framework Preset**: Vite
- **Root Directory**: `./` (root)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

Als deze niet automatisch worden gedetecteerd, stel ze handmatig in.

## Stap 4: Environment Variables Toevoegen

Voeg de volgende environment variables toe in Vercel:

1. Klik op **Environment Variables** tijdens de project setup
2. Of ga later naar: Project Settings > Environment Variables

Voeg toe:

| Variable Name | Value | Environment |
|--------------|-------|-------------|
| `VITE_SUPABASE_URL` | Je Supabase project URL | Production, Preview, Development |
| `VITE_SUPABASE_ANON_KEY` | Je Supabase anon key | Production, Preview, Development |

**Hoe krijg je deze waarden?**
1. Ga naar je [Supabase Dashboard](https://supabase.com/dashboard)
2. Selecteer je project
3. Ga naar **Settings** > **API**
4. Kopieer:
   - **Project URL** → `VITE_SUPABASE_URL`
   - **anon public** key → `VITE_SUPABASE_ANON_KEY`

## Stap 5: Deployment

1. Klik op **Deploy**
2. Wacht tot de build klaar is (duurt meestal 1-2 minuten)
3. Je krijgt een URL zoals: `https://konsensi-website.vercel.app`

## Stap 6: Custom Domain (Aanbevolen)

1. Ga naar **Settings** > **Domains**
2. Voeg je custom domain toe (bijv. `konsensi.com` of `www.konsensi.com`)
3. Volg de DNS instructies om je domain te verifiëren
4. Vercel configureert automatisch SSL certificaten

## Stap 7: Automatische Deployments

Na het koppelen aan GitHub, worden deployments automatisch getriggerd bij:
- Elke push naar `main` branch → **Production deployment**
- Elke pull request → **Preview deployment**
- Elke push naar andere branches → **Preview deployment**

## Stap 8: Vercel Project ID Ophalen

Voor GitHub Actions deployment:

1. Ga naar je project in Vercel
2. Ga naar **Settings** > **General**
3. Kopieer de **Project ID**
4. Voeg deze toe als `VERCEL_PROJECT_ID` secret in GitHub

## Website vs App

**Belangrijk**: Deze website is een **statische marketing website**, niet een web app. Het gebruikt Supabase voor:
- Contactformulieren
- Newsletter subscriptions
- Blog content management
- Analytics

Maar het is **niet** een Progressive Web App (PWA) of web applicatie zoals de konsensi-app.

## Performance Optimalisatie

Vercel optimaliseert automatisch:
- ✅ Automatic code splitting
- ✅ Edge caching
- ✅ CDN distribution
- ✅ Image optimization
- ✅ Automatic HTTPS

## Troubleshooting

### Probleem: "Build failed"
**Oplossing**: 
- Check de build logs in Vercel dashboard
- Test lokaal met `npm run build`
- Controleer of alle dependencies correct zijn geïnstalleerd

### Probleem: "Missing environment variables"
**Oplossing**: 
- Controleer of `VITE_SUPABASE_URL` en `VITE_SUPABASE_ANON_KEY` zijn toegevoegd
- Zorg dat ze beschikbaar zijn voor Production, Preview, en Development

### Probleem: "404 Not Found" op routes
**Oplossing**: 
- Controleer of `vercel.json` correct is geconfigureerd met rewrites
- Vite SPA routes moeten worden gerouteerd naar `index.html`

## Volgende Stappen

Na succesvolle deployment:

1. ✅ Website is live op Vercel
2. ✅ Automatische deployments bij elke GitHub push
3. ✅ SSL certificaten automatisch geconfigureerd
4. ✅ Supabase is verbonden voor formulieren en content

Je kunt nu verdergaan met:
- [GitHub Setup](./GITHUB_SETUP.md)
