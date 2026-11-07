import type { APIRoute } from 'astro';
import { langs, defaultLang, pathFor } from '../data/i18n';

// Карта сайта для поисковиков: все языковые версии визитки и связи между ними (hreflang).
// Собирается из списка языков — новый язык попадёт сюда сам.
export const GET: APIRoute = ({ site }) => {
  const abs = (path: string) => new URL(path, site).href;
  const alternates = [
    ...langs.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${abs(pathFor(l))}"/>`),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(pathFor(defaultLang))}"/>`,
  ].join('\n');
  const urls = langs
    .map((l) => `  <url>\n    <loc>${abs(pathFor(l))}</loc>\n${alternates}\n  </url>`)
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
  return new Response(body, { headers: { 'content-type': 'application/xml; charset=utf-8' } });
};
