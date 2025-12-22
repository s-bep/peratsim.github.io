export default function manifest() {
  return {
    name: 'Pératsim Innovation - Solutions IA Premium',
    short_name: 'Pératsim',
    description: 'Solutions d\'Intelligence Artificielle de classe mondiale',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1e4d8b',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-192-maskable.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
