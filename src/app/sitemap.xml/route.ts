function generateSitemapEntry(loc: string): string {
  return `
        <sitemap>
            <loc>${loc}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
        </sitemap>`;
}

function generateSitemap(baseUrl: string): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
        <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${generateSitemapEntry(`${baseUrl}/sitemaps/static`)}
        </sitemapindex>`.trim();
}

export async function GET(): Promise<Response> {
  const baseUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : process.env.NEXT_PUBLIC_SITE_URL;

  try {
    const sitemap = generateSitemap(baseUrl as string);

    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
