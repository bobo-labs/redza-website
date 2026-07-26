import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://www.redza.cl';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Redza | Transporte de carga y logística en Chile',
  description: 'Transporte de carga, distribución nacional y logística B2B en Chile. Coordinamos cada recorrido con atención directa y operación confiable.',
  keywords: ['transporte de carga en Chile', 'logística nacional', 'distribución B2B', 'transporte Santiago regiones', 'camiones con rampa hidráulica', 'Redza'],
  alternates: { canonical: '/' },
  openGraph: { title: 'Redza | Transporte de carga y logística en Chile', description: 'Tu carga no se detiene. Transporte y distribución nacional con Redza.', url: siteUrl, siteName: 'Redza Transporte y Logística', locale: 'es_CL', type: 'website', images: [{ url: '/images/redza branding/redza logo full.png', width: 1200, height: 630, alt: 'Redza Transporte y Logística' }] },
  twitter: { card: 'summary_large_image', title: 'Redza | Transporte de carga y logística en Chile', description: 'Transporte y distribución nacional con Redza.', images: ['/images/redza branding/redza logo full.png'] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Redza Transporte y Logística',
    url: siteUrl,
    image: `${siteUrl}/images/redza%20branding/redza%20logo%20full.png`,
    telephone: '+56 9 9149 9999',
    email: 'contacto@redza.cl',
    address: { '@type': 'PostalAddress', addressLocality: 'Santiago', addressRegion: 'Región Metropolitana', addressCountry: 'CL' },
    areaServed: [{ '@type': 'Country', name: 'Chile' }, { '@type': 'City', name: 'Santiago' }],
    serviceType: ['Transporte de carga', 'Distribución nacional', 'Logística B2B', 'Transporte con rampa hidráulica'],
    openingHours: 'Mo-Su 00:00-23:59',
  };
  const faqJsonLd = {
    '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: '¿Dónde opera Redza?', acceptedAnswer: { '@type': 'Answer', text: 'Redza coordina servicios de transporte urbano, regional y nacional desde Santiago hacia distintos puntos de Chile.' } },
      { '@type': 'Question', name: '¿Cómo puedo solicitar una cotización?', acceptedAnswer: { '@type': 'Answer', text: 'Puedes solicitar una cotización directamente por WhatsApp o llamando al +56 9 9149 9999.' } },
    ],
  };
  return <html lang="es"><head><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} /></head><body>{children}</body></html>;
}
