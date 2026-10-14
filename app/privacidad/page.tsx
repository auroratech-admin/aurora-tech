import type { Metadata } from 'next'
import LegalLayout from '@/components/legal-layout'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Política de privacidad',
  description: `Cómo ${site.legalName} trata los datos personales que recibe a través de su sitio web, conforme a la Ley N.° 29733.`,
  alternates: { canonical: '/privacidad/' },
}

// Borrador para revisión legal. Base: Ley N.° 29733 y su Reglamento (D.S. N.° 016-2024-JUS).
export default function PrivacidadPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Política de privacidad"
      updated="13 de octubre de 2026"
      intro={
        <p>
          En {site.legalName} respetamos tus datos personales. Esta política explica qué datos recogemos en{' '}
          {site.url.replace('https://', '')}, para qué los usamos, con quién los compartimos y cómo puedes ejercer tus
          derechos, conforme a la Ley N.° 29733, Ley de Protección de Datos Personales, y su Reglamento.
        </p>
      }
    >
      <h2>1. Responsable del tratamiento</h2>
      <table>
        <tbody>
          <tr><th>Razón social</th><td>{site.legalName}</td></tr>
          <tr><th>RUC</th><td>{site.ruc}</td></tr>
          <tr><th>Domicilio</th><td>{site.address}</td></tr>
          <tr><th>Correo de contacto</th><td>{site.email}</td></tr>
          <tr><th>Teléfono / WhatsApp</th><td>{site.phoneDisplay}</td></tr>
        </tbody>
      </table>

      <h2>2. Qué datos recogemos</h2>
      <p>Solo los datos que tú nos das voluntariamente:</p>
      <ul>
        <li><strong>Formulario de contacto:</strong> nombre, empresa o entidad, correo electrónico, teléfono (opcional), servicio de interés y el contenido de tu mensaje.</li>
        <li><strong>Libro de Reclamaciones:</strong> nombre, tipo y número de documento de identidad, domicilio, teléfono, correo electrónico, datos del padre, madre o apoderado si eres menor de edad, y el detalle de tu reclamo o queja.</li>
        <li><strong>WhatsApp y correo:</strong> los datos que compartas al escribirnos por esos medios.</li>
      </ul>
      <p>
        El sitio no utiliza cookies de publicidad ni de análisis, y no recoge datos sensibles. Nuestro proveedor de
        alojamiento registra de forma técnica la dirección IP y la fecha de cada visita para la seguridad y el
        funcionamiento del servidor.
      </p>

      <h2>3. Para qué usamos tus datos</h2>
      <ul>
        <li>Responder tu consulta y, si lo pides, enviarte una propuesta o cotización.</li>
        <li>Registrar y atender tu reclamo o queja en el Libro de Reclamaciones, como exige el Código de Protección y Defensa del Consumidor (Ley N.° 29571).</li>
        <li>Mantener la comunicación contigo durante la relación comercial o contractual que surja de tu consulta.</li>
      </ul>
      <p>
        No usamos tus datos para enviarte publicidad ni los vendemos o cedemos a terceros con fines comerciales. Si en
        el futuro quisiéramos usarlos para otra finalidad, te pediremos un consentimiento distinto.
      </p>

      <h2>4. Base legal</h2>
      <p>
        Tratamos los datos del formulario de contacto con tu <strong>consentimiento</strong> previo, libre, expreso e
        informado, que otorgas al marcar la casilla de autorización. Los datos del Libro de Reclamaciones se tratan para
        cumplir una <strong>obligación legal</strong>. Los datos necesarios para ejecutar un contrato contigo se tratan
        para su <strong>ejecución</strong>.
      </p>

      <h2>5. Con quién los compartimos</h2>
      <p>Para operar el sitio y comunicarnos contigo usamos estos proveedores, que actúan como encargados del tratamiento:</p>
      <ul>
        <li><strong>SiteGround</strong>: alojamiento del sitio web y envío de los formularios.</li>
        <li><strong>Google (Google Workspace)</strong>: correo electrónico corporativo donde recibimos tus mensajes.</li>
        <li><strong>Meta (WhatsApp)</strong>: solo si eliges escribirnos por WhatsApp.</li>
      </ul>
      <p>
        Estos proveedores pueden almacenar la información en servidores ubicados fuera del Perú, lo que constituye un
        flujo transfronterizo de datos personales. Los seleccionamos porque ofrecen niveles de protección adecuados.
        También podemos comunicar datos a autoridades competentes, como el INDECOPI, cuando la ley lo exija.
      </p>

      <h2>6. Cuánto tiempo los conservamos</h2>
      <ul>
        <li><strong>Consultas de contacto:</strong> hasta dos (2) años desde el último contacto, salvo que se convierta en una relación contractual o que antes revoques tu consentimiento.</li>
        <li><strong>Hojas del Libro de Reclamaciones:</strong> el plazo mínimo que exige la normativa de protección al consumidor.</li>
        <li><strong>Datos contractuales y de facturación:</strong> los plazos que exigen las normas tributarias y contables.</li>
      </ul>

      <h2>7. Tus derechos</h2>
      <p>
        Puedes ejercer en cualquier momento tus derechos de <strong>información, acceso, rectificación, cancelación,
        oposición y portabilidad</strong> (derechos ARCO), así como <strong>revocar tu consentimiento</strong>, sin
        efecto retroactivo.
      </p>
      <p>
        Para hacerlo, escribe a <a href={`mailto:${site.email}`}>{site.email}</a> con el asunto «Protección de datos»,
        indicando tu nombre, una copia de tu documento de identidad (o el de tu representante, con el poder
        correspondiente), el derecho que deseas ejercer y, si corresponde, los documentos que lo sustenten.
        Responderemos dentro de los plazos establecidos por el Reglamento de la Ley N.° 29733.
      </p>
      <p>
        Si consideras que no atendimos tu solicitud, puedes presentar una reclamación ante la Autoridad Nacional de
        Protección de Datos Personales del Ministerio de Justicia y Derechos Humanos.
      </p>

      <h2>8. Seguridad</h2>
      <p>
        Aplicamos medidas técnicas y organizativas para proteger tus datos: conexión cifrada (HTTPS), acceso restringido
        a la información y almacenamiento protegido de las hojas de reclamación. Si ocurriera un incidente de seguridad
        que afecte tus datos, lo comunicaremos a la autoridad y a ti en los términos que exige la normativa.
      </p>

      <h2>9. Banco de datos</h2>
      <p>
        Los datos se incorporan al banco de datos personales «Clientes y contactos» de titularidad de {site.legalName}
        {site.anpdRegistro ? `, inscrito en el Registro Nacional de Protección de Datos Personales con el código ${site.anpdRegistro}` : ''}.
      </p>

      <h2>10. Menores de edad</h2>
      <p>
        El formulario de contacto está dirigido a personas mayores de edad. Si eres menor de edad y deseas presentar un
        reclamo, el Libro de Reclamaciones solicita los datos de tu padre, madre o apoderado.
      </p>

      <h2>11. Cambios a esta política</h2>
      <p>
        Podemos actualizar esta política. Publicaremos la versión vigente en esta página con su fecha de actualización.
      </p>
    </LegalLayout>
  )
}
