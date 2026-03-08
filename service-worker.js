const CACHE_NAME = "ramadan-focus-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/ramadan-bg-2.webp",
  "/ramadan-bg-2.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});