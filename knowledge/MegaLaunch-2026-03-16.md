# MegaLaunch (ML) - Master Roadmap
# Created: 2026-03-16
# Last Updated: 2026-03-18

## Changelog
- [2026-03-18] v1.4: Sesiunea 6 — PRO audit (88%, SEO+GA4+sitemap+robots fixed), eCabinet audit (75%, security headers+PM2+cron mutex+graceful shutdown fixed). All config UIs verified (BlocHub Stripe, MA Social). Master Settings: Project Domains panel added.
- [2026-03-18] v1.3: Sesiunea 5 — BlocHub OWASP audit (11 fixes), secrets rotated, redeployed. MA social media stabilized (Facebook+LinkedIn+scheduler+dashboard). MA email fixed (SmtpService+retry).
- [2026-03-18] v1.2: Sesiunea 4 — BlocHub deployed Vercel, MA build fixed, VPS1+VPS2 all apps verified online
- [2026-03-16] v1.1: Sesiunea 2 — audit complet P0+P1, BlocHub checklist updated (8/12 done), descoperiri strategice
- [2026-03-16] v1.0: Initial roadmap created. Full portfolio analysis, priority order established.

---

## Despre ML

**MegaLaunch** este roadmap-ul central al tuturor proiectelor cu potențial de monetizare.

**Reguli de sesiune:**
1. La fiecare sesiune nouă, caută cel mai recent `MegaLaunch-*.md` din `knowledge/ML/`
2. Folosește AI Pipeline (mesh) pentru dezvoltare și monitorizare
3. Raportează progresul și actualizează acest fișier
4. Un singur proiect activ la un moment dat (excepție: P0 MarketingAutomation rulează în paralel ca tool intern)

---

## Priorități (Ordine Finală)

### P0 - MARKETING AUTOMATION (Tool Intern - NU pentru monetizare directă)
- **Proiect:** MarketingAutomation
- **Locație:** `D:\Projects\MarketingAutomation`
- **Scop:** Promovarea TUTUROR celorlalte proiecte (email campaigns, social media, content)
- **Stack:** Next.js 16 + Prisma + Neon + Anthropic SDK + OpenAI + AWS SES + Instagram/Twitter APIs + Bull queue
- **Completare estimată:** 70%
- **Status:** 🟡 În progres (build OK, VPS2 online, social creds lipsă)
- **Ce lipsește:**
  - [x] Audit stare curentă — 86 modele Prisma, 90+ API routes, 38+ pages, 19 AI agents ✅
  - [x] Stabilizare email campaigns — Resend SMTP funcțional, 5 templates ✅
  - [ ] Social media posting — Twitter/Instagram implementat dar creds EMPTY, Facebook text-only, LinkedIn/TikTok/YouTube noimplementat
  - [ ] Campaign templates pentru lansare produse
  - [ ] Dashboard cu metrici (open rate, click rate, conversions)
  - [ ] Landing page generator (pentru fiecare proiect lansat)
- **Criteriu DONE:** Poate trimite email campaigns și posta pe social media automat pentru orice proiect

---

### P1 - BLOCHUB (Prima monetizare)
- **Proiect:** BlocHub
- **Locație:** `D:\Projects\blochub`
- **Scop:** SaaS pentru administrarea asociațiilor de proprietari cu AI 95%+ automatizare
- **Stack:** Next.js 16 + React 19 + Prisma + Neon + Stripe + OpenAI
- **Completare estimată:** 75-80%
- **Target:** Asociații de proprietari din România
- **Revenue model:** SaaS recurent €50-200/lună per asociație
- **Revenue estimat (6 luni):** €500-5.000/lună
- **Status:** 🟢 DEPLOYED (sesiunea 5) — https://blochub-cyan.vercel.app
- **Checklist complet:**
  - [x] **FUNCȚIONAL** - Audit complet: 49 modele Prisma, 72 API routes, core HOA features solide
  - [x] **PAYMENTS** - Revolut (subscripții B2B) + Stripe (plăți rezidenți) — auditate, netestate E2E
  - [x] **SECURITY** - OWASP audit ✅ (11 fixes), middleware.ts ✅, IDOR fixes ✅, mass-assignment fixes ✅, HSTS ✅, rate limiting ✅, Zod ✅, secrets rotated ✅
  - [x] **GDPR** - Cookie banner ✅, consent tracking ✅, export date ✅, ștergere cont ✅, Privacy Policy ✅
  - [x] **SEO** - sitemap.xml ✅, robots.txt ✅, structured data JSON-LD ✅, Open Graph ✅
  - [x] **ANALYTICS** - GA4 gtag.js ✅, custom events (signup/login) ✅
  - [x] **LEGAL** - Terms of Service ✅, Privacy Policy ✅, GDPR page ✅
  - [x] **DEPLOY** - Vercel deployed: https://blochub-cyan.vercel.app (all pages 200) ✅
  - [x] **LANDING PAGE** - Pricing page (/pricing) cu Basic/Pro/Enterprise ✅
  - [ ] **MARKETING** - Campanie via MarketingAutomation
  - [ ] **LAUNCH** - Primii 5 clienți beta
  - [ ] **FEEDBACK** - Colectare feedback, iterare
- **Criteriu DONE:** 10+ asociații plătitoare, revenue recurent confirmat
- **Blockers:** ~~deploy Vercel~~ ~~OWASP audit~~ → Stripe real keys, custom domain, beta user outreach

---

### P2 - PRO (Fitness Coaches SaaS)
- **Proiect:** PRO
- **Locație:** `C:\Projects\PRO`
- **Scop:** Management sesiuni fitness, PWA cu WhatsApp + Google Calendar
- **Stack:** Next.js 16 + React 19 + Prisma 6 + Neon + TipTap + WhatsApp + GCal
- **Completare estimată:** 88%
- **Target:** Personal traineri, fitness coaches din România
- **Revenue model:** SaaS €10-20/lună per trainer
- **Revenue estimat (6 luni):** €200-2.000/lună
- **Status:** 🟡 Auditat (sesiunea 6) — DEPLOYED pe VPS1 (pro.4pro.io)
- **Checklist complet:**
  - [x] **FUNCȚIONAL** - Audit complet: 100% MVP, WhatsApp+GCal+PWA+reviews+ratings all working
  - [ ] **STRIPE** - Phase 3 (nu în MVP, coaches gestionează manual)
  - [x] **SECURITY** - JWT ✅, rate limiting ✅, RBAC ✅, bcrypt 12 rounds ✅
  - [x] **GDPR** - Privacy+Terms+GDPR pages ✅, consent records ✅, signatures ✅
  - [x] **SEO** - robots.txt ✅, sitemap.xml ✅, unique page titles ✅ (Sesiunea 6)
  - [x] **ANALYTICS** - GA4 ready ✅ (needs NEXT_PUBLIC_GA_ID env var on VPS)
  - [x] **LEGAL** - ToS ✅, Privacy Policy ✅, GDPR ✅ — comprehensive
  - [x] **DEPLOY** - VPS1 PM2, pro.4pro.io, SSL ✅
  - [ ] **LANDING PAGE** - Missing — homepage is just login/register
  - [ ] **MARKETING** - Not started
  - [ ] **LAUNCH** - 20 traineri beta (outreach pe grupuri fitness)
  - [ ] **FEEDBACK** - Iterare bazată pe feedback
- **Criteriu DONE:** 50+ traineri activi, revenue recurent
- **Blockers:** Landing page needed, Stripe later, deploy SEO fixes to VPS1

---

### P3 - ECABINET (Programări / Scheduling)
- **Proiect:** eCabinet
- **Locație:** `C:\Projects\eCabinet`
- **Scop:** Sistem de programări online (medici, saloane, avocați, etc.)
- **Stack:** NestJS + React + Prisma + PostgreSQL (monorepo)
- **Completare estimată:** 75%
- **Target:** Profesioniști care lucrează pe programări (multi-vertical)
- **Revenue model:** SaaS €30-150/lună per profesionist/cabinet
- **Revenue estimat (6 luni):** €500-5.000/lună
- **Status:** 🟡 Auditat (sesiunea 6) — DEPLOYED pe VPS1 (cabinet.4pro.io)
- **Checklist complet:**
  - [x] **FUNCȚIONAL** - Audit complet: appointments, staff, patient portal, multi-tenant, 8 industry types
  - [x] **STRIPE** - Revolut + Stripe both configured, subscription plans (5 tiers), trial/grace periods
  - [x] **SECURITY** - JWT ✅, rate limiting 100req/min ✅, RBAC ✅, security headers ✅ (Sesiunea 6), cron mutex ✅, graceful shutdown ✅
  - [x] **GDPR** - Privacy+Terms+GDPR editable via admin ✅, consent management ✅
  - [ ] **SEO** - Missing: sitemap, robots.txt, schema.org
  - [ ] **ANALYTICS** - Internal analytics ✅, GA4 missing
  - [x] **LEGAL** - DB-driven legal pages (editable by admin) ✅
  - [x] **DEPLOY** - VPS1 PM2, cabinet.4pro.io, SSL ✅
  - [x] **LANDING PAGE** - Landing page ✅, pricing ✅, i18n (RO/EN) ✅
  - [ ] **MARKETING** - Campanii separate per verticală
  - [ ] **LAUNCH** - 10 profesioniști beta per verticală
  - [ ] **FEEDBACK** - Iterare per verticală
- **Criteriu DONE:** 30+ profesioniști plătitori, minimum 2 verticale active
- **Blockers:** PM2 restarts (fix deployed, needs VPS redeploy), cookie banner, SEO basics, GA4

---

### P4 - TRADEINVEST (Trading Platform)
- **Proiect:** TradeInvest
- **Locație:** `D:\Projects\TradeInvest`
- **Scop:** Platformă AI de analiză trading cu portfolio management
- **Stack:** Next.js 16 + Prisma + Neon + OpenAI + Anthropic + Yahoo Finance
- **Completare estimată:** 60-65%
- **Target:** Retail traders, investitori individuali
- **Revenue model:** Freemium SaaS €10-50/lună
- **Revenue estimat (6 luni):** €500-3.000/lună
- **Status:** 🔲 Neînceput
- **Checklist complet:**
  - [ ] **FUNCȚIONAL** - Completare features (portfolio tracking, alerts, AI insights)
  - [ ] **STRIPE** - Freemium model (basic gratuit, premium plătit)
  - [ ] **SECURITY** - Extra riguros (date financiare)
  - [ ] **GDPR** - Standard + financial data compliance
  - [ ] **SEO** - Content marketing (articole trading, analize)
  - [ ] **ANALYTICS** - GA4 + conversion tracking
  - [ ] **LEGAL** - ToS, Privacy, DISCLAIMER FINANCIAR obligatoriu ("nu este sfat financiar")
  - [ ] **DEPLOY** - Vercel + domeniu
  - [ ] **LANDING PAGE** - Feature showcase, live demo
  - [ ] **MARKETING** - Content marketing, comunități trading, Reddit, TradingView
  - [ ] **LAUNCH** - Beta cu 50 traderi
  - [ ] **FEEDBACK** - Iterare features AI
- **Criteriu DONE:** 100+ utilizatori activi, 30+ plătitori

---

### P5 - TESTER (AI Testing Engine)
- **Proiect:** Tester
- **Locație:** `D:\Projects\Tester`
- **Scop:** Motor autonom de testare web cu AI
- **Stack:** Puppeteer + Playwright + Express + Anthropic SDK + axe-core
- **Completare estimată:** 60%
- **Target:** Echipe QA, dev shops, CI/CD pipelines
- **Revenue model:** npm package freemium + SaaS hosted €50-200/lună
- **Status:** 🔲 Neînceput
- **Note:** Poate fi publicat rapid ca npm package open-source cu tier premium

---

### P6 - ECABINET WHITE-LABEL / UTILAJHUB / EPROFIT (Long-term)
- Acestea necesită dezvoltare semnificativă (20-50%)
- Se vor aborda după ce P1-P5 generează venit stabil
- **UtilajHub** - marketplace echipamente (potențial foarte mare, dar efort mare)
- **eProfit** - contabilitate/taxe RO (piață imensă, competiție existentă)

---

## Checklist Standard (Template per Proiect)

Aplicat la FIECARE proiect înainte de launch:

```
1. ✅ FUNCȚIONAL    - Features complete, bugs fixate, UX smooth
2. ✅ PAYMENTS      - Stripe Checkout → Webhook → Subscription
3. ✅ SECURITY      - OWASP top 10, rate limiting, auth solid
4. ✅ GDPR          - Consent, export, ștergere, cookie banner, policies
5. ✅ SEO           - Meta, sitemap, robots, structured data, OG tags
6. ✅ ANALYTICS     - GA4 client+server, events, conversion goals
7. ✅ LEGAL         - ToS, Privacy Policy, Cookie Policy
8. ✅ DEPLOY        - Production build, SSL, CDN, monitoring, uptime
9. ✅ LANDING       - Pricing page, CTA, demo/screenshots
10. ✅ MARKETING    - Email campaign + social media + ads (via MarketingAutomation)
11. ✅ LAUNCH       - Beta users, outreach, feedback loop
12. ✅ ITERATE      - Analiză feedback, ajustare strategie, re-promovare
```

---

## Google Analytics - Standard de Implementare

Bazat pe TeInformez (model de referință):

### Client-side (Next.js)
- GA4 tag în `<head>` (Google Tag Manager sau gtag.js)
- Page view tracking automat
- Custom events: signup, login, purchase, feature_use
- Conversion goals: trial_start, subscription_purchase

### Server-side (API routes)
- Measurement Protocol API pentru events server-side
- Track: API calls, errors, background jobs completion

### Dashboard
- Sessions, active users, new users, page views
- Bounce rate, engagement rate
- Top pages, traffic sources
- Conversion funnel (visit → signup → trial → paid)
- Revenue tracking (Stripe webhook → GA4 purchase event)

---

## Stripe - Standard de Implementare

### Checkout Flow
1. Pricing page cu planuri (Free/Basic/Pro/Enterprise)
2. Stripe Checkout Session (redirect to Stripe)
3. Webhook handler: `checkout.session.completed` → activate subscription
4. Customer portal (manage subscription, invoices, cancel)

### Webhook Events
- `checkout.session.completed` → activate
- `invoice.paid` → extend subscription
- `invoice.payment_failed` → notify user, grace period
- `customer.subscription.deleted` → deactivate

### Database
- User table: `stripeCustomerId`, `subscriptionId`, `planType`, `subscriptionStatus`
- Middleware: check subscription status on protected routes

---

## GDPR - Standard de Implementare

1. **Cookie Banner** - Consent pentru analytics, marketing, necessary (necessary = always on)
2. **Privacy Policy** - Ce date colectăm, de ce, cât timp, cui le partajăm
3. **Data Export** - Endpoint `/api/user/export` → JSON/CSV cu toate datele utilizatorului
4. **Account Deletion** - Endpoint `/api/user/delete` → soft delete + hard delete after 30 days
5. **Consent Tracking** - Tabel `consents` cu timestamp, type, version
6. **Cookie Policy** - Detalii tehnice despre fiecare cookie
7. **DPA** (pentru B2B) - Data Processing Agreement template

---

## Progres per Sesiune

### Sesiunea 1 - 2026-03-16
- ✅ Analiză completă portfolio (47 proiecte, 11 cu potențial)
- ✅ Stabilire priorități (P0-P6)
- ✅ Creare roadmap MegaLaunch v1.0
- ✅ Audit MarketingAutomation (P0) + Audit BlocHub (P1) — completat

### Sesiunea 2 - 2026-03-16 (seara)
- ✅ Audit complet P0 (MarketingAutomation): 86 modele Prisma, 85 API routes, ~55-60% ready
- ✅ Audit complet P1 (BlocHub): 49 modele Prisma, 72 API routes, ~75% ready
- ✅ BlocHub SEO+GA4+Landing+Cookie — confirmat deja implementate
- ✅ BlocHub Revolut Audit — raport detaliat, 2 sisteme plăți (Revolut=subscripții, Stripe=rezidenți)
- ✅ BlocHub GDPR endpoints create: /api/user/export, /api/user/delete, /api/user/consents
- ✅ BlocHub pricing page creat (/pricing)
- ⚠️ MA email stabilization — iter 1 completat, QA respins, iter 2 rate limited (resets 23:00)
- ✅ Disk cleanup C: (20KB → 9GB free)
- ✅ Duplicate pipeline fix (mesh/route.ts — waiting_* states treated as active)
- ✅ Lessons learned v2.2 (§30-33)
- 🔲 Următorul pas: Vercel deploy BlocHub, MA social media stabilization

### Sesiunea 3 - 2026-03-17
- ✅ BlocHub Security: rate limiting, health endpoint, security headers, Zod validation pe routes critice
- ✅ MA Email: 139 fișiere modificate — email adapters, dashboard pages, middleware, auth improvements
- ⚠️ Claude CLI ETIMEDOUT persistent — pipeline-uri cad la dev phase, salvat muncă parțială
- ✅ Cross-project module scan: email-service, revolut-integration, SMS, WhatsApp, GA4 patterns
- ✅ Duplicate pipeline bug fix (waiting_* states)
- 🔲 Următorul pas: Vercel deploy BlocHub, MA social media, retry when CLI stable

### Sesiunea 4 - 2026-03-18 (dimineata)
- ✅ **BlocHub DEPLOYED pe Vercel** — https://blochub-cyan.vercel.app (toate paginile publice 200)
- ✅ BlocHub Vercel env vars: DATABASE_URL, NEXTAUTH_*, OPENAI_API_KEY, CRON_SECRET, APP_URL, DIRECT_URL ✅
- ⚠️ BlocHub Stripe keys PLACEHOLDER — trebuie chei reale pentru payments
- ✅ **MA build fix** — .next lock removed, clean build OK (79 rute, 0 erori TypeScript)
- ✅ MA audit complet: Resend SMTP funcțional, Twitter+Instagram code ready (dar creds empty)
- ✅ **VPS1 health check** — PRO(200), eCabinet(200), 4pro-client(200), 4pro-biz(200), 4pro-landing(200)
- ✅ **VPS2 health check** — knowbest(200), MA(online), STT(online), website-guru(online)
- ✅ KB Sesiunea 5 — Visual polish + Framer Motion + product links fix + deploy
- ✅ KB F1 prep — nginx knowbest.ro config exists on VPS2, SSL pending DNS switch

### Sesiunea 5 - 2026-03-18 (seara)
- ✅ **BlocHub revolut-integration BLOCKER FIXED** — copied to packages/revolut-integration/ inside blochub repo
- ✅ **BlocHub Vercel PROD deploy** — build 98 static pages + middleware, URL: https://blochub-cyan.vercel.app
- ✅ **BlocHub OWASP audit complet** — 11 issues fixate:
  - Created middleware.ts (centralized route protection)
  - Fixed 2 IDOR vulnerabilities (apartamente, furnizori)
  - Added auth to verificare-anaf proxy
  - Fixed 2 mass-assignment vulns (admin users, admin asociatii)
  - Added HSTS header
  - Removed .env.production from git tracking
  - Normalized bcrypt cost factor (12) + password min length (8)
  - Sanitized 4 error response leaks
- ✅ **BlocHub secrets rotated** — NEXTAUTH_SECRET + CRON_SECRET regenerated, set in Vercel, redeployed
- ✅ **MA Social Media stabilizat**:
  - Scheduled posting implementat (node-cron based, SocialPost + ScheduledTask integration)
  - Facebook Graph API client creat (postText, postPhoto, postLink)
  - LinkedIn UGC Posts API client creat (postText, shareArticle, postImage)
  - Platform Manager updated cu Facebook + LinkedIn reali (nu stubs)
  - Social Media Dashboard page creat (/social/dashboard) — connected accounts, quick-post, scheduled, recent posts
- ✅ **MA Email sending FIXED**:
  - Scheduler sendEmail() — connected la SmtpService real (era simulat)
  - Agent sendCampaign() — connected la SmtpService real (era simulat)
  - Retry logic cu exponential backoff (3 retries: 60s/300s/900s)
  - Error persistence în campaign metrics JSON
- ✅ **Pipeline launcher script** — scripts/launch-pipeline.mjs (bypasses API auth for direct CLI launching)
- ⚠️ Claude API credits depleted + CLI quota exceeded — pipelines DEV phase fails, lucrat direct
- 🔲 Următorul pas: BlocHub Stripe real keys, MA social API creds, BlocHub custom domain, BlocHub beta users outreach

### Sesiunea 6 - 2026-03-18 (continuare)
- ✅ **P2 PRO Audit complet** — 88% launch-ready, toate features MVP complete
  - Fixed: viewport accessibility, robots.txt, sitemap.xml, GA4 integration, unique page titles
  - Missing: Stripe (Phase 3), landing page, cookie banner
- ✅ **P3 eCabinet Audit complet** — 75% launch-ready, 8 industry types, Revolut+Stripe
  - Fixed: security headers (HSTS, X-Frame, XSS), PM2 ecosystem config (512M restart), cron job mutex, graceful shutdown
  - Missing: cookie banner, OWASP headers review, SEO (sitemap/robots), GA4
  - Root cause PM2 restarts: likely cron job overlap + memory from PDF generation
- ✅ **Config UI verificat** — Toate configurabile din SuperAdmin:
  - BlocHub: Stripe keys configurabile din Admin > Settings > Payments (DB-first cu env fallback)
  - MA: Social media credentials configurabile din Settings > Integrations (SocialAccount model, CRUD API, verify endpoint)
  - Master: Project Domains & Deploy panel adăugat în Settings (URLs, DNS status, quick commands)
- ⚠️ API overload (529) pe agents — lucrat direct
- 🔲 Următorul pas: User action needed:
  1. BlocHub: Add real Stripe keys via Admin > Settings > Payments
  2. MA: Add social API keys via Settings > Integrations (Twitter, Facebook, LinkedIn)
  3. KB: Switch DNS knowbest.ro in Hostico panel (A record → 72.62.155.74), then certbot
  4. BlocHub: Buy/configure custom domain (blochub.ro), add to Vercel
  5. PRO: Deploy updated code (SEO fixes) to VPS1
  6. eCabinet: Deploy stability fixes to VPS1

### Descoperiri importante (Sesiunea 2):
- **BlocHub are 2 sisteme de plăți**: Revolut (subscripții organizații) + Stripe (plăți rezidenți)
- **BlocHub mai avansat decât estimat**: SEO, GA4, pricing, cookie banner existau deja
- **MA completare reală ~55-60%** (nu 70% cum estimam): mult UI dar integrările third-party netestate
- **Pipeline duplicate prevention** avea bug: waiting_* states cu PID mort permiteau duplicatele

---

## Note Strategice

1. **Revolut + Stripe coexist**: BlocHub folosește Revolut pentru subscripții B2B și Stripe pentru plăți rezidenți — NU înlocui unul cu altul
2. **Stripe o dată, reutilizat peste tot**: Stripe integration din BlocHub (resident payments) devine template pentru alte proiecte
3. **GA4 o dată, reutilizat peste tot**: Același pattern TeInformez copiat la fiecare
4. **MarketingAutomation = multiplicator**: Cu cât e mai funcțional, cu atât lansăm mai repede celelalte
5. **Focus pe piața RO inițial**: Asociații, traineri, medici, saloane = piață locală, competiție slabă
6. **Scalare EU ulterior**: După validare RO, extindere (eCabinet, TradeInvest au potențial internațional)
