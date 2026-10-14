import { whatsappUrl } from '@/lib/site'

const WhatsAppButton = () => {
  const href = whatsappUrl()
  if (!href) return null

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed right-4 bottom-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition hover:scale-105 sm:right-6 sm:bottom-6"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M16.04 3C8.86 3 3.05 8.8 3.05 15.97c0 2.29.6 4.52 1.74 6.49L3 29l6.72-1.76a12.96 12.96 0 0 0 6.31 1.61h.01c7.17 0 12.99-5.8 12.99-12.97C29.03 8.8 23.22 3 16.04 3Zm0 23.66h-.01a10.77 10.77 0 0 1-5.49-1.5l-.39-.23-3.99 1.04 1.07-3.88-.26-.4a10.7 10.7 0 0 1-1.65-5.72c0-5.95 4.85-10.78 10.82-10.78 2.89 0 5.6 1.12 7.64 3.16a10.7 10.7 0 0 1 3.16 7.63c0 5.95-4.85 10.78-10.9 10.68Zm5.92-8.07c-.32-.16-1.92-.95-2.22-1.06-.3-.11-.51-.16-.73.16-.22.32-.84 1.06-1.03 1.27-.19.22-.38.24-.7.08-.32-.16-1.37-.5-2.6-1.6-.96-.86-1.61-1.91-1.8-2.23-.19-.32-.02-.5.14-.66.15-.14.32-.38.49-.57.16-.19.22-.32.32-.54.11-.22.05-.4-.03-.57-.08-.16-.73-1.75-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.22 0-.57.08-.86.4-.3.32-1.13 1.1-1.13 2.69 0 1.58 1.16 3.12 1.32 3.33.16.22 2.28 3.48 5.52 4.88.77.33 1.37.53 1.84.68.77.25 1.48.21 2.03.13.62-.09 1.92-.78 2.19-1.54.27-.76.27-1.41.19-1.54-.08-.14-.3-.22-.62-.38Z" />
      </svg>
    </a>
  )
}

export default WhatsAppButton
