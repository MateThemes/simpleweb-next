# Über-Uns Seite Optimierung

## Datum: 3. Januar 2026

### Ziel
Die /ueber-uns Seite wurde optimiert, um Ton & Struktur der neuen Startseite zu entsprechen (Klarheit → Struktur → Wirkung).

---

## ✅ Durchgeführte Änderungen

### 1. Hero-Section
**Vorher:**
- "👨‍💻 Ihr Experte" Badge
- "Webdesign Experte für KMU"
- Städte-Aufzählung (Wien, München, Waldviertel, etc.)
- Tech-fokussierte Beschreibung

**Nachher:**
- "Über mich" Badge (neutral, blue)
- "Websites, die Entscheidungen erleichtern – nicht nur gut aussehen"
- Persönliche Einleitung: "Ich bin Gerald..."
- Fokus auf Klarheit statt Technik
- CTAs: "Einschätzung anfragen" (primary) + "Wie ich arbeite" (secondary)

### 2. Entfernte Sektionen
✅ **"Moderne Lösungen..."** - Tech-Stack-Fokus entfernt
✅ **"Unsere Werte"** (alte Version mit Buzzwords wie "Expertise", "Innovation")
✅ **"Mein Leistungsangebot"** - 6 Service-Karten mit langen Beschreibungen entfernt
✅ **Trust Signals** - "100% Zufriedenheit" und "24/7 Support" entfernt

### 3. Neue Sektionen

#### a) "Warum ich so arbeite" (Image + Story)
- Bild links, Text rechts
- Erklärt die Philosophie: Einordnung vor Design
- Persönlicher Ton, authentisch

#### b) "Wie ich arbeite" (Prinzipien)
- 4 Prinzipien in 2-Spalten-Grid:
  - Einordnung
  - Struktur
  - Wirkung
  - Ehrliche Kommunikation
- Ersetzt die alten "Werte" mit Buzzwords

#### c) "Wie die Zusammenarbeit abläuft"
- 4 Phasen (01-04):
  1. Einordnung
  2. Struktur
  3. Umsetzung
  4. Wirkung
- Identisch zur Startseite (Zusammenarbeit-Sektion)

#### d) "Passt das für dich?" (Fit-Sektion)
- Zwei Spalten:
  - **Passt gut, wenn ...**
    - Du merkst, dass deine Website nicht klar arbeitet
    - Du suchst Orientierung, bevor du investierst
    - Du hast keine Lust auf Agentur-Sprech
    - Du willst verstehen, warum etwas gemacht wird
  
  - **Passt eher nicht, wenn ...**
    - Du brauchst nur schnell „eine Website"
    - Du willst primär Preise vergleichen
    - Du suchst eine reine Umsetzungsagentur
    - Du willst Entscheidungen komplett abgeben

#### e) Vereinfachte Zahlen
- Nur noch 2 Stats (statt 4):
  - 50+ Projekte (realistisch)
  - 1-2 Tage Antwortzeit (unkritisch)
- Entfernt: "100% Zufriedenheit", "24/7 Support"

#### f) Ruhiger CTA-Abschluss
- "Lass uns schauen, ob es passt."
- Microcopy: "Antwort in 1–2 Werktagen. Kein Spam. Wenn es nicht passt, sagen wir's offen."
- Button: "Unverbindlich Kontakt aufnehmen"

#### g) Tech-Stack als Details/Accordion
- Am Ende, klein, ausklappbar
- Für die, die es interessiert
- Ehrlich: "Die Technologie ist selten das Problem"

### 4. SEO-Optimierung

**Title:**
```
Über mich | Websites, die Entscheidungen erleichtern | SimpleWebDesign
```

**Description:**
```
Warum ich Websites anders baue: Klarheit vor Design. Struktur vor Features. 
Wirkung vor Buzzwords. Für KMU in Österreich & Deutschland.
```

**Schema:**
- aboutSchema beibehalten, Description aktualisiert

### 5. Design-System
✅ Alle Farben, Spacing, Typo unverändert
✅ Dark/Light Mode funktioniert
✅ Container, Buttons, Typography konsistent zur Homepage

---

## 🗑️ Was wurde entfernt?

1. **"Webdesign Experte" Wording** - komplett entfernt
2. **Städte-Aufzählung** (Wien, München, Waldviertel)
3. **Tech-Stack als Hauptfeature** - nur noch als Details am Ende
4. **6 Service-Karten** (Webdesign, SEO, Marketing, Redesign, Hosting, Performance)
5. **Buzzword-Werte** (Expertise, Innovation, Performance, Persönliche Betreuung)
6. **Icons** (CodeBracketIcon, RocketLaunchIcon, LightBulbIcon)
7. **Unrealistische Claims** (100% Zufriedenheit, 24/7 Support)
8. **Agentur-Sprache** und übertriebene Versprechen

---

## 📊 Content-Struktur (Neu)

1. **Hero** - Wer ich bin, warum anders
2. **Bild + Story** - Warum ich so arbeite
3. **Prinzipien** - Wie ich arbeite (4 Punkte)
4. **Prozess** - Wie die Zusammenarbeit abläuft (4 Schritte)
5. **Fit-Check** - Passt gut / Passt eher nicht
6. **Stats** - 50+ Projekte, 1-2 Tage Antwortzeit
7. **CTA** - Ruhig, ehrlich, mit Microcopy
8. **Tech-Stack** - Details/Accordion am Ende

---

## 🎯 Erreichte Ziele

✅ Klarheit vor Design-Buzzwords
✅ Struktur wie Startseite (Einordnung → Struktur → Wirkung)
✅ Ehrliche Kommunikation (Passt/Passt nicht)
✅ Keine doppelten Inhalte (Services-Liste entfernt)
✅ Persönlicher Ton ("Ich bin Gerald...")
✅ Abgrenzung von Agenturen
✅ Design-System konsistent
✅ SEO optimiert ohne "Experte"-Wording

---

## 🔧 Technische Fixes

- Entfernt: Unused import `Link`
- Escaped: Apostrophe in "wir's" → "wir&apos;s"
- Button variant: "outline" → "secondary" (TypeScript fix)

---

## 📝 Nächste Schritte (Optional)

- [ ] A/B Test: Conversion-Rate messen
- [ ] User-Feedback zur neuen Tonalität
- [ ] Ggf. Testimonials hinzufügen (mit echten Zitaten)
- [ ] Foto von Gerald ergänzen?

---

## Datei-Änderungen

**Geändert:**
- `src/app/(routes)/ueber-uns/page.tsx` (komplett neu strukturiert)

**Keine Änderungen:**
- Design-System (Container, Button, Colors, Spacing)
- Dark/Light Mode
- Responsive Breakpoints
