'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { navItems } from '@/lib/site'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/95 text-white backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="/#inicio" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image src="/logo-mark.svg" alt="" width={34} height={32} priority />
          <span className="text-[15px] font-semibold tracking-wide">
            AURORA <span className="font-medium tracking-[0.22em] text-mist">TECH</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item.id} href={`/#${item.id}`} className="text-sm text-mist transition hover:text-white">
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="/#contacto"
          className="hidden rounded-[3px] bg-white px-4 py-2 text-sm font-medium text-navy transition hover:bg-sand md:inline-flex"
        >
          Contacto
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-white hover:bg-white/10 md:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 px-4 pb-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`/#${item.id}`}
              onClick={() => setOpen(false)}
              className="block border-b border-white/10 px-1 py-3 text-sm text-mist hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/#contacto"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-[3px] bg-white px-4 py-3 text-center text-sm font-medium text-navy"
          >
            Conversemos sobre tu proyecto
          </a>
        </div>
      )}
    </header>
  )
}

export default Navbar
