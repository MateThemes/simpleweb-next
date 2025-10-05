# Cookie-Banner Dokumentation

## Übersicht

Diese Dokumentation beschreibt die vollständige Implementierung des Cookie-Banners mit Consent Mode 2 für Google Tag Manager (GTM) und Google Analytics 4 (GA4).

## 🎯 Ziele

- **DSGVO-konforme Cookie-Einwilligung**: Vollständige Kontrolle über Tracking-Cookies
- **Consent Mode 2**: Google-konforme Implementierung für bessere Datenqualität
- **Benutzerfreundlichkeit**: Intuitive Cookie-Einstellungen mit klaren Optionen
- **Technische Compliance**: Keine Datenübertragung ohne explizite Einwilligung

## 🏗️ Architektur

### Komponenten-Struktur

```
src/components/cookie/
├── CookieConsent.tsx          # Haupt-Banner-Komponente
├── CookiePreferences.tsx      # Detaillierte Einstellungen
├── CookieSettingsButton.tsx   # Einstellungen-Button
├── CookieSettingsOpener.tsx   # Einstellungen-Öffner
└── CookieStore.ts             # Cookie-Management & Consent-Logic
```

### Analytics-Integration

```
src/components/analytics/
├── GoogleTagManager.tsx       # GTM-Integration mit Consent Mode 2
├── GoogleTagManagerLazy.tsx   # Lazy-Loading-Variante
└── PerformanceMonitor.tsx     # Performance-Überwachung
```

## 🔧 Technische Implementierung

### 1. Consent Mode 2 Default-Initialisierung

**Datei**: `src/app/layout.tsx`

```html
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('consent', 'default', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'wait_for_update': 2000
  });
</script>
```

**Wichtige Punkte**:
- Initialisierung **vor** GTM-Load
- Alle Tracking-Daten standardmäßig `denied`
- 2 Sekunden Wartezeit für Cookie-Banner

### 2. Cookie-Kategorien

**Datei**: `src/components/cookie/CookieStore.ts`

```typescript
export interface CookiePreferences {
  necessary: boolean    // Immer true, kann nicht deaktiviert werden
  analytics: boolean     // Google Analytics, GTM
  marketing: boolean     // Werbe-Cookies, Conversion-Tracking
  lastUpdated: string    // Zeitstempel der letzten Änderung
}
```

### 3. Standard-Einstellungen

```typescript
export const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,      // Standardmäßig deaktiviert
  marketing: false,      // Standardmäßig deaktiviert
  lastUpdated: new Date().toISOString(),
}
```

## 🍪 Cookie-Management

### Cookie-Speicherung

- **Schlüssel**: `cookie-preferences`
- **Ablaufzeit**: 365 Tage
- **Sicherheit**: `sameSite: 'strict'`, `secure: true`
- **Format**: JSON-serialisierte Präferenzen

### Consent-Updates

Bei Änderungen der Cookie-Einstellungen werden folgende Aktionen ausgeführt:

1. **DataLayer-Event**:
```typescript
window.dataLayer.push({
  consent: 'update',
  analytics_storage: 'granted' | 'denied',
  ad_storage: 'granted' | 'denied',
  ad_user_data: 'granted' | 'denied',
  ad_personalization: 'granted' | 'denied'
})
```

2. **GTAG-Update**:
```typescript
window.gtag('consent', 'update', {
  'analytics_storage': 'granted' | 'denied',
  'ad_storage': 'granted' | 'denied',
  'ad_user_data': 'granted' | 'denied',
  'ad_personalization': 'granted' | 'denied'
})
```

3. **Cookie-Bereinigung**: Entfernung entsprechender Tracking-Cookies bei Deaktivierung

## 🎨 Benutzeroberfläche

### Cookie-Banner

**Erscheinungszeitpunkt**: 1 Sekunde nach Seitenlade
**Anzeigebedingung**: Nur wenn User noch keine Einwilligung gegeben hat

**Buttons**:
- **"Alle akzeptieren"**: Aktiviert Analytics + Marketing
- **"Nur notwendige"**: Nur notwendige Cookies
- **"Einstellungen"**: Öffnet detaillierte Präferenzen

### Cookie-Einstellungen Modal

**Verfügbare Kategorien**:

1. **Notwendige Cookies** (immer aktiv)
   - Session-Management
   - Sicherheitsfunktionen
   - Grundlegende Website-Funktionalität

2. **Analyse-Cookies** (optional)
   - Google Analytics 4
   - Google Tag Manager
   - Besucherstatistiken

3. **Marketing-Cookies** (optional)
   - Conversion-Tracking
   - Werbe-Cookies
   - Personalisierung

## 🔄 Event-System

### Custom Events

**Event**: `cookieConsentUpdated`
**Payload**: `{ analytics: boolean, marketing: boolean }`

**Verwendung**:
```typescript
// Event dispatchen
window.dispatchEvent(new CustomEvent('cookieConsentUpdated', {
  detail: { analytics: true, marketing: false }
}))

// Event abhören
window.addEventListener('cookieConsentUpdated', (event) => {
  const { analytics, marketing } = event.detail
  // Consent-Updates verarbeiten
})
```

## 📊 Google Tag Manager Integration

### GTM-Container

- **ID**: `GTM-TNK6X4Q5`
- **Strategie**: `afterInteractive`
- **Consent Mode**: Version 2

### DataLayer-Events

1. **Consent Default**: Initialisierung mit `denied`-Werten
2. **Consent Update**: Bei User-Auswahl
3. **Page View**: Automatische Seitenaufruf-Tracking
4. **Custom Events**: Cookie-Consent-Updates

### GA4-Konfiguration

**Empfohlene GTM-Tags**:
- Google Analytics: GA4 Configuration
- Google Analytics: GA4 Event
- Google Analytics: GA4 Consent Update

**Consent-Parameter**:
- `analytics_storage`
- `ad_storage`
- `ad_user_data`
- `ad_personalization`

## 🛡️ Datenschutz & Compliance

### DSGVO-Konformität

- **Rechtmäßigkeit**: Explizite Einwilligung erforderlich
- **Transparenz**: Klare Beschreibung aller Cookie-Kategorien
- **Widerrufbarkeit**: Jederzeit änderbar über Einstellungen
- **Datenminimierung**: Nur notwendige Daten werden übertragen

### Cookie-Richtlinien

**Notwendige Cookies**:
- Keine Einwilligung erforderlich
- Funktionale Notwendigkeit
- Keine Tracking-Funktionen

**Analyse-Cookies**:
- Einwilligung erforderlich
- Anonymisierte Daten
- Verbesserung der Website-Performance

**Marketing-Cookies**:
- Einwilligung erforderlich
- Personalisierte Werbung
- Conversion-Tracking

## 🧪 Testing & Debugging

### Browser-Entwicklertools

**Console-Befehle**:
```javascript
// Aktuelle Cookie-Präferenzen anzeigen
console.log(window.dataLayer)

// Consent-Status prüfen
gtag('get', 'GTM-TNK6X4Q5', 'consent')

// Manuelle Consent-Updates testen
gtag('consent', 'update', {
  'analytics_storage': 'granted'
})
```

### Debugging-Tipps

1. **DataLayer überwachen**: `window.dataLayer` in Console
2. **Cookie-Status prüfen**: Browser DevTools > Application > Cookies
3. **GTM-Preview**: GTM-Container im Preview-Modus testen
4. **Network-Tab**: Tracking-Requests überwachen

## 🔧 Wartung & Updates

### Häufige Aufgaben

1. **Cookie-Kategorien erweitern**:
   - Interface in `CookieStore.ts` erweitern
   - UI-Komponenten aktualisieren
   - Consent-Logic anpassen

2. **GTM-Container wechseln**:
   - GTM_ID in `GoogleTagManager.tsx` ändern
   - Layout-Script aktualisieren

3. **Cookie-Texte anpassen**:
   - Deutsche Texte in Komponenten
   - Datenschutzerklärung verlinken

### Performance-Optimierungen

- **Lazy Loading**: GTM erst nach User-Interaktion laden
- **Cookie-Caching**: Präferenzen lokal zwischenspeichern
- **Event-Debouncing**: Mehrfache Updates vermeiden

## 📝 Changelog

### Version 2.0 (Aktuell)
- ✅ Consent Mode 2 Implementierung
- ✅ DSGVO-konforme Standard-Einstellungen
- ✅ Echtzeit Consent-Updates
- ✅ Verbesserte Benutzeroberfläche
- ✅ Event-basierte Kommunikation

### Version 1.0 (Vorher)
- ❌ Keine Consent Mode 2 Unterstützung
- ❌ Datenübertragung ohne Einwilligung
- ❌ Doppelte GTM-Implementierung
- ❌ Fehlende Standard-Einwilligung

## 🚀 Deployment

### Produktions-Checkliste

- [ ] GTM-Container-ID korrekt
- [ ] Consent Mode 2 aktiviert
- [ ] Cookie-Texte finalisiert
- [ ] Datenschutzerklärung verlinkt
- [ ] Cross-Browser-Testing durchgeführt
- [ ] Performance-Tests abgeschlossen

### Monitoring

**Wichtige Metriken**:
- Cookie-Banner-Anzeigerate
- Consent-Akzeptanzrate
- Tracking-Datenqualität
- Website-Performance-Impact

---

## 📞 Support

Bei Fragen oder Problemen mit dem Cookie-Banner:

1. **Dokumentation prüfen**: Diese Datei durchgehen
2. **Browser-Console**: Fehlermeldungen analysieren
3. **GTM-Debug**: Preview-Modus verwenden
4. **Code-Review**: Implementierung überprüfen

**Wichtige Dateien für Debugging**:
- `src/components/cookie/CookieStore.ts`
- `src/components/analytics/GoogleTagManager.tsx`
- `src/app/layout.tsx`
