# 🚀 Deployment Checklist

## ✅ Pre-Deployment Tasks

### GTM & Cookie Consent
- [x] GTM script restored and loading immediately
- [x] Cookie consent banner working
- [x] GDPR compliance verified (no tracking without consent)
- [x] Test page created at `/test-gtm`

### SEO & Indexing
- [x] Test page excluded from sitemap
- [x] Test page blocked in robots.txt
- [x] Test page has no-index metadata

## 🚨 IMPORTANT: Before Production Deployment

### Remove Test Page
**CRITICAL:** The test page `/test-gtm` should be removed before production deployment:

1. **Delete the test page directory:**
   ```bash
   rm -rf src/app/test-gtm/
   ```

2. **Remove from robots.txt:**
   - Remove `/test-gtm` from the disallow list in `src/app/robots.ts`

3. **Verify sitemap:**
   - Ensure `/test-gtm` is not included in the sitemap

## 🧪 Testing After Deployment

### GTM Functionality
- [ ] GTM script loads on all pages
- [ ] Cookie consent banner appears
- [ ] Consent preferences are respected
- [ ] No tracking without consent

### Cookie Consent
- [ ] Banner appears for new visitors
- [ ] Settings can be changed
- [ ] Preferences are saved
- [ ] Consent updates GTM immediately

## 🔍 Verification Steps

1. **Check GTM Dashboard:**
   - Verify consent events are received
   - Check that tracking respects consent

2. **Test Cookie Consent:**
   - Visit site as new user
   - Accept/reject different cookie types
   - Verify GTM behavior changes

3. **GDPR Compliance:**
   - Confirm no tracking without consent
   - Verify consent can be withdrawn

## 📱 Production URLs

- **Main Site:** `https://simplewebdesign.at`
- **GTM ID:** `GTM-TNK6X4Q5`
- **Test Page:** `https://simplewebdesign.at/test-gtm` (REMOVE BEFORE PRODUCTION)

## 🎯 Success Criteria

- ✅ GTM loads immediately
- ✅ Cookie consent works properly
- ✅ No tracking without consent
- ✅ GDPR compliant for Austria/EU
- ✅ Test page not indexed by Google
- ✅ Production site clean and professional

---

**Remember:** The test page is for development/testing only. Always remove it before production deployment!
