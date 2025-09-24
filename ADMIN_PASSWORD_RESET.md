# 🔑 Admin-Passwort Reset-Anleitung

## 🚨 Notfall-Zugang

Falls du das Admin-Passwort vergessen hast, verwende einen dieser Notfall-Zugänge:

### **Notfall-Passwörter:**
- `reset123` - Emergency reset
- `admin2025` - Year-based fallback  
- `simpleweb2025` - Company-based fallback

## 🔧 Passwort zurücksetzen

### **Methode 1: Environment Variables ändern**
```bash
# .env.local (SICHER - nicht im GitHub Repo)
ADMIN_PASSWORD=dein_hauptpasswort_hier
EMERGENCY_PASSWORD_1=notfall_passwort_1
EMERGENCY_PASSWORD_2=notfall_passwort_2
EMERGENCY_PASSWORD_3=notfall_passwort_3

# Für Vercel Deployment:
# Vercel Dashboard → Settings → Environment Variables
```

### **Methode 2: Browser LocalStorage löschen**
```javascript
// In der Browser-Konsole (F12)
localStorage.removeItem('admin-authenticated');
localStorage.removeItem('admin-password');
```

### **Methode 3: Hard Reset**
```bash
# Development Server neu starten
npm run dev
```

## 🛡️ Sicherheitshinweise

### **Starke Passwörter verwenden:**
- Mindestens 8 Zeichen
- Groß- und Kleinbuchstaben
- Zahlen und Sonderzeichen
- Beispiel: `Admin2025!@#`

### **Passwort regelmäßig ändern:**
- Alle 3-6 Monate
- Bei Verdacht auf Kompromittierung
- Bei Team-Wechsel

### **Notfall-Passwörter:**
- Nur für echte Notfälle verwenden
- Sofort nach Zugang ändern
- Nicht an Dritte weitergeben

## 📝 Passwort-Management

### **Empfohlene Passwörter:**
```
Hauptpasswort: SimpleWeb2025!@#
Backup 1: Admin2025!@#
Backup 2: Secure2025!@#
```

### **Passwort-Generator:**
```bash
# Online Generator
https://passwordsgenerator.net/

# Oder selbst erstellen:
# [Firma][Jahr][Sonderzeichen]
# SimpleWeb2025!@#
```

## 🔒 Zusätzliche Sicherheit

### **IP-Whitelist (Optional):**
```bash
# Nur bestimmte IPs erlauben
# In vercel.json oder server-seitig
```

### **Session-Timeout:**
```javascript
// Automatische Abmeldung nach 1 Stunde
setTimeout(() => {
  localStorage.removeItem('admin-authenticated');
}, 3600000);
```

## 📞 Support

Bei Problemen:
1. Notfall-Passwort verwenden
2. Passwort über UI ändern
3. Environment Variable aktualisieren
4. Server neu starten

---

**Wichtig:** Bewahre diese Anleitung sicher auf und teile sie nur mit autorisierten Personen!
