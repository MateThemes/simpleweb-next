# Über-uns-Seite (/ueber-uns) Optimierung – Abgeschlossen

**Datum:** 3. Januar 2026  
**Route:** `/ueber-uns`  
**Status:** ✅ Abgeschlossen

---

## Durchgeführte Änderungen

### 1. Bannertext entfernt ✅

Der LLM-friendly summary block mit folgendem Text wurde **komplett entfernt**:

```html
<div className="mt-6 text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg border border-neutral-200 dark:border-neutral-800">
  <p>
    Gerald Schandl betreibt SimpleWebDesign und baut Websites für KMU, die nicht nur gut aussehen, sondern messbare Anfragen bringen. Fokus auf Klarheit, Struktur und ehrliche Beratung – ohne Agentur-Sprech.
  </p>
</div>
```

**Verbleibende Struktur:**
- ✅ Eyebrow Badge ("Über mich")
- ✅ H1 Headline ("Websites, die Entscheidungen erleichtern...")
- ✅ Zwei nachfolgende Absätze
- ✅ CTA Buttons

---

### 2. JSON-LD Structured Data bereinigt ✅

#### Vorher (2 separate Scripts):
- `AboutPage` Schema mit eigenem Organization-Block
- `Organization` Schema (generiert via `aboutSchema()`) mit `foundingDate: 2020`

#### Nachher (1 unified @graph):

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://simplewebdesign.at/ueber-uns#webpage",
      "url": "https://simplewebdesign.at/ueber-uns",
      "name": "Über mich | SimpleWebDesign",
      "description": "Ich bin Gerald. Ich baue Websites für KMU, die Entscheidungen erleichtern – mit Klarheit, Struktur und ehrlicher Einordnung.",
      "isPartOf": {
        "@id": "https://simplewebdesign.at/#website"
      },
      "about": {
        "@id": "https://simplewebdesign.at/#organization"
      },
      "publisher": {
        "@id": "https://simplewebdesign.at/#organization"
      },
      "inLanguage": "de-AT",
      "image": {
        "@type": "ImageObject",
        "url": "https://simplewebdesign.at/img/about/workspace.jpg"
      },
      "mainEntity": {
        "@id": "https://simplewebdesign.at/#person"
      }
    },
    {
      "@type": "Person",
      "@id": "https://simplewebdesign.at/#person",
      "name": "Gerald Schandl",
      "jobTitle": "Webdesigner & Gründer",
      "description": "Webdesigner mit Fokus auf Klarheit, Struktur und messbare Wirkung für KMU in Österreich & Deutschland.",
      "knowsAbout": [
        "Webdesign",
        "User Experience (UX)",
        "Conversion-Optimierung",
        "SEO Grundlagen",
        "Website-Struktur"
      ],
      "worksFor": {
        "@id": "https://simplewebdesign.at/#organization"
      },
      "url": "https://simplewebdesign.at/ueber-uns"
    }
  ]
}
```

---

## Wichtige Schema-Verbesserungen

### ✅ Keine Duplikate mehr
- Kein separates Organization Schema auf `/ueber-uns`
- Organization wird global über ID referenziert: `https://simplewebdesign.at/#organization`
- WebSite wird global über ID referenziert: `https://simplewebdesign.at/#website`

### ✅ Korrekte Entity-Verlinkung
- **AboutPage** → `mainEntity` zeigt auf Person
- **Person** → `worksFor` zeigt auf Organization (via @id)
- **AboutPage** → `isPartOf` zeigt auf WebSite (via @id)
- **AboutPage** → `about` und `publisher` zeigen auf Organization (via @id)

### ✅ Bereinigt
- ❌ Kein `foundingDate: 2020` mehr (Konflikt mit globalem `foundingDate: 2016`)
- ❌ Keine redundanten Address-Blöcke
- ✅ Absolute URLs für Bilder (`https://simplewebdesign.at/img/about/workspace.jpg`)
- ✅ Konsistente @id Pattern

---

## Datei-Änderungen

**Geänderte Datei:**
- `src/app/(routes)/ueber-uns/page.tsx`

**Entfernte Dependencies:**
- Import von `aboutSchema` aus `@/app/schema` (nicht mehr benötigt)

---

## Schema-Hierarchie

```
Homepage (/)
├── Organization (@id: #organization) [GLOBAL]
├── WebSite (@id: #website) [GLOBAL]
└── WebPage (@id: #webpage)

Über-uns (/ueber-uns)
├── AboutPage (@id: #webpage) → references Organization + WebSite
└── Person (@id: #person) → references Organization
```

---

## Validierung

**Schema Testing:**
- ✅ Google Rich Results Test: https://search.google.com/test/rich-results
- ✅ Schema.org Validator: https://validator.schema.org/

**Checkliste:**
- [x] Bannertext komplett entfernt
- [x] Zwei separate JSON-LD Scripts → ein unified @graph
- [x] Organization wird nicht dupliziert (nur via @id referenziert)
- [x] Person Entity mit eigenem @id
- [x] AboutPage mainEntity zeigt auf Person
- [x] Absolute URLs für alle Bilder
- [x] Keine foundingDate=2020 Konflikte
- [x] Konsistente @id Pattern mit Homepage
- [x] Build erfolgreich

---

## Output: Finaler JSON-LD Block

Der finale JSON-LD Block ist im obigen Abschnitt dargestellt.

**Keine weiteren Änderungen erforderlich.**

---

## Notizen

- Route bleibt `/ueber-uns` (keine Änderung)
- Kein Redesign, kein Refactor
- Nur die angeforderten Änderungen durchgeführt
- Alle anderen Seiteninhalte unverändert
- TypeScript Errors behoben (aboutSchema Import entfernt)

---

**✅ Optimierung abgeschlossen**
