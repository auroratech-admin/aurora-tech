'use client'

import { useState } from 'react'
import { Mail, MapPin, Building2, MessageCircle } from 'lucide-react'
import SectionHeader from '@/components/section-header'
import { site, whatsappUrl } from '@/lib/site'

const services = [
  'Software a medida',
  'Aplicación web o móvil',
  'QA y automatización',
  'Cloud e infraestructura',
  'Ciberseguridad',
  'Datos, BI e IA',
  'Requerimiento de entidad pública',
  'Otro',
]

const inputClass =
  'w-full rounded-[3px] border border-rule bg-white px-3 py-2.5 text-sm text-ink transition placeholder:text-body/60 focus:border-navy focus:ring-2 focus:ring-navy/10 focus:outline-none'
const labelClass = 'mb-1.5 block text-sm font-medium text-ink'

const Contacto = () => {
  const [form, setForm] = useState({ nombre: '', empresa: '', email: '', telefono: '', servicio: '', mensaje: '' })
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  // Envío por public/api/contacto.php (PHP en SiteGround). En `pnpm dev` no hay PHP: se muestra el aviso de error.
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    setError('')
    const website = (new FormData(e.currentTarget).get('website') as string) ?? ''
    try {
      const res = await fetch('/api/contacto.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, consentimiento: consent, website }),
      })
      const data = await res.json().catch(() => null)
      if (!res.ok || !data?.ok) throw new Error(data?.error ?? 'No pudimos enviar tu mensaje.')
      setStatus('sent')
      setForm({ nombre: '', empresa: '', email: '', telefono: '', servicio: '', mensaje: '' })
      setConsent(false)
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error && !/fetch|JSON/i.test(err.message) ? err.message : 'No pudimos enviar tu mensaje.')
    }
  }

  const info = [
    { icon: MapPin, label: 'Dirección', value: site.address },
    { icon: Building2, label: 'RUC', value: site.ruc },
    site.email && { icon: Mail, label: 'Correo', value: site.email, href: `mailto:${site.email}` },
    site.whatsapp && { icon: MessageCircle, label: 'WhatsApp', value: site.phoneDisplay, href: whatsappUrl() ?? undefined },
  ].filter(Boolean) as { icon: typeof Mail; label: string; value: string; href?: string }[]

  return (
    <section id="contacto" className="border-t border-rule bg-paper py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeader
            eyebrow="Contacto"
            title="Conversemos sobre tu proyecto"
            description="Cuéntanos qué necesitas y te enviaremos una propuesta o cotización formal."
          />

          <dl className="mt-10 space-y-5">
            {info.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[3px] border border-rule bg-white text-terracota">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-[0.14em] text-body uppercase">{label}</dt>
                  <dd className="mt-0.5 text-sm font-medium text-ink">
                    {href ? (
                      <a href={href} className="hover:text-terracota">
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <form onSubmit={onSubmit} className="rounded-[3px] border border-rule bg-white p-6 sm:p-8">
          <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="nombre" className={labelClass}>Nombre completo</label>
              <input id="nombre" name="nombre" required value={form.nombre} onChange={onChange} className={inputClass} />
            </div>
            <div>
              <label htmlFor="empresa" className={labelClass}>Empresa o entidad</label>
              <input id="empresa" name="empresa" required value={form.empresa} onChange={onChange} className={inputClass} />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>Correo</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={onChange} className={inputClass} />
            </div>
            <div>
              <label htmlFor="telefono" className={labelClass}>Teléfono</label>
              <input id="telefono" name="telefono" type="tel" value={form.telefono} onChange={onChange} className={inputClass} placeholder="+51 9XX XXX XXX" />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="servicio" className={labelClass}>Servicio de interés</label>
            <select id="servicio" name="servicio" required value={form.servicio} onChange={onChange} className={inputClass}>
              <option value="">Selecciona una opción</option>
              {services.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="mt-5">
            <label htmlFor="mensaje" className={labelClass}>Mensaje</label>
            <textarea id="mensaje" name="mensaje" required rows={4} value={form.mensaje} onChange={onChange} className={`${inputClass} resize-none`} placeholder="Describe brevemente tu requerimiento" />
          </div>

          <label className="mt-5 flex items-start gap-3 text-xs leading-relaxed text-body">
            <input
              type="checkbox"
              required
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-rule accent-[#14233b]"
            />
            <span>
              Autorizo a {site.legalName} a tratar mis datos personales para atender mi consulta, conforme a la{' '}
              <a href="/privacidad/" target="_blank" className="font-medium text-ink underline underline-offset-2">
                Política de privacidad
              </a>{' '}
              y la Ley N.° 29733.
            </span>
          </label>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-6 w-full rounded-[3px] bg-navy px-6 py-3 text-sm font-medium text-white transition hover:bg-navy-800 disabled:cursor-wait disabled:opacity-60"
          >
            {status === 'sending' ? 'Enviando…' : 'Enviar consulta'}
          </button>
          <div aria-live="polite" className="mt-3 text-center text-sm">
            {status === 'sent' && (
              <p className="text-emerald-700">Recibimos tu consulta. Te responderemos a la brevedad desde {site.email}.</p>
            )}
            {status === 'error' && (
              <p className="text-red-700">
                {error} Escríbenos a <a href={`mailto:${site.email}`} className="underline">{site.email}</a> o por{' '}
                <a href={whatsappUrl() ?? '#'} target="_blank" rel="noopener noreferrer" className="underline">WhatsApp</a>.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contacto
