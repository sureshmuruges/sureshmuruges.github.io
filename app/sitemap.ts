import type { MetadataRoute } from 'next'
import { profile } from '@/data/profile'
import { workProjects } from '@/data/projects'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = profile.siteUrl
  const staticRoutes = ['', '/about', '/work', '/projects', '/projects/laravel-tracksen', '/resume'].map((path) => ({
    url: `${base}${path}/`,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.7,
  }))
  const workRoutes = workProjects.map((p) => ({
    url: `${base}/work/${p.slug}/`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))
  return [...staticRoutes, ...workRoutes]
}
