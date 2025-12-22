# Pératsim Innovation - Next.js 15 Premium Site

Site web premium pour Pératsim Innovation, construite avec Next.js 15, TypeScript, TailwindCSS et Framer Motion.

## 🚀 Caractéristiques

- ✨ **Interface Premium** - Design inspiré par Stripe, Vercel et autres leaders
- 📱 **Responsive** - Optimisé pour tous les appareils
- ⚡ **Performance** - Optimisé Lighthouse (95+)
- 🎨 **Design System** - Composants réutilisables avec TailwindCSS
- 📊 **SEO Optimisé** - Structured data, sitemap, robots.txt automatiques
- 🎯 **Conversions** - Multi-pages stratégiques (Pricing, Solutions, Blog, etc)
- 🔐 **Sécurisé** - Conformité et best practices de sécurité
- 📈 **Analytics Ready** - Google Tag Manager et Cloudflare Analytics intégrés

## 📋 Pages Incluses

- **Accueil** - Hero premium avec features et testimonials
- **Pricing** - Plans détaillés avec tableau comparatif
- **Solutions** - Solutions par secteur (Industrie 4.0, Agriculture, Fintech, etc)
- **Documentation** - Guides techniques et API reference
- **Resources** - Cas d'études, templates et webinaires
- **Blog** - Articles d'experts avec catégories
- **À propos** - Mission, vision, équipe et historique
- **Pages Légales** - Politique de confidentialité et mentions légales

## 🛠 Stack Technologique

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: TailwindCSS 3.4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Linting**: ESLint + Prettier
- **Hosting**: Vercel (recommandé)

## 📦 Installation

### Prérequis
- Node.js 18+
- npm ou yarn

### Étapes

```bash
# 1. Cloner le repository
git clone https://github.com/peratsim/peratsim.github.io
cd peratsim.github.io

# 2. Installer les dépendances
npm install

# 3. Créer le fichier .env.local
cp .env.example .env.local

# 4. Démarrer le serveur de développement
npm run dev
```

Le site est accessible sur `http://localhost:3000`

## 🏗 Structure du Projet

```
src/
├── app/                    # Next.js app router
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   ├── pricing/           # Page Tarifs
│   ├── solutions/         # Page Solutions
│   ├── docs/              # Page Documentation
│   ├── resources/         # Page Ressources
│   ├── blog/              # Blog
│   ├── about/             # À propos
│   ├── robots.ts          # Robots.txt
│   ├── sitemap.ts         # Sitemap XML
│   └── manifest.ts        # Web manifest
├── components/            # Composants réutilisables
│   ├── Button.tsx        # Bouton premium
│   ├── Card.tsx          # Carte réutilisable
│   ├── Badge.tsx         # Badge
│   ├── Container.tsx     # Conteneur
│   ├── Heading.tsx       # Titres
│   └── layout/           # Layouts
│       ├── Navbar.tsx    # Navigation
│       └── Footer.tsx    # Pied de page
├── lib/                   # Utilitaires
│   └── config.ts         # Configuration site
└── styles/
    └── globals.css       # Styles globaux
```

## 🎨 Design System

### Couleurs Principales
- **Primary**: #1e4d8b (Bleu professionnel)
- **Secondary**: #f39c12 (Orange doré)
- **Accent**: #2c5aa0 (Bleu accent)

### Composants Disponibles

#### Button
```tsx
<Button variant="primary|secondary|accent|outline|ghost" size="sm|md|lg|xl">
  Texte du bouton
</Button>
```

#### Card
```tsx
<Card hover elevated>
  Contenu de la carte
</Card>
```

#### Heading
```tsx
<Heading level={1|2|3|4|5|6} gradient>
  Titre
</Heading>
```

#### Badge
```tsx
<Badge variant="primary|secondary|accent|success|warning|error">
  Label
</Badge>
```

## 📊 Performance

### Optimisations implémentées
- Image optimization avec Next.js Image
- Code splitting automatique
- Font optimization
- CSS minimization
- Static generation où possible
- ISR (Incremental Static Regeneration)

### Cibles Lighthouse
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 🚀 Déploiement

### Sur Vercel (Recommandé)

```bash
# 1. Créer un compte Vercel
# 2. Connecter le repository GitHub
# 3. Déploiement automatique à chaque push

# Ou depuis la CLI:
npm i -g vercel
vercel
```

### Variables d'environnement Vercel
```
NEXT_PUBLIC_SITE_URL=https://www.peratsim.com
NEXT_PUBLIC_GA_ID=GTM-TDVNFPCF
NEXT_PUBLIC_CF_TOKEN=3fa799a0bcd14da295d37ea3a2ebada3
```

## 📝 Scripts Disponibles

```bash
npm run dev          # Démarrer le serveur dev
npm run build        # Build pour la production
npm start            # Démarrer le serveur prod
npm run lint         # Linter le code
npm run lint:fix     # Fixer les erreurs de lint
npm run format       # Formater le code
npm run type-check   # Vérifier les types TypeScript
```

## 🔍 SEO

### Implémenté
- ✅ Structured data (Schema.org)
- ✅ Open Graph meta tags
- ✅ Twitter Card
- ✅ Sitemap XML automatique
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Hreflang tags
- ✅ Mobile-first indexing

### À configurer
- Ajouter Google Search Console verification code
- Configurer Google Analytics
- Soumettre sitemap à Google

## 📧 Contact & Support

- **Email**: contact@peratsim.com
- **Téléphone**: +226 77 55 45 09
- **Localisation**: Ouagadougou, Burkina Faso

## 📄 Licence

© 2025 Pératsim Innovation. Tous droits réservés.

## 🤝 Contribution

Les contributions sont les bienvenues ! Veuillez créer une branche feature et soumettre une pull request.

## 📚 Ressources

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Framer Motion](https://www.framer.com/motion)

---

**Version**: 2.0.0  
**Dernière mise à jour**: 22 Décembre 2025
