# Admin & Security

## Übersicht

Das Admin-System (z. B. `/admin/seo-logs`) nutzt **server-seitige Passwort-Validierung** und **Session-basierte Authentifizierung** mit automatischem Ablauf. Keine Passwörter im Code – Konfiguration über Environment Variables.

---

## Sicherheits-Architektur

- **Server-seitige Validierung**: Passwörter werden nur auf dem Server geprüft
- **Environment Variables**: Alle Passwörter in `.env.local` (lokal) bzw. Vercel Environment Variables (Produktion)
- **Session-Tokens**: 2-Stunden-Ablaufzeit, keine Passwörter im Browser
- **Notfall-Passwörter**: Bis zu 3 Emergency-Passwörter für Zugang bei vergessenem Hauptpasswort

```
Client → Login → /api/admin/auth → Server prüft Env Vars → Session-Token → Response
```

---

## Setup

### Lokale Entwicklung

`.env.local` im Projekt-Root (nicht im Git):

```bash
ADMIN_PASSWORD=dein_hauptpasswort_hier
EMERGENCY_PASSWORD_1=notfall_passwort_1
EMERGENCY_PASSWORD_2=notfall_passwort_2
EMERGENCY_PASSWORD_3=notfall_passwort_3
```

Ohne gesetzte Variablen: Standard-Passwort `admin123` (nur für lokale Tests).

### Produktion (Vercel)

Vercel Dashboard → Projekt → **Settings** → **Environment Variables**:

| Name | Beschreibung |
|------|--------------|
| `ADMIN_PASSWORD` | Hauptpasswort für Admin-Login |
| `EMERGENCY_PASSWORD_1` | Notfall-Zugang 1 |
| `EMERGENCY_PASSWORD_2` | Notfall-Zugang 2 |
| `EMERGENCY_PASSWORD_3` | Notfall-Zugang 3 |

Per CLI: `vercel env add ADMIN_PASSWORD` (usw.)

---

## Passwort-Reset / Notfall-Zugang

**Hauptpasswort vergessen:**

1. **Notfall-Passwort** verwenden (EMERGENCY_PASSWORD_1/2/3)
2. Anschließend neues Hauptpasswort setzen (über Env-Variable)
3. Notfall-Passwörter rotieren

**Env-Variable ändern:**

- **Lokal:** `.env.local` anpassen → Dev-Server neu starten (`pnpm dev`)
- **Vercel:** Dashboard → Environment Variables → Wert ändern → Redeploy

**Browser-LocalStorage (nur Session-Cleanup):**

```javascript
localStorage.removeItem('admin-authenticated');
localStorage.removeItem('admin-session-token');
localStorage.removeItem('admin-session-expires');
```

---

## Passwort-Empfehlungen

- Mindestens 8 Zeichen, Groß-/Kleinbuchstaben, Zahlen, Sonderzeichen
- Keine Wörterbuch-Wörter
- Rotation alle 3–6 Monate
- Notfall-Passwörter nur im Notfall nutzen und danach wechseln

Beispiel (nur Muster): `SimpleWeb2025!@#`, `Emergency2025!Backup1`

---

## Dateien

- `src/app/admin/seo-logs/page.tsx` – Admin-UI
- `src/app/admin/layout.tsx` – Admin-Layout
- `src/app/api/admin/auth/route.ts` – Passwort-Validierung & Session

`.env.local` steht in `.gitignore` und wird nicht ins Repo committed.

---

## Checkliste vor Deployment

- [ ] Keine Passwörter im Code
- [ ] `.env.local` in `.gitignore`
- [ ] Vercel Environment Variables gesetzt
- [ ] Notfall-Zugang getestet
- [ ] Starke Passwörter verwendet
