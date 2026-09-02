import type { APIRoute } from 'astro';
import { videos } from '../data/profile';

// Версия фиксируется в момент сборки: каждый деплой = новый кэш, старый вычищается.
const VERSION = new Date().toISOString().replace(/\D/g, '').slice(0, 14);

const PRECACHE = [
  '/',
  '/badge.png',
  '/favicon-32.png',
  '/favicon-192.png',
  '/manifest.webmanifest',
  ...videos.map((v) => v.thumb),
];

const source = `// Сгенерирован src/pages/sw.js.ts — править там.
const CACHE = 'zico-${VERSION}';
const PRECACHE = ${JSON.stringify(PRECACHE)};

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      // addAll падает целиком, если хоть один запрос неудачен — кладём поштучно
      .then((cache) => Promise.allSettled(PRECACHE.map((url) => cache.add(url))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Страница: сначала сеть, чтобы правки доезжали сразу; кэш — только запасной путь офлайн.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put('/', copy));
          return res;
        })
        .catch(() => caches.match('/').then((hit) => hit || Response.error()))
    );
    return;
  }

  // Ассеты: отдаём из кэша мгновенно, свежую копию подтягиваем в фоне.
  event.respondWith(
    caches.match(req).then((cached) => {
      const fromNet = fetch(req)
        .then((res) => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then((cache) => cache.put(req, copy));
          }
          return res;
        })
        .catch(() => cached);
      return cached || fromNet;
    })
  );
});
`;

export const GET: APIRoute = () =>
  new Response(source, {
    headers: {
      'content-type': 'application/javascript; charset=utf-8',
      'cache-control': 'no-cache',
    },
  });
