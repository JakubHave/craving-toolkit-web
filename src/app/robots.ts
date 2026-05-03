import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.cravingtoolkit.com/sitemap.xml',
    host: 'https://www.cravingtoolkit.com',
  }
}
