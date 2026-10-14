import type { Metadata } from 'next'
import LegalLayout from '@/components/legal-layout'
import LibroReclamacionesForm from '@/components/libro-reclamaciones-form'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Libro de Reclamaciones',
  description: `Libro de Reclamaciones virtual de ${site.legalName}, conforme al Código de Protección y Defensa del Consumidor.`,
  alternates: { canonical: '/libro-de-reclamaciones/' },
}

export default function LibroReclamacionesPage() {
  return (
    <LegalLayout
      eyebrow="Atención al consumidor"
      title="Libro de Reclamaciones"
      prose={false}
      intro={
        <p>
          Conforme al Código de Protección y Defensa del Consumidor (Ley N.° 29571), {site.legalName} cuenta con un Libro
          de Reclamaciones virtual. Completa la hoja; al enviarla se le asigna un número y recibirás una copia en tu
          correo.
        </p>
      }
    >
      <LibroReclamacionesForm />
    </LegalLayout>
  )
}
