# Supabase Backend Setup voor Konsensi Website

## ✅ Ja, je hebt een backend nodig!

De Konsensi website gebruikt **Supabase** als backend voor:

### 🔐 Authenticatie
- User login/registratie
- Admin toegang voor beheerpagina's
- Session management

### 💾 Database Tabellen
De website heeft de volgende database tabellen nodig:

1. **`users`** - Gebruikersprofielen
2. **`blogs`** - Blog artikelen
3. **`newsletters`** - Nieuwsbrief inschrijvingen
4. **`lessons`** - Budgetlessen
5. **`lesson_questions`** - Vragen bij lessen
6. **`user_lesson_progress`** - Voortgang van gebruikers
7. **`pilot_user_registrations`** - Pilot gebruikersregistraties
8. **`pilot_partner_registrations`** - Pilot partnerregistraties
9. **`pilot_partners`** - Pilot partners
10. **`pilot_downloads`** - Downloads voor pilot
11. **`updates`** - Updates/nieuws items

### 📁 File Storage
- Blog afbeeldingen
- Pilot downloads
- Andere media bestanden

### 📧 Email Functionaliteit
- Contactformulier emails
- Nieuwsbrief emails
- Notificaties

## 🚀 Supabase Setup Stappen

### 1. Supabase Project Aanmaken

1. Ga naar: https://app.supabase.com
2. Klik op "New Project"
3. Vul in:
   - **Name**: `konsensi-website`
   - **Database Password**: (kies een sterk wachtwoord)
   - **Region**: Kies dichtstbijzijnde (bijv. `West EU (Ireland)`)
4. Wacht tot project is aangemaakt (~2 minuten)

### 2. Database Schema Aanmaken

Je hebt een database schema nodig. Maak een nieuw SQL bestand aan of gebruik de Supabase SQL Editor:

```sql
-- Users table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS public.users (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT,
  role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Blogs table
CREATE TABLE IF NOT EXISTS public.blogs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  content TEXT,
  image_url TEXT,
  publish_date TIMESTAMP WITH TIME ZONE,
  is_featured BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Newsletters table
CREATE TABLE IF NOT EXISTS public.newsletters (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Lessons table
CREATE TABLE IF NOT EXISTS public.lessons (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  content TEXT,
  video_url TEXT,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Lesson questions table
CREATE TABLE IF NOT EXISTS public.lesson_questions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  lesson_id UUID REFERENCES public.lessons(id) ON DELETE CASCADE,
  question TEXT NOT NULL,
  answer TEXT,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User lesson progress
CREATE TABLE IF NOT EXISTS public.user_lesson_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  lesson_id UUID REFERENCES public.lessons(id) ON DELETE CASCADE,
  completed BOOLEAN DEFAULT false,
  progress_percentage INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, lesson_id)
);

-- Pilot user registrations
CREATE TABLE IF NOT EXISTS public.pilot_user_registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  naam TEXT NOT NULL,
  email TEXT NOT NULL,
  telefoon TEXT,
  opmerkingen TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Pilot partner registrations
CREATE TABLE IF NOT EXISTS public.pilot_partner_registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  organisatie_naam TEXT NOT NULL,
  contactpersoon TEXT NOT NULL,
  email TEXT NOT NULL,
  telefoon TEXT,
  opmerkingen TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Pilot partners
CREATE TABLE IF NOT EXISTS public.pilot_partners (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  naam TEXT NOT NULL,
  logo_url TEXT,
  website_url TEXT,
  description TEXT,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Pilot downloads
CREATE TABLE IF NOT EXISTS public.pilot_downloads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  file_url TEXT,
  file_type TEXT,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Updates table
CREATE TABLE IF NOT EXISTS public.updates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  content TEXT,
  image_url TEXT,
  publish_date TIMESTAMP WITH TIME ZONE,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletters ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lesson_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pilot_user_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pilot_partner_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pilot_partners ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pilot_downloads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.updates ENABLE ROW LEVEL SECURITY;

-- RLS Policies (aanpasbaar naar je behoeften)
-- Public read access voor blogs (published)
CREATE POLICY "Public blogs are viewable by everyone"
  ON public.blogs FOR SELECT
  USING (status = 'published');

-- Admin full access
CREATE POLICY "Admins have full access"
  ON public.blogs FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.users
      WHERE users.id = auth.uid()
      AND users.role = 'admin'
    )
  );

-- Similar policies voor andere tabellen...
-- (Je moet deze aanpassen naar je specifieke security requirements)
```

### 3. Storage Buckets Aanmaken

1. Ga naar: **Storage** in Supabase dashboard
2. Maak de volgende buckets aan:
   - `blog-images` (public)
   - `pilot-downloads` (public)
   - `attachments` (public, voor algemene uploads)

### 4. Environment Variables Ophalen

1. Ga naar: **Settings** → **API** in Supabase dashboard
2. Kopieer:
   - **Project URL** → `VITE_SUPABASE_URL`
   - **anon/public key** → `VITE_SUPABASE_ANON_KEY`

3. Voeg deze toe aan:
   - Lokaal `.env` bestand
   - Vercel environment variables
   - GitHub Secrets (voor CI/CD)

### 5. Email Functionaliteit (Optioneel maar Aanbevolen)

Het contactformulier heeft email functionaliteit nodig. Je hebt twee opties:

#### Optie A: Supabase Edge Function (Aanbevolen)

Maak een Supabase Edge Function voor email sending:

1. Installeer Supabase CLI: `npm install -g supabase`
2. Maak een Edge Function:
   ```bash
   supabase functions new send-email
   ```
3. Gebruik een email service zoals:
   - Resend
   - SendGrid
   - Mailgun
   - AWS SES

#### Optie B: Externe Service Direct

Gebruik een service zoals Resend of SendGrid direct vanuit de frontend (minder veilig).

### 6. Test de Setup

1. Test authenticatie:
   ```javascript
   // In browser console
   const { data, error } = await supabase.auth.signUp({
     email: 'test@example.com',
     password: 'test123456'
   })
   ```

2. Test database:
   ```javascript
   const { data, error } = await supabase
     .from('blogs')
     .select('*')
   ```

## 🔒 Security Best Practices

1. **Row Level Security (RLS)**: Zorg dat alle tabellen RLS enabled hebben
2. **Policies**: Schrijf specifieke policies voor elke tabel
3. **API Keys**: Gebruik alleen de `anon` key in de frontend
4. **Service Role Key**: NOOIT in frontend code, alleen voor server-side

## 📝 Checklist

- [ ] Supabase project aangemaakt
- [ ] Database schema uitgevoerd
- [ ] Storage buckets aangemaakt
- [ ] RLS policies geconfigureerd
- [ ] Environment variables ingesteld
- [ ] Test gebruiker aangemaakt
- [ ] Email functionaliteit geconfigureerd (optioneel)
- [ ] Environment variables toegevoegd aan Vercel

## 🆘 Troubleshooting

### "Missing Supabase environment variables"
- Controleer of `.env` bestand bestaat
- Verifieer dat variables beginnen met `VITE_`
- Herstart dev server na `.env` wijzigingen

### "Row Level Security policy violation"
- Check of RLS policies correct zijn ingesteld
- Verifieer of gebruiker is ingelogd (voor protected routes)

### Database connectie problemen
- Check Supabase project status
- Verifieer URL en API key
- Check CORS settings in Supabase

## 🔗 Handige Links

- **Supabase Dashboard**: https://app.supabase.com
- **Supabase Docs**: https://supabase.com/docs
- **RLS Guide**: https://supabase.com/docs/guides/auth/row-level-security
- **Edge Functions**: https://supabase.com/docs/guides/functions

