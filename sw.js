const CACHE_NAME = "my-money-v4";
const FILES = ["./", "./index.html", "./styles.css", "./app.js", "./security.js", "./recurring.js", "./cloud.js", "./manifest.webmanifest", "./icon.svg"];
self.addEventListener("install", event => event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))));
self.addEventListener("activate", event => event.waitUntil(self.clients.claim()));
self.addEventListener("fetch", event => event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request))));
