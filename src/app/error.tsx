'use client';

import Link from 'next/link';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Heading from '@/components/Heading';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center pt-20">
      <Container className="text-center py-20">
        <div className="text-6xl font-bold text-red-600 mb-4">⚠️</div>
        <Heading level={1} className="mb-4">
          Une erreur s&apos;est produite
        </Heading>
        <p className="text-xl text-neutral-600 mb-8">
          Nous sommes désolés, une erreur inattendue s&apos;est produite. Veuillez réessayer.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" onClick={() => reset()}>
            Réessayer
          </Button>
          <Link href="/">
            <Button size="lg" variant="outline">
              Accueil
            </Button>
          </Link>
        </div>
      </Container>
    </main>
  );
}
