const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
  "/pwa-htmlcssjs/",
  "/pwa-htmlcssjs/index.html",
  "/pwa-htmlcssjs/css/style.css",
  "/pwa-htmlcssjs/js/app.js",
  "/pwa-htmlcssjs/images/coffee1.jpg",
  "/pwa-htmlcssjs/images/coffee2.jpg",
  "/pwa-htmlcssjs/images/coffee3.jpg",
  "/pwa-htmlcssjs/images/coffee4.jpg",
  "/pwa-htmlcssjs/images/coffee5.jpg",
  "/pwa-htmlcssjs/images/coffee6.jpg",
  "/pwa-htmlcssjs/images/coffee7.jpg",
  "/pwa-htmlcssjs/images/coffee8.jpg",
  "/pwa-htmlcssjs/images/coffee9.jpg",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
