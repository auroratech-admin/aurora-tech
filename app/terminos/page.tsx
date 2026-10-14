import type { Metadata } from 'next'
import LegalLayout from '@/components/legal-layout'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Términos de uso',
  description: `Condiciones de uso del sitio web de ${site.legalName}.`,
  alternates: { canonical: '/terminos/' },
}

export default function TerminosPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Términos de uso" updated="13 de octubre de 2026">
      <h2>1. Titular del sitio</h2>
      <p>
        Este sitio web pertenece a {site.legalName}, con RUC {site.ruc} y domicilio en {site.address}. Puedes
        contactarnos en <a href={`mailto:${site.email}`}>{site.email}</a> o al {site.phoneDisplay}.
      </p>

      <h2>2. Finalidad del sitio</h2>
      <p>
        El sitio presenta los servicios de la empresa y permite enviar consultas. La información publicada es
        referencial y no constituye una oferta vinculante. Las condiciones, precios y plazos de cada servicio se
        definen en la propuesta, cotización o contrato correspondiente.
      </p>

      <h2>3. Uso adecuado</h2>
      <p>
        Te comprometes a usar el sitio de forma lícita, a no enviar información falsa o de terceros sin autorización y
        a no intentar afectar su funcionamiento o seguridad.
      </p>

      <h2>4. Propiedad intelectual</h2>
      <p>
        Los textos, el diseño, el logotipo y la marca «Aurora Tech» son de titularidad de {site.legalName} o se usan
        con autorización. No está permitido reproducirlos con fines comerciales sin autorización previa y por escrito.
      </p>

      <h2>5. Enlaces externos</h2>
      <p>
        El sitio puede enlazar a servicios de terceros, como WhatsApp. No somos responsables del contenido ni de las
        políticas de esos sitios.
      </p>

      <h2>6. Datos personales</h2>
      <p>
        El tratamiento de tus datos se rige por nuestra <a href="/privacidad/">Política de privacidad</a>.
      </p>

      <h2>7. Reclamos</h2>
      <p>
        Puedes presentar un reclamo o queja en nuestro <a href="/libro-de-reclamaciones/">Libro de Reclamaciones</a>{' '}
        virtual.
      </p>

      <h2>8. Ley aplicable</h2>
      <p>
        Estos términos se rigen por las leyes de la República del Perú. Las controversias se someten a las autoridades
        competentes de Lima, sin perjuicio de los derechos que la ley otorga a los consumidores.
      </p>
    </LegalLayout>
  )
}
