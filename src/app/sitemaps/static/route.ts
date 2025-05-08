import { navLinks } from '@/helpers/data';

export async function GET() {
  const baseUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : process.env.NEXT_PUBLIC_SITE_URL;

  const staticPages = navLinks
    .filter(page => !page.name.includes('Event'))
    .map(staticPagePath => {
      return `${baseUrl}${staticPagePath.link}`;
    });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${staticPages
              .map(url => {
                return `
                        <url>
                            <loc>${url}</loc>
                            <priority>1</priority>
                            <lastmod>${new Date().toISOString()}</lastmod>
                        </url>
                    `;
              })
              .join('')}
        </urlset>
    `;
  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
