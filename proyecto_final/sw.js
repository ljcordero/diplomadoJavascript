const CACHE_NAME = "task-manager-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/index.js",
  "/favicon.png",
  "https://cdnjs.cloudflare.com/ajax/libs/uuid/8.1.0/uuidv4.min.js",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css",
];

self.addEventListener("install", function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      // Magic is here. Look the  mode: 'no-cors' part.
      cache.addAll(urlsToCache).then(function () {
        console.log("All resources have been fetched and cached.");
      });
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
