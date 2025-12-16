import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Met à jour l'app automatiquement dès qu'un changement est détecté
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'PostureFix AI',
        short_name: 'PostureFix',
        description: 'Correction de posture en temps réel grâce à l\'IA mobile.',
        theme_color: '#10B981', // Emerald-500 (votre couleur wellness)
        background_color: '#F9FAFB', // Gris très clair (votre fond)
        display: 'standalone', // Cache l'interface du navigateur (URL, boutons retour)
        orientation: 'portrait',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable', // Pour que l'icône s'adapte aux formes des téléphones Android
          },
        ],
      },
      workbox: {
        // Optimisation pour les fichiers lourds de MediaPipe
        globPatterns: ['**/*.{js,css,html,ico,png,svg,wasm}'],
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // Augmenté à 10MB pour le modèle d'IA
      },
    }),
  ],
});
