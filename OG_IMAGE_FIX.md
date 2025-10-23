# Open Graph Image URL Fix

## Problem

Die Open Graph (og:image) URLs wurden mit `localhost:3000` generiert, anstatt der Produktions-URL `https://simplewebdesign.at`.

## Ursache

Die `metadataBase` im `layout.tsx` verwendete als Fallback `http://localhost:3000`, und die Umgebungsvariable `NEXT_PUBLIC_SITE_URL` war nicht gesetzt.

## Lösung

### 1. Umgebungsvariable hinzugefügt

In `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://simplewebdesign.at
```

### 2. Fallback-URL korrigiert

In `src/app/layout.tsx`:
```typescript
metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://simplewebdesign.at'),
```

**Vorher:**
```typescript
metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
```

## Auswirkungen

Alle relativen Open Graph Image-URLs werden jetzt korrekt aufgelöst:
- `/img/og-image.jpg` → `https://simplewebdesign.at/img/og-image.jpg`
- `/img/services/seo.jpg` → `https://simplewebdesign.at/img/services/seo.jpg`
- etc.

## Betroffene Seiten

Alle Seiten mit Open Graph Metadata profitieren von dieser Änderung:

### Hauptseite
- **URL**: `/`
- **OG Image**: `/img/og-image.jpg`

### Service-Seiten
- SEO: `/img/services/seo.jpg`
- Marketing: `/img/services/marketing.jpg`
- Webdesign: `/img/services/webdesign.jpg`
- E-Commerce/Shopify: `/img/og-image.jpg`
- Hosting, Performance, Redesign, Wartung: individuelle Images

### Weitere Seiten
- Portfolio: `/img/portfolio/showcase.jpg`
- Blog-Posts: Dynamische Bilder basierend auf Post-Frontmatter
- Über uns, Prozess, Preise: individuelle Images

## Testing

### Open Graph Meta Tags prüfen

1. **Browser DevTools:**
```html
<meta property="og:image" content="https://simplewebdesign.at/img/og-image.jpg">
```

2. **Facebook Sharing Debugger:**
https://developers.facebook.com/tools/debug/

3. **LinkedIn Post Inspector:**
https://www.linkedin.com/post-inspector/

4. **Twitter Card Validator:**
https://cards-dev.twitter.com/validator

### Lokale Entwicklung

In der lokalen Entwicklung sollte die URL immer noch korrekt sein, da die `.env.local` jetzt die Produktions-URL enthält. Für komplett lokales Testing kann man temporär die URL ändern:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Deployment

### Vercel

In Vercel sind die Umgebungsvariablen wie folgt zu setzen:

**Settings → Environment Variables:**
```
NEXT_PUBLIC_SITE_URL=https://simplewebdesign.at
```

**Wichtig:** Nach dem Setzen der Variable muss ein neues Deployment ausgelöst werden.

### Andere Hosting-Plattformen

Stelle sicher, dass die Umgebungsvariable `NEXT_PUBLIC_SITE_URL` in der Produktionsumgebung gesetzt ist:

```bash
# Netlify
NEXT_PUBLIC_SITE_URL=https://simplewebdesign.at

# Railway
NEXT_PUBLIC_SITE_URL=https://simplewebdesign.at

# Docker
ENV NEXT_PUBLIC_SITE_URL=https://simplewebdesign.at
```

## Verifikation

Nach dem Deployment:

1. **Quellcode inspizieren**:
   - Öffne https://simplewebdesign.at
   - Rechtsklick → "Seitenquelltext anzeigen"
   - Suche nach `og:image`
   - Verifiziere, dass die URL `https://simplewebdesign.at` enthält

2. **Social Media Preview testen**:
   - Teile einen Link auf Facebook/LinkedIn/Twitter
   - Überprüfe, ob das richtige Bild angezeigt wird

3. **SEO-Tool verwenden**:
   - Nutze Tools wie Screaming Frog oder Sitebulb
   - Prüfe alle og:image Tags auf korrekte URLs

## Vorteile

✅ **Besseres Social Media Sharing**: Korrekte Bilder auf Facebook, LinkedIn, Twitter
✅ **SEO-Verbesserung**: Vollständige URLs sind besser für Suchmaschinen
✅ **Professionelles Erscheinungsbild**: Keine Localhost-URLs in Produktions-Metadata
✅ **Konsistenz**: Einheitliche URL-Basis für alle Seiten

## Wartung

Die `NEXT_PUBLIC_SITE_URL` sollte nur geändert werden wenn:
- Die Domain wechselt
- Eine Subdomain verwendet wird (z.B. `www.simplewebdesign.at`)
- Eine andere Haupt-URL für Staging/Testing benötigt wird

**Hinweis**: Bei Domain-Änderungen müssen auch die kanonischen URLs in den einzelnen Seiten-Metadaten aktualisiert werden.

---

## Zusammenfassung

**Behoben am**: 2025-01-24
**Betroffene Dateien**:
- `src/app/layout.tsx` (metadataBase Fallback)
- `.env.local` (NEXT_PUBLIC_SITE_URL hinzugefügt)

**Status**: ✅ Behoben und getestet

