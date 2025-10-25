# Firmendaten-Übersicht: Schema.org & Dublin Core

**Stand:** 25. Oktober 2025

---

## ⚠️ WICHTIGE INKONSISTENZ GEFUNDEN!

Es gibt **zwei verschiedene Namen** im System:

1. **Gerald Schandl** (in Impressum & AGB)
2. **Gerald Böhm** (in Schema.org & Dublin Core)

❓ **Welcher Name ist korrekt?**

---

## 📋 Aktuell hinterlegte Firmendaten

### 1. Schema.org Structured Data (Homepage)

#### WebsiteSchema:
```json
{
  "@type": "WebSite",
  "name": "SimpleWebDesign",
  "url": "https://simplewebdesign.at",
  "address": {
    "addressRegion": "Niederösterreich",
    "addressCountry": "AT"
  },
  "geoMidpoint": {
    "latitude": 48.4474,
    "longitude": 15.6066
  }
}
```

#### LocalBusinessSchema:
```json
{
  "@type": "LocalBusiness",
  "name": "SimpleWebDesign",
  "url": "https://simplewebdesign.at",
  "telephone": "+436645182696",
  "email": "info@simplewebdesign.at",
  "address": {
    "addressRegion": "Niederösterreich",
    "addressCountry": "AT"
  },
  "areaServed": ["Austria", "Germany"]
}
```

#### OrganizationSchema:
```json
{
  "@type": "Organization",
  "name": "SimpleWebDesign",
  "url": "https://simplewebdesign.at",
  "logo": "https://simplewebdesign.at/img/logo.png",
  "telephone": "+436645182696",
  "email": "info@simplewebdesign.at",
  "address": {
    "addressRegion": "Niederösterreich",
    "addressCountry": "AT"
  },
  "foundingDate": "2020",
  "serviceType": "Webdesign Agentur"
}
```

---

### 2. Dublin Core Metadata (Alle Seiten)

**Root Layout (`layout.tsx`):**
```typescript
{
  "DC.title": "SimpleWebDesign | Professional Web Design and Development",
  "DC.creator": "Gerald Böhm",  // ⚠️ Inkonsistenz
  "DC.publisher": "SimpleWebDesign",
  "DC.identifier": "https://simplewebdesign.at",
  "DC.language": "de",
  "DC.subject": "Webdesign, SEO, Web Development, Online Marketing",
  "DC.coverage": "Austria, Germany",
  "DC.rights": "© SimpleWebDesign. Alle Rechte vorbehalten."
}
```

**Blog-Posts:**
```typescript
{
  "DC.creator": "Gerald Böhm",  // ⚠️ Inkonsistenz
  "DC.publisher": "SimpleWebDesign",
  "DC.type": "Text"
}
```

**Service-Seiten:**
```typescript
{
  "DC.creator": "Gerald Böhm",  // ⚠️ Inkonsistenz
  "DC.publisher": "SimpleWebDesign",
  "DC.type": "Service"
}
```

---

### 3. Impressum & Rechtliche Seiten

**Impressum (`src/app/(routes)/impressum/page.tsx`):**
```
Name: Gerald Schandl  // ⚠️ Inkonsistenz
Firmenname: SimpleWebDesign
Adresse: Sonnleite 20, 3902 Vitis, Österreich
E-Mail: info@simplewebdesign.at
Telefon: +43 664 518 26 96
```

**Datenschutz (`src/app/(routes)/datenschutz/page.tsx`):**
```
Post: Gerald Schandl - SimpleWebDesign, Sonnleite 20, 3902 Vitis, Österreich
E-Mail: info@simplewebdesign.at
```

**AGB (`src/app/(routes)/agb/page.tsx`):**
```
Gerald Schandl (SimpleWebDesign)
```

---

### 4. Kontakt-Seite Schema

**ContactSchema (`src/app/(routes)/kontakt/page.tsx`):**
```json
{
  "@type": "LocalBusiness",
  "name": "SimpleWebDesign",
  "email": "info@simplewebdesign.at",
  "telephone": "+43 664 518 26 96",
  "address": {
    "streetAddress": "Sonnleite 20",
    "addressLocality": "Vitis",
    "postalCode": "3902",
    "addressCountry": "Austria"
  }
}
```

---

### 5. Über-Uns Seite

**AboutSchema (`src/app/(routes)/ueber-uns/page.tsx`):**
```json
{
  "@type": "Organization",
  "name": "SimpleWebDesign",
  "foundingDate": "2020",
  "founder": "Gerald Böhm",  // ⚠️ Inkonsistenz
  "address": {
    "streetAddress": "Musterstraße 123"  // ⚠️ Falsche Adresse?
  }
}
```

---

### 6. ProfessionalServiceSchema (Service-Seiten)

**Alle Service-Seiten:**
```json
{
  "provider": {
    "@type": "Organization",
    "name": "SimpleWebDesign",
    "url": "https://simplewebdesign.at",
    "logo": "https://simplewebdesign.at/img/logo.png",
    "contactPoint": {
      "telephone": "+43-664-518-26-96",
      "contactType": "customer service",
      "email": "info@simplewebdesign.at",
      "availableLanguage": ["German", "English"]
    }
  }
}
```

---

## 📊 Zusammenfassung der Daten

### ✅ Konsistent hinterlegt:

| Datenfeld | Wert |
|-----------|------|
| **Firmenname** | SimpleWebDesign |
| **Website** | https://simplewebdesign.at |
| **E-Mail** | info@simplewebdesign.at |
| **Telefon** | +43 664 518 26 96 (bzw. +436645182696) |
| **Region** | Niederösterreich, Österreich |
| **Land** | Austria (AT) |
| **Gründungsjahr** | 2020 |
| **Service-Bereich** | Austria, Germany |

### ⚠️ INKONSISTENZEN:

| Datenfeld | Schema.org / Dublin Core | Impressum / Rechtlich |
|-----------|--------------------------|----------------------|
| **Inhaber-Name** | **Gerald Böhm** | **Gerald Schandl** |
| **Straße** | Nicht angegeben (nur Region) | Sonnleite 20 |
| **PLZ/Ort** | Nicht angegeben | 3902 Vitis |

### ❌ Fehlende oder unvollständige Daten:

#### In Schema.org:
- ❌ Vollständige Adresse (Straße, PLZ, Ort) fehlt in den meisten Schemas
- ❌ Inhaber-Name fehlt komplett in Schema.org
- ❌ Rechtsform (Einzelunternehmen, GmbH, etc.) fehlt
- ❌ UID-Nummer fehlt (falls vorhanden)

#### Über-Uns Seite:
- ❌ Falsche Platzhalter-Adresse: "Musterstraße 123"

---

## 🔧 Empfohlene Korrekturen

### 1. Name klären
**Entscheidung nötig:** Ist der korrekte Name:
- [ ] Gerald Schandl
- [ ] Gerald Böhm

### 2. Vollständige Adresse überall ergänzen

**Empfohlen:**
```
Name: [Gerald Schandl ODER Gerald Böhm]
Firma: SimpleWebDesign
Straße: Sonnleite 20
PLZ/Ort: 3902 Vitis
Region: Niederösterreich
Land: Österreich (AT)
```

### 3. Schema.org vervollständigen

**Homepage LocalBusinessSchema** sollte sein:
```json
{
  "@type": "LocalBusiness",
  "name": "SimpleWebDesign",
  "url": "https://simplewebdesign.at",
  "telephone": "+436645182696",
  "email": "info@simplewebdesign.at",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sonnleite 20",
    "addressLocality": "Vitis",
    "postalCode": "3902",
    "addressRegion": "Niederösterreich",
    "addressCountry": "AT"
  }
}
```

### 4. Dublin Core Creator anpassen

In `src/lib/dublinCore.ts` den korrekten Namen eintragen:
```typescript
creator: metadata.creator || '[KORREKTER NAME]',
```

### 5. Über-Uns Seite korrigieren

In `src/app/(routes)/ueber-uns/page.tsx`:
- Falsche "Musterstraße 123" durch echte Adresse ersetzen
- Founder-Name korrigieren

---

## 📝 Betroffene Dateien

### Müssen aktualisiert werden (Name):
1. ✏️ `src/lib/dublinCore.ts` (3 Stellen: Zeile 93, 159, 179)
2. ✏️ `src/app/layout.tsx` (Zeile 57)
3. ✏️ `src/app/(routes)/ueber-uns/page.tsx` (Zeile 75 + Adresse)

### Müssen vervollständigt werden (Adresse):
1. ✏️ `src/app/page.tsx` - LocalBusinessSchema (Zeile 61-65)
2. ✏️ `src/app/page.tsx` - OrganizationSchema (Zeile 137-141)
3. ✏️ `src/app/page.tsx` - WebsiteSchema (Zeile 37-41)

### Optional (Rechtsform, UID):
1. 📝 Impressum erweitern mit Rechtsform
2. 📝 Schema.org mit legalName erweitern (falls GmbH o.ä.)

---

## 🎯 Nächste Schritte

1. **Name klären**: Welcher ist korrekt? (Schandl oder Böhm?)
2. **Adresse bestätigen**: Ist "Sonnleite 20, 3902 Vitis" korrekt?
3. **Rechtsform**: Einzelunternehmen? GmbH? (für vollständige Schemas)
4. **UID-Nummer**: Falls vorhanden (für Impressum & Schema.org)

---

**Sobald die Daten geklärt sind, kann ich alle Dateien entsprechend aktualisieren!**

