self.addEventListener('install', (event) => {
    console.log('[Service Worker] 安裝成功');
});

self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request).catch(() => new Response('目前處於離線狀態，請連接網路。')));
});