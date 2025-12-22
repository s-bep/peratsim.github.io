import type { Metadata } from 'next';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Card from '@/components/Card';
import Badge from '@/components/Badge';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles et insights sur l\'IA, l\'automatisation et la transformation digitale.',
};

export default function BlogPage() {
  const posts = [
    {
      title: 'Les 5 tendances IA pour 2025',
      excerpt:
        'Découvrez les technologies qui vont transformer l\'industrie cette année : GenAI, Models multimodaux...',
      author: 'Dr. Youssouf Cissé',
      date: '20 Déc 2025',
      category: 'Tendances',
      readTime: '8 min',
      featured: true,
    },
    {
      title: 'Comment implémenter l\'IA sans expertise technique',
      excerpt:
        'Un guide pratique pour les PME qui souhaitent adopter l\'IA sans recruter une équipe d\'experts.',
      author: 'Mariam Traoré',
      date: '18 Déc 2025',
      category: 'Guide',
      readTime: '12 min',
      featured: false,
    },
    {
      title: 'Cybersécurité et IA : les nouveaux défis',
      excerpt: 'Comprendre les risques de sécurité liés à l\'IA et comment s\'en protéger.',
      author: 'Kassoum Diallo',
      date: '15 Déc 2025',
      category: 'Sécurité',
      readTime: '10 min',
      featured: false,
    },
    {
      title: 'Études de cas : IA agricole en Afrique',
      excerpt:
        'Comment des exploitations agricoles augmentent leurs rendements de 35% avec l\'IA et l\'IoT.',
      author: 'Fatoumata Keita',
      date: '12 Déc 2025',
      category: 'Cas d\'étude',
      readTime: '15 min',
      featured: true,
    },
    {
      title: 'Conformité réglementaire et IA en 2025',
      excerpt:
        'Nouveaux cadres réglementaires et comment vous y conformer avec nos solutions sécurisées.',
      author: 'Dr. Youssouf Cissé',
      date: '10 Déc 2025',
      category: 'Réglementation',
      readTime: '9 min',
      featured: false,
    },
    {
      title: 'ROI de l\'IA : Comment mesurer et maximiser',
      excerpt:
        'Métriques et stratégies pour évaluer et augmenter le retour sur investissement de vos projets IA.',
      author: 'Mariam Traoré',
      date: '8 Déc 2025',
      category: 'Business',
      readTime: '11 min',
      featured: false,
    },
  ];

  const featured = posts.filter((p) => p.featured);
  const regular = posts.filter((p) => !p.featured);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 justify-center">Blog</Badge>
            <Heading level={1} className="mb-4">
              Insights et articles d&apos;experts
            </Heading>
            <p className="text-xl text-neutral-600">
              Découvrez les dernières tendances en IA, automatisation et transformation digitale.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Posts */}
      {featured.length > 0 && (
        <section className="section-padding bg-white">
          <Container>
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-8">Articles en vedette</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featured.map((post, index) => (
                  <Card key={index} hover elevated>
                    <Badge variant="secondary" className="mb-4">
                      {post.category}
                    </Badge>
                    <h3 className="text-2xl font-bold mb-3">{post.title}</h3>
                    <p className="text-neutral-600 mb-6">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-neutral-600 mb-6 pb-6 border-b border-neutral-200">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div>{post.readTime}</div>
                    </div>
                    <Button variant="outline" size="sm">
                      Lire l&apos;article
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* All Posts */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <h2 className="text-2xl font-bold mb-8">Tous les articles</h2>
          <div className="space-y-6">
            {regular.map((post, index) => (
              <Card key={index} hover className="flex items-start justify-between">
                <div className="flex-1">
                  <Badge size="sm" variant="primary" className="mb-3">
                    {post.category}
                  </Badge>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-neutral-600 mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div>{post.readTime}</div>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-white">
        <Container className="max-w-2xl">
          <Card elevated className="bg-gradient-to-r from-primary-50 to-secondary-50 text-center">
            <Heading level={3} className="mb-4">
              Ne manquez aucun article
            </Heading>
            <p className="text-neutral-600 mb-6">
              Recevez nos articles directement dans votre boîte mail.
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
