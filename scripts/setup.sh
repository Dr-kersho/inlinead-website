#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
echo "INLINE AD setup — see docs/DEPLOY-CHECKLIST.md"
if ! gh auth status -h github.com &>/dev/null; then echo "Run: gh auth login"; exit 1; fi
if ! gh repo view Dr-kersho/inlinead-website &>/dev/null 2>&1; then
  gh repo create Dr-kersho/inlinead-website --public --source=. --remote=origin --description "INLINE AD marketing site"
fi
git push -u origin main
npm install
echo "Next: npx netlify login && npx netlify init"
echo "Supabase SQL: supabase/migrations/001_leads.sql"
