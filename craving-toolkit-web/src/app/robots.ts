import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/success'], // Hide backend routes and the success page from Google
    },
    sitemap: 'https://cravingtoolkit.com/sitemap.xml',
  }
}
