import Link from 'next/link';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Heading from '@/components/Heading';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center pt-20">
      <Container className="text-center py-20">
        <div className="text-6xl font-bold text-primary-600 mb-4">404</div>
        <Heading level={1} className="mb-4">
          Page non trouvée
        </Heading>
        <p className="text-xl text-neutral-600 mb-8">
          Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link href="/">
          <Button size="lg">
            Retour à l&apos;accueil
          </Button>
        </Link>
      </Container>
    </main>
  );
}
