# INLINE AD — deployment status

Last checked: 2026-05-26

| Item | Status | Notes |
|------|--------|-------|
| GitHub repo | **Done** | https://github.com/Dr-kersho/inlinead-website |
| Landing page code | **Done** | EN/AR, dual forms, no pricing |
| Portfolio registry | **Done** | `apexyard.projects.yaml` → `inlinead-website` |
| Supabase `001_leads.sql` | **Not verified** | Run in SQL Editor |
| Supabase `002_leads_anon_insert.sql` | **Not verified** | Required for GitHub Pages forms |
| `config.js` with anon key | **Not done** | Copy from `config.example.js` |
| Netlify site | **Not done** | CLI not logged in; no site linked |
| Netlify env vars | **Not done** | `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` |
| GitHub Pages | **Pending** | Enable in repo Settings after push of workflow |
| WhatsApp number | **Not done** | `index.html` → `whatsappNumber` |
| Live form test | **Blocked** | Needs Supabase + hosting |

## Fastest path to live (no Netlify CLI)

1. Supabase: run `001` + `002` migrations.
2. Copy `config.example.js` → `config.js`, add **Project URL** + **anon** key.
3. GitHub repo → **Settings → Pages → Source: GitHub Actions**.
4. Push latest `main` → site at `https://dr-kersho.github.io/inlinead-website/`.

## Preferred production path

Netlify import from GitHub + service-role env vars (keeps secret off the browser).

See [DEPLOY-ASSIST.md](./DEPLOY-ASSIST.md).
