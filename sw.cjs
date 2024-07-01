const {
  Worker, isMainThread, parentPort, workerData,
} = require('node:worker_threads');
new Worker('./uv.sw.cjs');

const sw = new UVServiceWorker();

self.addEventListener('fetch', event =>
    event.respondWith(
        sw.fetch(event)
    )
);
