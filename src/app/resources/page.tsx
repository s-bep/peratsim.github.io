import type { Metadata } from 'next';
import { Download, FileText, Video, BarChart3 } from 'lucide-react';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Card from '@/components/Card';
import Badge from '@/components/Badge';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Ressources',
  description: 'Cas d\'études, guides et ressources pour vous aider à réussir avec Pératsim.',
};

export default function ResourcesPage() {
  const resources = [
    {
      type: 'Case Study',
      icon: BarChart3,
      title: 'Augmentation de 40% de la productivité en industrie',
      description: 'Comment une entreprise manufacturière a modernisé ses processus avec l\'IA',
      category: 'Industrie',
      cta: 'Lire l\'étude',
    },
    {
      type: 'Guide',
      icon: FileText,
      title: 'Guide complet : Implémentation IA en 2025',
      description: 'Un guide pratique pour démarrer votre transformation IA',
      category: 'Education',
      cta: 'Télécharger',
    },
    {
      type: 'Webinar',
      icon: Video,
      title: 'Webinaire : Avenir de l\'IA en Afrique',
      description: 'Tendances, opportunités et défis de l\'IA pour le continent africain',
      category: 'Événement',
      cta: 'Regarder',
    },
    {
      type: 'Case Study',
      icon: BarChart3,
      title: 'Transformation numérique agricole : +35% rendement',
      description: 'Comment des agriculteurs ont augmenté leurs rendements avec la technologie',
      category: 'Agriculture',
      cta: 'Lire l\'étude',
    },
    {
      type: 'Template',
      icon: Download,
      title: 'Template : Plan de transformation IA',
      description: 'Document de planification complète pour votre projet IA',
      category: 'Outils',
      cta: 'Télécharger',
    },
    {
      type: 'Rapport',
      icon: BarChart3,
      title: 'Rapport : État de l\'IA en Afrique de l\'Ouest',
      description: 'Analyse complète du marché et des opportunités régionales',
      category: 'Recherche',
      cta: 'Lire',
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 justify-center">Ressources</Badge>
            <Heading level={1} className="mb-4">
              Cas d&apos;études et guides pratiques
            </Heading>
            <p className="text-xl text-neutral-600">
              Apprenez comment d&apos;autres organisations ont réussi leur transformation IA.
            </p>
          </div>
        </Container>
      </section>

      {/* Resources Grid */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Card key={index} hover>
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="w-8 h-8 text-primary-600" />
                    <Badge size="sm" variant="secondary">
                      {resource.type}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                  <p className="text-neutral-600 mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <Badge size="sm" variant="primary">
                      {resource.category}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      {resource.cta} →
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Newsletter Signup */}
          <Card elevated className="bg-gradient-to-r from-primary-50 to-secondary-50 text-center max-w-2xl mx-auto">
            <Heading level={3} className="mb-4">
              Recevez nos dernières ressources
            </Heading>
            <p className="text-neutral-600 mb-6">
              Inscrivez-vous à notre newsletter pour recevoir cas d&apos;études, guides et webinaires.
            </p>
            <form className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email..."
                className="flex-1 px-4 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <Button>S&apos;abonner</Button>
            </form>
          </Card>
        </Container>
      </section>
    </main>
  );
}
