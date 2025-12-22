#!/bin/bash
# Aide rapide pour démarrer le projet

echo "=================================="
echo "🚀 Pératsim Innovation - Next.js v2.0"
echo "=================================="
echo ""

# Vérifier Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js n'est pas installé"
    echo "👉 Téléchargez-le sur https://nodejs.org"
    exit 1
fi

echo "✅ Node.js trouvé: $(node --version)"
echo "✅ NPM trouvé: $(npm --version)"
echo ""

# Proposer options
echo "Que voulez-vous faire ?"
echo ""
echo "1) Déployer sur Vercel (RECOMMANDÉ)"
echo "2) Installer localement"
echo "3) Voir la documentation"
echo ""
read -p "Entrez votre choix (1-3): " choice

case $choice in
    1)
        echo ""
        echo "📋 Déploiement Vercel:"
        echo ""
        echo "1. Installez Vercel CLI:"
        echo "   npm install -g vercel"
        echo ""
        echo "2. Déployez:"
        echo "   vercel"
        echo ""
        echo "3. Suivez les instructions"
        echo ""
        echo "⏱️  Temps d'installation: 3-5 minutes"
        echo ""
        ;;
    2)
        echo ""
        echo "📥 Installation locale..."
        echo ""
        npm install --legacy-peer-deps
        echo ""
        echo "✅ Installation terminée !"
        echo ""
        echo "Démarrez le serveur:"
        echo "   npm run dev"
        echo ""
        echo "Ouvrez http://localhost:3000"
        echo ""
        ;;
    3)
        echo ""
        echo "📚 Documentation disponible:"
        echo ""
        echo "1. README_NEXTJS.md - Guide technique complet"
        echo "2. DEPLOYMENT_GUIDE.md - Instructions déploiement"
        echo "3. MIGRATION_GUIDE.md - Détails migration"
        echo "4. SUMMARY.md - Résumé complet"
        echo "5. STATUS.md - Checklist et prochaines étapes"
        echo ""
        ;;
esac
