// service worker بسيط بدون تخزين مؤقت (cache) لتفادي مشاكل ظهور نسخ قديمة
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) => Promise.all(names.map((name) => caches.delete(name))))
  );
  self.clients.claim();
});

// لا يوجد fetch handler عمدًا: كل الطلبات تروح للشبكة مباشرة بدون كاش
