self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("static").then(cache => {
      return cache.addAll(["./", "./styles.css", "./img/logo192.png"]);
    })
  );
});