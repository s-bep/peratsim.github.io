# Instructions de déploiement Vercel

## Option Rapide : Déployer directement depuis GitHub

1. **Connecter votre repository GitHub à Vercel**
   - Allez sur https://vercel.com
   - Connectez-vous avec votre compte GitHub
   - Cliquez "Add New" → "Project"
   - Sélectionnez le repository `peratsim.github.io`

2. **Configuration d'environnement**
   - Dans Vercel, allez à "Settings" → "Environment Variables"
   - Ajoutez :
     ```
     NEXT_PUBLIC_SITE_URL=https://www.peratsim.com
     NEXT_PUBLIC_GA_ID=GTM-TDVNFPCF
     NEXT_PUBLIC_CF_TOKEN=3fa799a0bcd14da295d37ea3a2ebada3
     ```

3. **Déployer**
   - Vercel détecte automatiquement Next.js
   - Cliquez "Deploy"
   - Attendez 3-5 minutes

## Option Locale : Installation sur votre machine

### Si vous avez des problèmes d'espace disque

1. **Libérer de l'espace disque**
   ```powershell
   # Nettoyer les fichiers temporaires Windows
   Disk Cleanup
   # Ou via PowerShell (Admin):
   Remove-Item C:\Windows\Temp\* -Recurse -Force
   ```

2. **Installation Light de Node.js**
   ```powershell
   # Installer Node.js 20 LTS (version courte)
   # https://nodejs.org/en/download/
   
   # Vérifier:
   node --version
   npm --version
   ```

3. **Installation du projet**
   ```powershell
   cd "c:\Users\perat\OneDrive\Documents\Entreprise\Pératsim Innovation\Site\peratsim.github.io"
   
   # Installer avec flag --no-optional
   npm install --legacy-peer-deps --prefer-offline
   
   # Démarrer le dev
   npm run dev
   ```

   Accessible sur http://localhost:3000

## Déploiement en Production

### Avec Vercel (Recommandé - Gratuit)
```bash
# CLI method
npm i -g vercel
vercel
# Suivez les instructions
```

### Avec GitHub Pages (Alternative)
```bash
npm run build
# Les fichiers statiques sont dans .next/static
```

## Troubleshooting

### Erreur: "ENOSPC: no space left on device"
- Libérer au moins 5GB d'espace disque
- Ou installer sur un autre disque avec plus d'espace

### Erreur: "Module not found"
```bash
# Supprimer et réinstaller
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install --legacy-peer-deps
```

### Port 3000 déjà utilisé
```bash
npm run dev -- -p 3001
```

## Vérification après déploiement

- [ ] Accueil charge rapidement
- [ ] Navbar fonctionne et responsive
- [ ] Pricing affiche les plans
- [ ] Links internes fonctionnent
- [ ] Footer visible partout
- [ ] Mobile-friendly (testez sur téléphone)
- [ ] Google Analytics fonctionne
- [ ] Sitemap.xml accessible

---

**Support**: Contactez contact@peratsim.com
