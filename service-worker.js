const CACHE_NAME = "english-practice-cache-v1";
const urlsToCache = [
    "/english-practice/index.html",
    "/english-practice/manifest.json",
    "/english-practice/icon-192.png",
    "/english-practice/icon-512.png"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
