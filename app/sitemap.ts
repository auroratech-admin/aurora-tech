import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'
import { services } from '@/lib/services'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: [string, number][] = [
    ['/', 1],
    ...services.map((s): [string, number] => [`/servicios/${s.slug}/`, 0.8]),
    ['/sector-publico/', 0.8],
    ['/privacidad/', 0.2],
    ['/terminos/', 0.2],
    ['/libro-de-reclamaciones/', 0.2],
  ]
  return pages.map(([path, priority]) => ({ url: `${site.url}${path}`, changeFrequency: 'monthly', priority }))
}
