const CACHE_NAME = "pwat-cache";
const urlsToCache = [
  './',
  './style.css',
  './img/logo192.png'
]

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open("static").then(function(cache){
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('activate', function(event){
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event){
  event.respondWith(
    caches.match(event.request).then(function(response){
      return response || fetch(event.request);
    })
  );
});

// self.addEventListener("install", e => {
//   e.waitUntil(
//     caches.open("static").then(cache => {
//       return cache.addAll(["./", "./style.css", "./img/logo192.png"]);
//     })
//   );
// });

// self.addEventListener("fetch" , e => {
//   e.respondWith(
//     caches.match(e.request).then(response => {
//       return response || fetch(e.request);    
//     })
//   )
// })