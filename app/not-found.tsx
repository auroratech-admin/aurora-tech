import LegalLayout from '@/components/legal-layout'

export default function NotFound() {
  return (
    <LegalLayout eyebrow="Error 404" title="No encontramos esta página" prose={false}>
      <p className="text-base text-body">
        Es posible que el enlace haya cambiado.{' '}
        <a href="/" className="font-medium text-ink underline underline-offset-2">
          Vuelve al inicio
        </a>
        .
      </p>
    </LegalLayout>
  )
}
