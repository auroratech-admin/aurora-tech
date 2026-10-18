'use client'

import { useState } from 'react'
import { site } from '@/lib/site'

// Hoja de reclamación virtual según el Anexo del Reglamento del Libro de Reclamaciones
// (D.S. 011-2011-PCM y modificatorias). Sin casillas de aceptación obligatorias.

const empty = {
  nombre: '',
  tipoDoc: 'DNI',
  numDoc: '',
  domicilio: '',
  telefono: '',
  email: '',
  menor: false,
  apoderado: '',
  tipoBien: 'Servicio',
  monto: '',
  descripcionBien: '',
  tipo: 'Reclamo',
  detalle: '',
  pedido: '',
}

const input =
  'w-full rounded-[3px] border border-rule bg-white px-3 py-2.5 text-sm text-ink focus:border-navy focus:ring-2 focus:ring-navy/10 focus:outline-none'
const label = 'mb-1.5 block text-sm font-medium text-ink'

const Fieldset = ({ n, title, children }: { n: number; title: string; children: React.ReactNode }) => (
  <fieldset className="border-t border-rule pt-6">
    <legend className="text-xs font-semibold tracking-[0.14em] text-terracota uppercase">
      {n}. {title}
    </legend>
    <div className="mt-4 grid gap-5 sm:grid-cols-2">{children}</div>
  </fieldset>
)

export default function LibroReclamacionesForm() {
  const [form, setForm] = useState(empty)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = useState('')
  const [result, setResult] = useState<{ numero: string; fecha: string } | null>(null)
  const today = new Date().toLocaleDateString('es-PE', { day: '2-digit', month: '2-digit', year: 'numeric' })

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }))
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    setError('')
    const website = (new FormData(e.currentTarget).get('website') as string) ?? ''
    try {
      const res = await fetch('/api/reclamo.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, website }),
      })
      const data = await res.json().catch(() => null)
      if (!res.ok || !data?.ok) throw new Error(data?.error ?? '')
      setResult({ numero: data.numero, fecha: data.fecha })
      setStatus('sent')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error && err.message && !/fetch|JSON/i.test(err.message) ? err.message : 'No pudimos registrar tu hoja.')
    }
  }

  if (status === 'sent' && result) {
    return (
      <div className="rounded-[3px] border border-rule bg-white p-6 sm:p-8">
        <p className="text-xs font-semibold tracking-[0.14em] text-terracota uppercase">Hoja registrada</p>
        <h2 className="mt-2 font-serif text-2xl font-medium text-ink">Hoja de reclamación N.° {result.numero}</h2>
        <p className="mt-3 text-sm leading-relaxed text-body">
          Registramos tu {form.tipo.toLowerCase()} el {result.fecha}. Enviamos una copia de la hoja a{' '}
          <strong className="text-ink">{form.email}</strong>. Te responderemos en un plazo no mayor a quince (15) días
          hábiles improrrogables. Guarda el número de tu hoja para cualquier seguimiento.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8 rounded-[3px] border border-rule bg-white p-6 sm:p-8">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <div className="grid gap-3 text-sm sm:grid-cols-2">
        <p><span className="text-body">Fecha:</span> <strong className="text-ink">{today}</strong></p>
        <p><span className="text-body">Hoja N.°:</span> <strong className="text-ink">se asigna al enviar</strong></p>
        <p className="sm:col-span-2 text-body">
          <strong className="text-ink">{site.legalName}</strong> · RUC {site.ruc} · {site.address}
        </p>
      </div>

      <Fieldset n={1} title="Identificación del consumidor reclamante">
        <div className="sm:col-span-2">
          <label htmlFor="lr-nombre" className={label}>Nombre completo *</label>
          <input id="lr-nombre" name="nombre" required value={form.nombre} onChange={set} className={input} />
        </div>
        <div>
          <label htmlFor="lr-tipoDoc" className={label}>Tipo de documento *</label>
          <select id="lr-tipoDoc" name="tipoDoc" value={form.tipoDoc} onChange={set} className={input}>
            <option>DNI</option>
            <option value="CE">Carné de extranjería</option>
            <option>Pasaporte</option>
            <option>RUC</option>
          </select>
        </div>
        <div>
          <label htmlFor="lr-numDoc" className={label}>Número de documento *</label>
          <input id="lr-numDoc" name="numDoc" required value={form.numDoc} onChange={set} className={input} inputMode="numeric" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="lr-domicilio" className={label}>Domicilio *</label>
          <input id="lr-domicilio" name="domicilio" required value={form.domicilio} onChange={set} className={input} />
        </div>
        <div>
          <label htmlFor="lr-telefono" className={label}>Teléfono</label>
          <input id="lr-telefono" name="telefono" type="tel" value={form.telefono} onChange={set} className={input} />
        </div>
        <div>
          <label htmlFor="lr-email" className={label}>Correo electrónico *</label>
          <input id="lr-email" name="email" type="email" required value={form.email} onChange={set} className={input} />
        </div>
        <label className="flex items-center gap-2 text-sm text-ink sm:col-span-2">
          <input type="checkbox" name="menor" checked={form.menor} onChange={set} className="h-4 w-4 accent-[#14233b]" />
          Soy menor de edad
        </label>
        {form.menor && (
          <div className="sm:col-span-2">
            <label htmlFor="lr-apoderado" className={label}>Nombre del padre, madre o apoderado *</label>
            <input id="lr-apoderado" name="apoderado" required value={form.apoderado} onChange={set} className={input} />
          </div>
        )}
      </Fieldset>

      <Fieldset n={2} title="Identificación del bien contratado">
        <div>
          <label htmlFor="lr-tipoBien" className={label}>Tipo *</label>
          <select id="lr-tipoBien" name="tipoBien" value={form.tipoBien} onChange={set} className={input}>
            <option>Servicio</option>
            <option>Producto</option>
          </select>
        </div>
        <div>
          <label htmlFor="lr-monto" className={label}>Monto reclamado (S/)</label>
          <input id="lr-monto" name="monto" value={form.monto} onChange={set} className={input} inputMode="decimal" placeholder="0.00" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="lr-descripcionBien" className={label}>Descripción del producto o servicio *</label>
          <textarea id="lr-descripcionBien" name="descripcionBien" required rows={2} value={form.descripcionBien} onChange={set} className={`${input} resize-y`} />
        </div>
      </Fieldset>

      <Fieldset n={3} title="Detalle de la reclamación y pedido del consumidor">
        <div className="sm:col-span-2">
          <span className={label}>Tipo *</span>
          <div className="flex flex-wrap gap-6 text-sm text-ink">
            {['Reclamo', 'Queja'].map((t) => (
              <label key={t} className="flex items-center gap-2">
                <input type="radio" name="tipo" value={t} checked={form.tipo === t} onChange={set} className="accent-[#14233b]" />
                {t}
              </label>
            ))}
          </div>
          <p className="mt-2 text-xs leading-relaxed text-body">
            <strong className="text-ink">Reclamo:</strong> disconformidad relacionada a los productos o servicios.{' '}
            <strong className="text-ink">Queja:</strong> disconformidad no relacionada a los productos o servicios, o
            malestar o descontento respecto a la atención al público.
          </p>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="lr-detalle" className={label}>Detalle *</label>
          <textarea id="lr-detalle" name="detalle" required rows={5} value={form.detalle} onChange={set} className={`${input} resize-y`} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="lr-pedido" className={label}>Pedido *</label>
          <textarea id="lr-pedido" name="pedido" required rows={3} value={form.pedido} onChange={set} className={`${input} resize-y`} />
        </div>
      </Fieldset>

      <div className="space-y-2 border-t border-rule pt-6 text-xs leading-relaxed text-body">
        <p>
          La formulación del reclamo no impide acudir a otras vías de solución de controversias ni es requisito previo
          para interponer una denuncia ante el INDECOPI.
        </p>
        <p>El proveedor deberá dar respuesta al reclamo o queja en un plazo no mayor a quince (15) días hábiles improrrogables.</p>
        <p>
          Al enviar, recibirás una copia de esta hoja en tu correo. Tus datos se tratan para atender tu reclamo, según
          nuestra <a href="/privacidad/" className="text-ink underline underline-offset-2">Política de privacidad</a>.
        </p>
      </div>

      <div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full rounded-[3px] bg-navy px-6 py-3 text-sm font-medium text-white transition hover:bg-navy-800 disabled:cursor-wait disabled:opacity-60 sm:w-auto"
        >
          {status === 'sending' ? 'Enviando…' : 'Enviar hoja de reclamación'}
        </button>
        <div aria-live="polite">
          {status === 'error' && (
            <p className="mt-3 text-sm text-red-700">
              {error} Puedes enviarnos tu reclamo a <a href={`mailto:${site.email}`} className="underline">{site.email}</a>.
            </p>
          )}
        </div>
      </div>
    </form>
  )
}
