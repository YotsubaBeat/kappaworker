const sw = new UVServiceWorker();

self.addEventListener('fetch', event =>
    event.respondWith(
        sw.fetch(event)
    )
);
