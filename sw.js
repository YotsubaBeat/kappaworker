importScripts('uv.sw.js');

const sw = new UVServiceWorker();

const cacheFiles = [
  '/',
  'public/index.html',
  'server.js',
  'public/style.css'
];

self.addEventListener('fetch', event =>
    event.respondWith(
        sw.fetch(event)
    )
);
