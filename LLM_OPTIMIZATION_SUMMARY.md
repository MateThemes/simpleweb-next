# LLM/KI-Lesbarkeits-Optimierung – Zusammenfassung

**Datum:** 3. Januar 2026  
**Optimierte Seiten:** `/` (Startseite), `/ueber-uns`, `/kontakt`

## Ziel der Optimierung

Verbesserung der Lesbarkeit für KI/LLMs, ohne den bestehenden Stil oder das Layout zu verändern. Keine erfundenen Daten, nur strukturelle und inhaltliche Ergänzungen für bessere Verständlichkeit.

---

## 1. Kurzfassungs-Blöcke (LLM-friendly Summary)

Auf jeder der 3 Seiten wurde direkt unter dem H1 ein kurzer Summary-Block eingefügt (max. 2 Sätze). Diese Blöcke helfen KIs, den Kern der Seite sofort zu erfassen.

### Startseite (/)
**Datei:** `src/components/sections/ModernHero.tsx`

```html
<div className="text-lg text-slate-700 dark:text-slate-300 ... bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-4 rounded-lg border ...">
  <p>
    SimpleWebDesign baut Websites für KMU in Österreich und Deutschland, die nicht nur gut aussehen, 
    sondern messbare Ergebnisse bringen. Wir schaffen Klarheit, Struktur und Orientierung – 
    damit Besucher zu Anfragen werden.
  </p>
</div>
```

**Ton:** Ruhig, sachlich, keine Buzzwords.

### Über uns (/ueber-uns)
**Datei:** `src/app/(routes)/ueber-uns/page.tsx`

```html
<div className="mt-6 text-lg text-neutral-700 dark:text-neutral-300 ... bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg border ...">
  <p>
    Gerald Schandl betreibt SimpleWebDesign und baut Websites für KMU, die nicht nur gut aussehen, 
    sondern messbare Anfragen bringen. Fokus auf Klarheit, Struktur und ehrliche Beratung – 
    ohne Agentur-Sprech.
  </p>
</div>
```

### Kontakt (/kontakt)
**Datei:** `src/app/(routes)/kontakt/page.tsx`

```html
<div className="mt-6 text-lg text-neutral-700 dark:text-neutral-300 ... bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg border ...">
  <p>
    Kontaktiere SimpleWebDesign für eine ehrliche Einschätzung deines Website-Projekts. 
    Beratung für KMU in Österreich & Deutschland – ohne Verkaufsgespräch, ohne Verpflichtung.
  </p>
</div>
```

---

## 2. Structured Data (JSON-LD)

Saubere, präzise JSON-LD Implementierung für bessere Verständlichkeit durch Suchmaschinen und KIs.

### Global (bereits vorhanden in layout.tsx)
Keine Änderungen nötig – bereits korrekt implementiert.

### Startseite (/)
**Datei:** `src/app/page.tsx`

**Ergänzt:**
- ✅ WebSite Schema (bereits vorhanden)
- ✅ Organization Schema (bereits vorhanden)
- ✅ ProfessionalService Schema (bereits vorhanden)
- ✅ WebPage Schema (bereits vorhanden)
- ✅ Breadcrumb Schema (bereits vorhanden)
- ✅ **NEU:** FAQPage Schema für die neue FAQ-Sektion

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Warum bringt meine Website keine Anfragen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Meist fehlt Klarheit: Besucher verstehen nicht sofort, wer hier richtig ist und warum..."
      }
    }
    // ... 5 weitere FAQs
  ]
}
```

### Über uns (/ueber-uns)
**Datei:** `src/app/(routes)/ueber-uns/page.tsx`

**Implementiert:**

1. **AboutPage Schema** (NEU):
```json
{
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "Über SimpleWebDesign",
  "description": "Gerald Schandl betreibt SimpleWebDesign und baut Websites für KMU...",
  "url": "https://simplewebdesign.at/ueber-uns",
  "mainEntity": {
    "@type": "Person",
    "name": "Gerald Schandl",
    "jobTitle": "Webdesigner & Gründer",
    "knowsAbout": [
      "Webdesign",
      "User Experience (UX)",
      "Conversion-Optimierung",
      "SEO Grundlagen",
      "Website-Struktur",
      "Online Marketing für KMU"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "SimpleWebDesign",
      "url": "https://simplewebdesign.at",
      ...
    }
  }
}
```

2. **Organization Schema** (bereits vorhanden, erweitert)

**Wichtig:** `knowsAbout` listet echte Kompetenzen auf – keine erfundenen Skills.

### Kontakt (/kontakt)
**Datei:** `src/app/(routes)/kontakt/page.tsx`

**Implementiert:**

1. **ContactPage Schema** (NEU):
```json
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Kontakt SimpleWebDesign",
  "description": "Kontaktiere SimpleWebDesign für eine ehrliche Einschätzung...",
  "url": "https://simplewebdesign.at/kontakt",
  "mainEntity": {
    "@type": "Organization",
    "name": "SimpleWebDesign",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@simplewebdesign.at",
      "telephone": "+436645182696",
      "availableLanguage": ["German", "English"],
      "areaServed": ["AT", "DE"]
    }
  }
}
```

2. **LocalBusiness Schema** (bereits vorhanden)

---

## 3. Mini-FAQ auf Startseite

**Neue Datei:** `src/components/sections/HomeFaq.tsx`  
**Integriert in:** `src/app/page.tsx`

**6 Fragen & Antworten:**

1. Warum bringt meine Website keine Anfragen?
2. Was unterscheidet SimpleWebDesign von klassischen Agenturen?
3. Wie lange dauert ein Website-Projekt?
4. Arbeitet ihr nur mit KMU in Österreich?
5. Was kostet eine professionelle Website?
6. Kann ich meine bestehende Website optimieren lassen?

**Features:**
- Akkordeon-Funktionalität (erstes Item standardmäßig offen)
- Kurze, präzise Antworten (1-3 Sätze)
- Link zu /kontakt für weitere Fragen
- FAQPage Schema implementiert

**Platzierung:** Am Ende der Startseite, vor den auskommentierten alten Sections.

---

## 4. Interne Link-Signale

### Überprüfung bestehender Links:

✅ **Startseite:**
- Link zu `/kontakt` (im Hero + FAQ)
- Links zu `/services/*` (in verschiedenen Sections)
- Link zu `/seo-audit`

✅ **Über uns:**
- Link zu `/kontakt` (2x: Hero + CTA)
- Link zu `/prozess`

✅ **Kontakt:**
- Link zurück zur Startseite implizit über Navigation
- CTA zur Kontaktaufnahme

**Ergebnis:** Alle wichtigen internen Links sind bereits vorhanden und korrekt gesetzt.

---

## 5. SEO Meta-Tags

### Überprüfung der Metadaten:

✅ **Startseite (/):**
```typescript
title: 'Webdesign für KMU in Österreich & Deutschland | SimpleWebDesign'
description: 'Viele Websites sehen gut aus, bringen aber keine Anfragen...'
canonical: 'https://simplewebdesign.at/'
```

✅ **Über uns (/ueber-uns):**
```typescript
title: 'Über mich | Websites, die Entscheidungen erleichtern | SimpleWebDesign'
description: 'Ich bin Gerald. Ich baue Websites, die Entscheidungen erleichtern...'
canonical: 'https://simplewebdesign.at/ueber-uns'
```

✅ **Kontakt (/kontakt):**
```typescript
title: 'Kontakt für KMU Webdesign | Beratung Österreich & Deutschland | SimpleWebDesign'
description: 'Kontaktieren Sie uns für Ihr KMU Webdesign-Projekt...'
canonical: 'https://simplewebdesign.at/kontakt'
```

**Ergebnis:** Alle Meta-Tags sind konsistent, einzigartig und korrekt implementiert. Keine Duplikate.

---

## Geänderte Dateien

### Neu erstellt:
1. ✅ `src/components/sections/HomeFaq.tsx` – FAQ-Sektion für Startseite

### Modifiziert:
1. ✅ `src/app/page.tsx` – FAQ-Import, FAQ-Schema, FAQ-Sektion hinzugefügt
2. ✅ `src/components/sections/ModernHero.tsx` – Summary-Block im Hero
3. ✅ `src/app/(routes)/ueber-uns/page.tsx` – Summary-Block + erweitertes JSON-LD
4. ✅ `src/app/(routes)/kontakt/page.tsx` – Summary-Block + erweitertes JSON-LD

---

## JSON-LD Schemas im Überblick

| Seite | Schemas |
|-------|---------|
| **/** (Startseite) | WebSite, ProfessionalService, Organization, WebPage, Breadcrumb, **FAQPage** |
| **/ueber-uns** | **AboutPage**, Organization (mit Person + worksFor) |
| **/kontakt** | **ContactPage**, LocalBusiness (mit ContactPoint) |

**Fettgedruckt:** Neu hinzugefügt oder erweitert

---

## Wichtige Prinzipien der Umsetzung

✅ **Keine erfundenen Daten:**
- Keine Fake-Adressen
- Keine Fake-Bewertungen
- Keine Fake-Preise
- Alle Daten basieren auf realen Informationen

✅ **Kein Redesign:**
- Bestehender Stil beibehalten
- Keine neuen Layout-Patterns
- Summary-Blöcke passen sich visuell in bestehendes Design ein

✅ **Tone of Voice:**
- Ruhig, sachlich
- Keine Buzzwords oder Marketing-Sprech
- Klarheit über Verkauf

✅ **LLM-Optimierung:**
- Strukturierte Daten für maschinelle Verarbeitung
- Kurze, prägnante Zusammenfassungen
- Klare semantische Hierarchie

---

## Testing-Empfehlungen

1. **JSON-LD Validierung:**
   - Google Rich Results Test: https://search.google.com/test/rich-results
   - Schema.org Validator: https://validator.schema.org/

2. **Visuelle Überprüfung:**
   ```bash
   npm run dev
   ```
   Dann öffnen:
   - http://localhost:3000/
   - http://localhost:3000/ueber-uns
   - http://localhost:3000/kontakt

3. **Lighthouse SEO Audit:**
   ```bash
   npm run build
   npm run start
   ```

---

## Zusammenfassung

**Was wurde gemacht:**
- ✅ 3 LLM-friendly Summary-Blöcke hinzugefügt
- ✅ Enhanced JSON-LD für alle 3 Seiten
- ✅ FAQ-Sektion auf Startseite mit 6 Q&As + FAQPage Schema
- ✅ Interne Links verifiziert (bereits korrekt vorhanden)
- ✅ SEO Meta-Tags überprüft (bereits konsistent)

**Was NICHT verändert wurde:**
- ✅ Kein Redesign
- ✅ Keine erfundenen Daten
- ✅ Bestehender Stil bleibt erhalten
- ✅ Keine strukturellen Layout-Änderungen

**Ergebnis:**
Die Website ist jetzt deutlich besser für KI/LLMs lesbar, ohne dass sich am visuellen Erscheinungsbild oder der Benutzerführung etwas geändert hat. Alle Optimierungen sind subtil, aber wirkungsvoll.
