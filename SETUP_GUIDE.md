# 🚀 Guide de Configuration - Pératsim Innovation

## ✅ Ce qui est déjà configuré

### 1. **Google Tag Manager** ✅
- ID: `GTM-TDVNFPCF`
- Installé sur toutes les pages
- Tracking WhatsApp et formulaires actif

### 2. **Structure du site** ✅
- FAQ (8 questions)
- Témoignages (templates)
- Équipe (templates)
- Portfolio (templates)
- Google Maps
- Bannière cookies RGPD

---

## ⚙️ Configuration à Compléter

### 📊 **1. Cloudflare Web Analytics**

#### Étape 1 : Créer un compte Cloudflare
1. Allez sur https://dash.cloudflare.com/sign-up
2. Créez un compte gratuit

#### Étape 2 : Activer Web Analytics
1. Dans le dashboard Cloudflare, cliquez sur "Analytics & Logs"
2. Sélectionnez "Web Analytics"
3. Cliquez sur "Add a site"
4. Entrez `peratsim.com`
5. Cloudflare vous donnera un **TOKEN**

#### Étape 3 : Ajouter le token au site
1. Ouvrez `index.html`
2. Ligne 5, remplacez :
   ```html
   <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "VOTRE_TOKEN_ICI"}'></script>
   ```
   Par :
   ```html
   <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "3fa799a0bcd14da295d37ea3a2ebada3"}'></script>
   ```

**Avantages de Cloudflare Analytics** :
- ✅ Gratuit
- ✅ Respecte la vie privée (pas de cookies)
- ✅ Ne nécessite pas de consentement RGPD
- ✅ Léger et rapide
- ✅ Bloqué par aucun ad-blocker

---

### 📅 **2. Calendly**

#### Étape 1 : Créer un compte Calendly
1. Allez sur https://calendly.com/signup
2. Créez un compte (version gratuite suffit)
3. Configurez vos disponibilités

#### Étape 2 : Obtenir votre URL Calendly
1. Dans Calendly, allez dans "Event Types"
2. Créez un événement "Consultation Gratuite - 30 min"
3. Notez votre URL (ex: `https://calendly.com/peratsim/consultation`)

#### Étape 3 : Remplacer l'URL dans le site
1. Ouvrez `index.html`
2. Cherchez (Ctrl+F) : `https://calendly.com/peratsim`
3. Ligne ~1321, remplacez par votre vraie URL :
   ```html
   <button type="button" class="btn btn-outline-light btn-lg rounded-pill px-5 mb-3"
           onclick="Calendly.initPopupWidget({url: 'https://calendly.com/VOTRE-NOM/consultation'});return false;">
   ```

**Configuration Calendly recommandée** :
- Durée : 30 minutes
- Buffer : 15 min entre RDV
- Questions à poser :
  - Nom de l'entreprise
  - Secteur d'activité
  - Type de projet
  - Budget estimé

---

## 🍪 **3. Gestion des Cookies - Déjà Configuré ✅**

La bannière cookies est déjà fonctionnelle et conforme RGPD :

### Fonctionnalités
- ✅ Apparaît 2 secondes après le chargement
- ✅ Mémorise le choix de l'utilisateur (localStorage)
- ✅ Boutons "Accepter" / "Refuser"
- ✅ Lien vers politique de confidentialité
- ✅ Design moderne et responsive
- ✅ Tracking du consentement dans GTM

### Comment ça marche
- Si l'utilisateur **accepte** → Cookies analytiques activés
- Si l'utilisateur **refuse** → Seuls cookies essentiels
- Le choix est sauvegardé → La bannière ne réapparaît pas

### Tester la bannière
1. Ouvrez le site
2. Attendez 2 secondes
3. La bannière apparaît en bas
4. Cliquez "Accepter" ou "Refuser"
5. Rechargez → La bannière ne réapparaît pas

### Réinitialiser pour tester
Ouvrez la console (F12) et tapez :
```javascript
localStorage.removeItem('cookieConsent');
location.reload();
```

---

## 📋 **Checklist de Vérification**

### Avant la mise en production

- [ ] **Cloudflare Analytics**
  - [ ] Compte créé
  - [ ] Token obtenu
  - [ ] Token ajouté dans index.html ligne 5
  - [ ] Site ajouté dans dashboard Cloudflare

- [ ] **Calendly**
  - [ ] Compte créé
  - [ ] Événement "Consultation" créé
  - [ ] URL personnalisée obtenue
  - [ ] URL mise à jour dans index.html ligne ~1321
  - [ ] Test du bouton "Réserver un RDV"

- [ ] **Contenu à personnaliser**
  - [ ] 3 témoignages avec vrais clients
  - [ ] 2 profils d'équipe complétés
  - [ ] 3 projets portfolio personnalisés
  - [ ] Statistiques ajustées si besoin
  - [ ] RCCM/IFU ajoutés (optionnel)

- [ ] **Tests finaux**
  - [ ] Site charge correctement
  - [ ] Toutes les animations fonctionnent
  - [ ] Formulaire WhatsApp fonctionne
  - [ ] Bouton Calendly ouvre le widget
  - [ ] Bannière cookies s'affiche
  - [ ] Google Maps s'affiche
  - [ ] Responsive mobile OK
  - [ ] Aucune erreur console

---

## 🔧 **Commandes Utiles**

### Tester le site localement
Si vous utilisez Live Server (VS Code) :
1. Clic droit sur `index.html`
2. "Open with Live Server"
3. Le site s'ouvre sur http://127.0.0.1:5500

### Vider le cache du navigateur
- Chrome/Edge : `Ctrl + Shift + Delete`
- Firefox : `Ctrl + Shift + Delete`
- Ou rechargez avec `Ctrl + F5`

### Voir les erreurs JavaScript
1. Appuyez sur `F12`
2. Onglet "Console"
3. Vérifiez qu'il n'y a pas d'erreurs rouges

---

## 📈 **Après la Mise en Ligne**

### Dashboard Cloudflare
- Visitez https://dash.cloudflare.com
- Onglet "Web Analytics"
- Visualisez :
  - Visiteurs uniques
  - Pages vues
  - Pays d'origine
  - Appareils utilisés

### Google Tag Manager
- Visitez https://tagmanager.google.com
- Container : GTM-TDVNFPCF
- Onglet "Overview" pour voir les déclenchements

### Calendly
- Dashboard : https://calendly.com/app
- Voyez les RDV réservés
- Gérez votre calendrier
- Envoyez rappels automatiques

---

## 🆘 **Support**

### Problèmes courants

**Calendly ne s'ouvre pas :**
- Vérifiez que l'URL est correcte
- Ouvrez la console (F12) pour voir les erreurs
- Vérifiez que le script Calendly est chargé

**Bannière cookies ne s'affiche pas :**
- Attendez 2 secondes après chargement
- Vérifiez localStorage (F12 → Application → Local Storage)
- Supprimez `cookieConsent` pour réafficher

**Cloudflare Analytics ne fonctionne pas :**
- Vérifiez le token (32 caractères alphanumériques)
- Attendez 24h pour voir les premières données
- Le script doit être `defer`

---

## 📧 **Contact**

Pour toute question technique :
- Email : contact@peratsim.com
- WhatsApp : +226 77 55 45 09

---

**Dernière mise à jour** : 10 janvier 2025
