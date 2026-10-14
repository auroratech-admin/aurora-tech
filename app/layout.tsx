import type { Metadata, Viewport } from 'next'
import { Public_Sans, Source_Serif_4 } from 'next/font/google'
import { site } from '@/lib/site'
import WhatsAppButton from '@/components/whatsapp-button'
import './globals.css'

const publicSans = Public_Sans({ subsets: ['latin'], variable: '--font-public-sans' })
const sourceSerif = Source_Serif_4({ subsets: ['latin'], weight: ['500', '600'], variable: '--font-source-serif' })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Aurora Tech S.A.C. | Desarrollo de software y servicios de TI en Lima',
    template: '%s | Aurora Tech',
  },
  description:
    'Desarrollo de software a medida, aplicaciones web y móviles, QA, cloud y ciberseguridad para empresas y entidades públicas del Perú. Proveedor del Estado con RNP vigente.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: site.url,
    siteName: site.legalName,
    title: 'Aurora Tech S.A.C. | Desarrollo de software y servicios de TI',
    description: 'Soluciones de software para empresas y entidades públicas del Perú.',
    images: ['/logo-aurora-tech.png'],
  },
  icons: {
    icon: '/icon-32x32.png',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#14233b',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-PE" className={`${publicSans.variable} ${sourceSerif.variable}`}>
      <body className="bg-paper font-sans text-ink antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
