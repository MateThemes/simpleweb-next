# Make.com Setup für KI-Automatisierung Leads

Diese Anleitung zeigt dir, wie du Make.com einrichtest, um KI-Automatisierung Anfragen automatisch in ein Google Sheet zu schreiben und E-Mails zu versenden.

## 📋 Voraussetzungen

- Make.com Account (Free Plan reicht für den Start)
- Google Account für Google Sheets
- E-Mail Account (Gmail, Outlook, etc.)

## 🚀 Schritt-für-Schritt Anleitung

### 1. Make.com Scenario erstellen

1. Gehe zu [Make.com](https://www.make.com) und erstelle ein neues Scenario
2. Nenne es z.B. "KI-Automatisierung Leads"

### 2. Webhook-Trigger einrichten

1. **Trigger hinzufügen**: Klicke auf "Add a module" und wähle **"Webhooks"** → **"Custom webhook"**
2. **Webhook erstellen**: 
   - Wähle "Add" um einen neuen Webhook zu erstellen
   - Name: z.B. "KI-Automatisierung Lead"
   - **WICHTIG**: Kopiere die Webhook-URL (z.B. `https://hook.eu1.make.com/xxxxx/xxxxx`)
3. **Response einrichten**: 
   - HTTP Status: `200`
   - Response Body: `{"ok": true}` (optional, wird nicht verwendet)

### 3. Environment Variable in Next.js setzen

Füge die Webhook-URL zu deiner `.env` oder `.env.local` Datei hinzu:

```bash
MAKE_WEBHOOK_URL=https://hook.eu1.make.com/xxxxx/xxxxx
```

**Wichtig**: Nach dem Hinzufügen der Variable muss der Next.js Server neu gestartet werden!

### 4. Google Sheets Modul hinzufügen

1. **Google Sheets Module**: Nach dem Webhook-Trigger, füge ein **"Google Sheets"** → **"Add a row"** Modul hinzu
2. **Verbindung erstellen**: 
   - Verbinde dich mit deinem Google Account
   - Erlaube Make.com den Zugriff auf Google Sheets
3. **Spreadsheet auswählen**: Wähle ein Google Sheet oder erstelle ein neues
4. **Sheet auswählen**: Wähle das Tab/Sheet (z.B. "Leads")
5. **Spalten mappen**: 
   - **Spalte A**: `name` → `{{1.name}}`
   - **Spalte B**: `email` → `{{1.email}}`
   - **Spalte C**: `company` → `{{1.company}}`
   - **Spalte D**: `phone` → `{{1.phone}}`
   - **Spalte E**: `message` → `{{1.message}}`
   - **Spalte F**: `timestamp` → `{{1.timestamp}}`
   - **Spalte G**: `source` → `{{1.source}}`

### 5. E-Mail Modul hinzufügen (optional)

Falls Make.com auch die E-Mail versenden soll (statt Resend):

1. **E-Mail Modul**: Nach Google Sheets, füge ein **"Gmail"** → **"Send an Email"** oder **"Email"** → **"Send an Email"** Modul hinzu
2. **E-Mail konfigurieren**:
   - **To**: `gerald@simplewebdesign.at`
   - **Subject**: `Neue KI-Automatisierung Anfrage von {{1.name}}`
   - **Content Type**: HTML
   - **Body**: 
   ```html
   <h2>Neue KI-Automatisierung Anfrage</h2>
   <p><strong>Name:</strong> {{1.name}}</p>
   <p><strong>E-Mail:</strong> {{1.email}}</p>
   <p><strong>Telefon:</strong> {{1.phone}}</p>
   <p><strong>Unternehmen:</strong> {{1.company}}</p>
   <p><strong>Nachricht:</strong><br>{{1.message}}</p>
   <p><small>Quelle: KI-Automatisierung Landingpage<br>Zeitpunkt: {{1.timestamp}}</small></p>
   ```

### 6. Scenario aktivieren

1. **Save**: Speichere das Scenario
2. **Toggle**: Aktiviere das Scenario mit dem Toggle-Switch oben rechts
3. **Test**: Teste mit einem echten Formular-Submit von deiner Website

## 📊 Google Sheet Vorlage

Erstelle ein Google Sheet mit folgenden Spalten (als Header-Zeile):

| A | B | C | D | E | F | G |
|---|---|---|---|---|---|---|
| Name | E-Mail | Unternehmen | Telefon | Nachricht | Zeitpunkt | Quelle |

## 🔄 Datenfluss

```
Website Formular
    ↓
Next.js API Route (/api/lead/ki-automatisierung)
    ↓
Validierung & Spam-Check
    ↓
Make.com Webhook
    ↓
Google Sheets (Zeile hinzufügen)
    ↓
E-Mail versenden (optional)
```

## ⚙️ Erweiterte Optionen

### Filter für Spam/Test-Leads

Falls du Test-Leads filtern willst:
1. Füge ein **"Router"** Modul nach dem Webhook hinzu
2. **Filter 1**: `{{1.email}}` enthält `test` → Ignorieren oder in anderes Sheet
3. **Filter 2**: Sonst → Weiter zu Google Sheets

### Benachrichtigung bei wichtigen Leads

1. Füge ein **"Router"** nach Google Sheets hinzu
2. **Filter**: Wenn `{{1.message}}` enthält bestimmte Keywords (z.B. "dringend")
3. **Aktion**: Zusätzliche E-Mail oder Slack-Nachricht senden

### Lead-ID generieren

1. Nach dem Webhook, füge ein **"Tools"** → **"Set variable"** Modul hinzu
2. **Variable**: `leadId` = `{{formatDate(now; "YYYY-MM-DD-HHmmss")}}-{{randomString(6)}}`
3. Diese `leadId` kann dann auch ins Sheet geschrieben werden

## 🔍 Troubleshooting

### Webhook empfängt keine Daten

1. Prüfe, ob `MAKE_WEBHOOK_URL` in `.env` gesetzt ist
2. Prüfe, ob der Next.js Server neu gestartet wurde
3. Prüfe die Make.com Webhook-URL in den Logs
4. Teste den Webhook direkt mit einem Tool wie Postman

### Daten kommen nicht im Google Sheet an

1. Prüfe die Spalten-Mappings im Google Sheets Modul
2. Prüfe, ob die Google Sheets Verbindung gültig ist
3. Prüfe die Make.com Execution Logs auf Fehler

### E-Mails kommen nicht an

1. Prüfe die E-Mail-Modul Konfiguration
2. Prüfe Spam-Ordner
3. Prüfe Make.com Execution Logs

## 📝 Beispiel: Komplettes Scenario

```
1. Webhook (Custom webhook)
   ↓
2. Router (optional: Filter Test-Leads)
   ↓
3. Google Sheets (Add a row)
   ↓
4. Gmail (Send an Email)
   ↓
5. Filter (optional: Benachrichtigung bei wichtigen Leads)
```

## 🎯 Nächste Schritte

Nach der Einrichtung:
1. Teste das Formular auf deiner Website
2. Prüfe, ob die Daten im Google Sheet erscheinen
3. Prüfe, ob die E-Mail ankommt
4. Aktiviere Error-Handling in Make.com (falls gewünscht)

Viel Erfolg! 🚀

