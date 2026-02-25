# SEO-Audit-System

## Übersicht

Tool zur Lead-Generierung mit SEO-Analyse, Performance-Scores und DSGVO-konformer E-Mail-Integration. Nutzer können eine URL prüfen lassen und optional E-Mail-Ergebnis + Newsletter-Anmeldung.

---

## Features

### SEO-Analyse (On-Page)

- Titel-Tag, Meta-Description (120–160 Zeichen), H1-Anzahl
- Bilder ohne Alt-Text, Canonical-URL, Open Graph, JSON-LD Schema
- Robots.txt & Sitemap, Meta Robots Noindex

### Performance-Scores

- Google PageSpeed Insights (Mobile & Desktop), sofern API-Key gesetzt
- Lighthouse: Performance, SEO, Accessibility, Best Practices
- Gesamtbewertung (Durchschnitt)

### Lead-Generation & DSGVO

- E-Mail-Versand mit Resend (Ergebnis + Empfehlungen)
- Optionale Newsletter-Einwilligung, eindeutige Lead-ID für CRM
- Keine permanente DB-Speicherung; Logs (z. B. 30 Tage)

---

## Technik

### Dateien

```
src/app/api/audit/route.ts       # API-Endpoint
src/app/seo-audit/page.tsx      # UI
src/app/seo-audit/_types.ts     # Typen
src/app/emails/AuditResult.tsx  # E-Mail-Template
src/app/admin/seo-logs/page.tsx # Log-Viewer (Admin)
```

### Dependencies

```bash
pnpm add cheerio resend @react-email/components
```

### Environment Variables

```bash
# .env.local
GOOGLE_PSI_KEY=...              # Optional – für echte PageSpeed-Daten
RESEND_API_KEY=...               # Bereits für Kontaktformular genutzt
RESEND_FROM="SimpleWebDesign <no-reply@simplewebdesign.at>"  # Optional
RESEND_BCC="gerald@simplewebdesign.at"                         # Optional
```

Ohne `GOOGLE_PSI_KEY`: System läuft mit Mock-Performance-Daten; On-Page-Checks und E-Mail funktionieren normal.

---

## API

### POST /api/audit

**Body (JSON):**

```json
{
  "url": "https://example.com",
  "email": "test@example.com",
  "consent": true,
  "newsletterConsent": false
}
```

`email` und `newsletterConsent` optional; bei E-Mail-Versand ist `consent` erforderlich.

**Response:** Enthält `summary` (Scores), `onPage` (SEO-Checks), `crawlability`, `mailSent`, ggf. `leadId`.

### Rate Limiting & Sicherheit

- 8 Requests / 10 Min. / IP
- Nur HTTPS-URLs, keine privaten IPs
- Timeout-Schutz (z. B. 15 s externe Requests)

---

## Logs & Admin

- **Admin-UI:** `/admin/seo-logs` (Login siehe [Admin & Security](./ADMIN_SECURITY.md))
- **Log-Dateien:** z. B. `logs/seo-audit-YYYY-MM-DD.log` (JSON-Zeilen)
- **Vercel:** Dashboard → Functions → Logs für `/api/audit`

Lead-ID-Format: `audit_{timestamp}_{random}` für CRM-Anbindung.

---

## Testing

```bash
pnpm dev
# UI: http://localhost:3000/seo-audit

curl -X POST http://localhost:3000/api/audit \
  -H "Content-Type: application/json" \
  -d '{"url":"https://example.com","email":"test@example.com","consent":true}'
```

---

## Deployment

- Env-Variablen auf Vercel setzen (siehe oben)
- Resend für E-Mail bereits voraussetzbar; Google PSI optional
