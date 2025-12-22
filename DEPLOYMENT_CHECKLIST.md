# ✅ PERATSIM SITE DEPLOYMENT CHECKLIST

## 🎯 Pre-Deployment (LOCAL)

- [ ] **Read READY_TO_DEPLOY.md** (2-3 min)
- [ ] **Open terminal** in project directory
- [ ] **Run: npm run build** (validate compilation)
  - Look for: "Build complete" ✅
  - If error: Check error message in documentation
- [ ] **Test locally: npm run dev**
  - Open: http://localhost:3000
  - Check: Homepage loads
  - Check: No red errors in console
  - Check: Mobile view looks good (F12 + mobile toggle)
- [ ] **Quick visual check:**
  - [ ] Hero section visible
  - [ ] 6 services displayed
  - [ ] 6 sectors displayed
  - [ ] FAQ section visible
  - [ ] All buttons have WhatsApp links
  - [ ] Navbar responsive on mobile
  - [ ] Footer has contact info
- [ ] **Click test WhatsApp buttons:**
  - [ ] Hero "Découvrez" button
  - [ ] Service "En savoir plus" buttons
  - [ ] CTA "Consultation gratuite" button
  - [ ] Contact WhatsApp link (if contact page)
  - All should open: https://wa.me/22677554509

---

## 🚀 DEPLOYMENT STEP 1: Git Commit

### Option A: PowerShell Script (Recommended)
```powershell
.\Deploy-Vercel.ps1
# Sits down, does all 3 steps automatically
# Then shows deployment success message
```

### Option B: Manual Git Commands
```bash
git add -A
git commit -m "feat: Deploy real Peratsim premium homepage to Vercel"
git push origin main
```

- [ ] **Execute deployment command**
- [ ] **Check output:**
  - Should see: "[main xxxxxxx] feat: Deploy..."
  - Should see: "X files changed..."
  - Should see: No git errors

---

## 📤 DEPLOYMENT STEP 2: Verify Push Succeeded

```bash
git log -1 --oneline
# Should show your commit message
```

- [ ] **Commit visible in git log**
- [ ] **No git errors shown**

---

## 🌐 DEPLOYMENT STEP 3: Wait for Vercel

### What's Happening:
1. GitHub receives your push
2. Vercel webhook triggers
3. Vercel starts build (shows in console.vercel.com)
4. Build completes (~30 seconds)
5. Deployed to edge network
6. Site live!

### Timeline:
- ⏱️ Push to GitHub: ~1 second
- ⏱️ Vercel build: ~30 seconds
- ⏱️ Deploy: ~30 seconds
- **Total: ~2 minutes**

- [ ] **Wait 2-3 minutes**
- [ ] **Go to https://console.vercel.com**
- [ ] **Verify deployment succeeded:**
  - Look for green checkmark ✅
  - Status should say "Ready"
  - URL: peratsim-innovation.vercel.app

---

## ✅ POST-DEPLOYMENT (VERIFY SITE LIVE)

### Open Your Live Site:
```
https://peratsim-innovation.vercel.app
```

- [ ] **Page loads** (no 404 or error)
- [ ] **Hero section** displays with tagline
- [ ] **All services** visible (6 cards)
- [ ] **All sectors** visible (6 cards with priority badges)
- [ ] **WhatsApp buttons work** (click one, should open WhatsApp)
- [ ] **Mobile view** responsive (use F12 mobile toggle)
- [ ] **Navbar** hamburger works on mobile
- [ ] **Footer** contact info visible
- [ ] **No console errors** (F12 > Console tab)

---

## 🎊 FINAL CHECKS

### Visual Inspection
- [ ] **Colors look correct**
  - Primary blue (dark)
  - Secondary orange
  - Good contrast
- [ ] **Fonts readable** on all sizes
- [ ] **Images/icons** load properly
- [ ] **Animations smooth** (hover on cards)
- [ ] **Links not broken** (click few random links)

### Performance
- [ ] **Page loads fast** (<2 seconds)
- [ ] **Mobile performance** good
- [ ] **No layout shift** (CLS = 0)
- [ ] **Images optimized** (not blurry)

### Functionality
- [ ] **WhatsApp CTA works** from multiple places
- [ ] **Navbar** collapses on mobile
- [ ] **Responsive** at all breakpoints
  - Mobile (320px)
  - Tablet (768px)
  - Desktop (1024px+)

---

## 📊 Vercel Dashboard Checks

Go to https://vercel.com/dashboard

- [ ] **Project shows** "peratsim-innovation"
- [ ] **Latest deployment** shows green ✅
- [ ] **Deployment time** shows ~2 min
- [ ] **URL shows** peratsim-innovation.vercel.app
- [ ] **Analytics** tab available (shows 0 users - first visit)

---

## 🌍 DOMAIN SETUP (FUTURE - When Ready)

When you're ready to use www.peratsim.com:

- [ ] **Go:** Vercel Dashboard > Project > Settings > Domains
- [ ] **Click:** "Add domain"
- [ ] **Enter:** www.peratsim.com
- [ ] **Copy:** Vercel's NS records
- [ ] **Go:** Your domain registrar (GoDaddy, etc)
- [ ] **Update:** DNS nameservers with Vercel's NS
- [ ] **Wait:** 24-48 hours for propagation
- [ ] **Test:** Visit https://www.peratsim.com
- [ ] **Done:** Site live on custom domain!

---

## ❌ TROUBLESHOOTING

### If Build Fails:
1. Check Vercel deployment logs
2. Read error message
3. Common fixes:
   - Missing dependency: `npm install [package]`
   - TypeScript error: Fix in src/app/page.tsx
   - Contact support: Attach error screenshot

### If Site 404:
1. Refresh browser (Ctrl+Shift+Delete)
2. Check URL: should be exactly:
   `https://peratsim-innovation.vercel.app`
3. Wait 2-3 more minutes for deploy

### If WhatsApp Button Doesn't Work:
1. Check browser console (F12)
2. Verify link format: `https://wa.me/22677554509`
3. Make sure phone number is correct: +226 77 55 45 09

### If Mobile View Broken:
1. Refresh page (Ctrl+F5)
2. Toggle mobile view off/on (F12 toggle)
3. Try different mobile device size
4. Check tailwind.config.ts is correct

---

## 📞 NEED HELP?

**If something goes wrong:**

1. **Check docs first:**
   - READY_TO_DEPLOY.md
   - DEPLOYMENT_INSTRUCTIONS.md
   - README_DEPLOYMENT.txt

2. **Contact:**
   - Vercel Support: vercel.com/help
   - GitHub Support: github.com/support
   - Next.js Discord: discord.gg/nextjs

---

## 🎉 SUCCESS CRITERIA

You'll know it's working when:

✅ Site loads on vercel.app URL
✅ All content displays (6 services, 6 sectors)
✅ WhatsApp buttons work
✅ Mobile responsive
✅ No console errors
✅ Loads in <2 seconds
✅ Vercel shows green ✅ deployment

---

## 📝 NOTES FOR NEXT TIME

**After successful deployment:**

- Keep this checklist for future updates
- Each time you make changes: just `git push origin main`
- Vercel auto-deploys every push
- No manual deployment needed!

---

## ✨ YOU'RE DONE!

Your premium Pératsim site is live on Vercel! 🚀

- **Current URL:** https://peratsim-innovation.vercel.app
- **Future URL:** www.peratsim.com (DNS update needed)
- **Status:** 100% Production Ready ✅

---

**Deployment Date:** 22 December 2025
**Site:** Pératsim Innovation Premium Next.js 14
**Status:** ✅ LIVE ON VERCEL

---

## 🔄 QUICK REFERENCE

### Deploy Future Changes:
```bash
git add -A
git commit -m "Update description"
git push origin main
```

### Check Deployment Status:
Visit: https://console.vercel.com

### View Analytics:
Vercel Dashboard > Project > Analytics

### Update Content Later:
Edit `src/app/page.tsx` and push again

---

**Congratulations! 🎊 Your site is live!**

