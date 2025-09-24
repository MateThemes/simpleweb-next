# Vercel KV Setup für SEO-Audit System

## Was ist Vercel KV?

Vercel KV ist ein **Redis-kompatibler Key-Value Store** von Vercel, der perfekt für Serverless-Funktionen geeignet ist.

### Vorteile:
- ✅ **Schnell** - In-Memory Speicherung
- ✅ **Serverless-kompatibel** - Funktioniert perfekt mit Vercel Functions
- ✅ **Persistent** - Daten bleiben auch nach Server-Neustarts erhalten
- ✅ **Automatische Skalierung** - Keine Konfiguration nötig
- ✅ **Kostenlos** - 30.000 Requests/Monat + 256 MB Speicher

## Setup auf Vercel

### 1. Vercel KV Database erstellen

1. Gehe zu [Vercel Dashboard](https://vercel.com/dashboard)
2. Wähle dein Projekt `simpleweb-next`
3. Gehe zu **Storage** → **KV**
4. Klicke **Create Database**
5. Gib einen Namen ein: `seo-audit-kv`
6. Wähle **Free Tier** (30.000 Requests/Monat)

### 2. Environment Variables setzen

Nach der Erstellung werden automatisch diese Environment Variables erstellt:

```bash
KV_REST_API_URL=https://your-kv-url.upstash.io
KV_REST_API_TOKEN=your-token-here
KV_REST_API_READ_ONLY_TOKEN=your-readonly-token-here
```

**Diese werden automatisch in dein Vercel Projekt eingefügt!**

### 3. Deployment

Nach dem nächsten Deployment funktioniert das SEO-Audit System mit persistenter Speicherung:

```bash
git add .
git commit -m "Add Vercel KV for persistent audit storage"
git push origin staging
```

## Wie es funktioniert

### Speicherung:
- **Audit wird erstellt** → Gespeichert in Vercel KV mit 7-Tage Ablaufzeit
- **Automatische Bereinigung** → Vercel KV löscht abgelaufene Daten automatisch

### Abruf:
- **Audit-Link wird aufgerufen** → Daten werden aus Vercel KV geladen
- **Funktioniert auch nach Server-Neustart** → Daten sind persistent gespeichert

### Fallback-System:
1. **Vercel KV** (Production) - Primärer Speicher
2. **In-Memory Cache** (Fallback) - Für lokale Entwicklung
3. **Dateisystem** (Development) - Nur lokal verfügbar

## Kosten

### Free Tier (ausreichend für dein Projekt):
- **30.000 Requests/Monat** - Kostenlos
- **256 MB Speicher** - Kostenlos
- **Geschätzte Nutzung**: 100 Audits/Tag = 3.000 Requests/Monat = **Kostenlos**

### Pro Plan (falls nötig):
- **$0.20 pro 100.000 Requests**
- **$0.15 pro GB/Monat**
- **Bei 1.000 Audits/Tag**: ~$2/Monat

## Monitoring

Du kannst die Nutzung in deinem Vercel Dashboard unter **Storage** → **KV** → **Metrics** überwachen.

## Vorteile für dein SEO-Audit System

1. **Keine 404-Fehler mehr** - Audit-Links funktionieren auch nach Server-Neustart
2. **Automatische Bereinigung** - Abgelaufene Audits werden automatisch gelöscht
3. **Schnelle Performance** - In-Memory Speicherung für schnelle Zugriffe
4. **Skalierbar** - Automatische Skalierung bei hoher Nutzung
5. **Kostenlos** - Für deine erwartete Nutzung völlig kostenlos

## Nächste Schritte

1. **Vercel KV Database erstellen** (siehe oben)
2. **Deployment durchführen**
3. **Testen** - Erstelle einen Audit und teste den Link
4. **Überwachen** - Schaue dir die Metrics im Vercel Dashboard an

Das System ist jetzt vollständig produktionsreif! 🚀
