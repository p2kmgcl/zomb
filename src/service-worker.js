const CACHE_ID = 'app-cache-1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(keys.map((key) => caches.delete(key)));
    }),
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  if (
    event.request.method === 'GET' &&
    [
      location.origin,
      'https://fonts.gstatic.com',
      'https://fonts.googleapis.com',
    ].indexOf(url.origin) !== -1
  ) {
    event.respondWith(
      caches
        .open(CACHE_ID)
        .then((cache) => {
          return cache
            .match(event.request)
            .then((cachedResponse) => ({ cache, cachedResponse }));
        })
        .then(({ cache, cachedResponse }) => {
          cache.add(event.request);
          return { cache, cachedResponse };
        })
        .then(({ cachedResponse }) => {
          if (cachedResponse) {
            return cachedResponse;
          }

          return fetch(event.request);
        }),
    );
  }
});
