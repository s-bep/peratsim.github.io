import type { Metadata } from 'next';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Card from '@/components/Card';
import Badge from '@/components/Badge';

export const metadata: Metadata = {
  title: 'Documentation',
  description: 'Documentation complète et guides techniques pour les solutions Pératsim.',
};

export default function DocsPage() {
  const docSections = [
    {
      title: 'Getting Started',
      description: 'Commencez rapidement avec nos solutions',
      docs: [
        { title: 'Introduction', slug: 'introduction' },
        { title: 'Installation', slug: 'installation' },
        { title: 'Configuration', slug: 'configuration' },
      ],
    },
    {
      title: 'API Reference',
      description: 'Documentation complète de l\'API',
      docs: [
        { title: 'Authentication', slug: 'auth' },
        { title: 'Endpoints', slug: 'endpoints' },
        { title: 'Error Handling', slug: 'errors' },
      ],
    },
    {
      title: 'Guides',
      description: 'Tutoriels et bonnes pratiques',
      docs: [
        { title: 'Intégration', slug: 'integration' },
        { title: 'Sécurité', slug: 'security' },
        { title: 'Performance', slug: 'performance' },
      ],
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 justify-center">Documentation</Badge>
            <Heading level={1} className="mb-4">
              Documentation Technique
            </Heading>
            <p className="text-xl text-neutral-600">
              Guides complets et références API pour intégrer nos solutions.
            </p>
          </div>
        </Container>
      </section>

      {/* Documentation Sections */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {docSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                <p className="text-neutral-600 text-sm mb-6">{section.description}</p>
                <ul className="space-y-3">
                  {section.docs.map((doc, i) => (
                    <li key={i}>
                      <a
                        href={`/docs/${doc.slug}`}
                        className="text-primary-600 hover:underline font-medium"
                      >
                        {doc.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-primary-50 border border-primary-200 rounded-lg p-8 text-center">
            <p className="text-neutral-700 mb-4">
              👨‍💻 La documentation complète sera disponible après activation de votre compte.
            </p>
            <p className="text-sm text-neutral-600">
              Contactez notre support pour accéder aux ressources techniques détaillées.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
