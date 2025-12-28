self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("signal30s").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/style.css",
        "/app.js"
      ]);
    })
  );
});
