import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Servicios from '@/components/servicios'
import Nosotros from '@/components/sobre-nosotros'
import SectorPublico from '@/components/sector-publico'
import Contacto from '@/components/contacto'
import Footer from '@/components/footer'
import { site } from '@/lib/site'

// Ficha de empresa para buscadores (Google).
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: site.legalName,
  url: site.url,
  logo: `${site.url}/logo-aurora-tech.png`,
  email: site.email,
  telephone: site.phoneDisplay,
  taxID: site.ruc,
  foundingDate: String(site.foundedYear),
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Cal. Verástegui 160, Zona C',
    addressLocality: 'San Juan de Miraflores',
    addressRegion: 'Lima',
    addressCountry: 'PE',
  },
  areaServed: 'PE',
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <Nosotros />
        <SectorPublico />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
