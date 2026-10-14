import Image from 'next/image'
import { BookOpen } from 'lucide-react'
import { legalLinks, site, whatsappUrl } from '@/lib/site'
import { services } from '@/lib/services'

const Footer = () => (
  <footer className="bg-navy text-mist">
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr]">
      <div>
        <div className="flex items-center gap-2.5">
          <Image src="/logo-mark.png" alt="" width={34} height={30} />
          <span className="text-[15px] font-semibold tracking-wide text-white">
            AURORA <span className="font-medium tracking-[0.22em] text-mist">TECH</span>
          </span>
        </div>
        <p className="mt-4 max-w-xs text-sm text-mist">
          Desarrollo de software y servicios de tecnología de la información para empresas y entidades públicas.
        </p>
      </div>

      <div>
        <h3 className="text-xs font-semibold tracking-[0.14em] text-gold-300 uppercase">Servicios</h3>
        <ul className="mt-4 space-y-2">
          {services.map((s) => (
            <li key={s.slug}>
              <a href={`/servicios/${s.slug}/`} className="text-sm text-mist hover:text-white">
                {s.name}
              </a>
            </li>
          ))}
          <li>
            <a href="/sector-publico/" className="text-sm text-mist hover:text-white">
              Sector público
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-xs font-semibold tracking-[0.14em] text-gold-300 uppercase">Empresa</h3>
        <ul className="mt-4 space-y-2 text-sm text-mist">
          <li>{site.legalName}</li>
          <li>RUC {site.ruc}</li>
          <li>{site.district}</li>
          <li>
            <a href={whatsappUrl() ?? '#'} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              {site.phoneDisplay}
            </a>
          </li>
          {site.email && (
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
            </li>
          )}
          {site.linkedin && (
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
            </li>
          )}
        </ul>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between">
        {/* Aviso del Libro de Reclamaciones (Ley 29571): visible en todas las páginas, incluida la de inicio. */}
        <a
          href="/libro-de-reclamaciones/"
          className="inline-flex w-fit items-center gap-3 rounded-[3px] border border-white/25 bg-white px-4 py-2.5 text-navy transition hover:bg-sand"
        >
          <BookOpen className="h-6 w-6" aria-hidden="true" />
          <span className="text-sm leading-tight font-semibold">
            Libro de
            <br />
            Reclamaciones
          </span>
        </a>
        <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-mist">
          {legalLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
        <p className="text-xs text-mist/70">
          © {new Date().getFullYear()} {site.legalName} RUC {site.ruc}
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
